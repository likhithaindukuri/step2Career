import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeATSWithFile } from "../../api/atsApi";
import Loader from "../../components/Loader";

const ATSMatcher = () => {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      setErrorMessage(
        "Please upload your resume (PDF) and add the job description."
      );
      return;
    }

    setErrorMessage("");
    setLoading(true);
    try {
      const data = await analyzeATSWithFile(resumeFile, jobDescription);
      navigate("/tools/ats/result", { state: { atsResult: data } });
    } catch {
      setErrorMessage(
        "We could not analyze your resume right now. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Loader text="Analyzing your resume like an ATS system..." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          ATS Resume Matcher
        </h1>
        <p className="text-gray-600">
          Upload your resume PDF and paste the job description to see how an ATS
          system might compare them and what you can improve.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Upload Resume (PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(event) => {
            const file = event.target.files?.[0];
            setResumeFile(file ?? null);
          }}
          className="w-full rounded-lg border p-3"
        />
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Job Description
        </label>
        <textarea
          rows="8"
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the job description here..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <button
        type="button"
        onClick={handleAnalyze}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Analyze Resume
      </button>
      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-600">
          {errorMessage}
        </p>
      )}
      <p className="mt-4 text-sm text-gray-500">
        We do not store your resume. Your data stays private.
      </p>
    </div>
  );
};

export default ATSMatcher;