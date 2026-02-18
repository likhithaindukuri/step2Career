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
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Loader text="Analyzing your resume like an ATS system..." />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <section className="border-b border-indigo-100">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              ATS Keyword Matcher
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              See exactly what recruiters see
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">
              Upload your resume and paste the job description. We&apos;ll show you
              your ATS score, missing keywords, and exactly what to fix before
              applying.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Upload Resume (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setResumeFile(file ?? null);
                }}
                className="w-full rounded-lg border-2 border-dashed border-gray-300 p-4 transition hover:border-indigo-400 focus:border-indigo-500 focus:outline-none"
              />
              {resumeFile && (
                <p className="mt-2 text-sm text-green-600">
                  ✓ {resumeFile.name}
                </p>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Your resume is processed securely and not stored.
            </p>
          </div>

          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Job Description
            </label>
            <textarea
              rows={10}
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the complete job description here..."
              className="w-full resize-none rounded-lg border-2 border-gray-200 p-4 text-gray-700 transition focus:border-indigo-500 focus:outline-none"
            />
            <p className="mt-2 text-xs text-gray-500">
              Tip: Include the full job description for better keyword matching.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-medium text-red-800">
                {errorMessage}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={!resumeFile || !jobDescription.trim()}
            className="w-full rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            Analyze Resume
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-lg bg-gray-50 p-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure & Private
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Instant Results
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Actionable Insights
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATSMatcher;