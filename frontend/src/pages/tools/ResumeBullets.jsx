import { useState } from "react";
import { generateResumeBullets } from "../../api/atsApi";
import Loader from "../../components/Loader";

const ResumeBullets = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setErrorMessage(
        "Add the resume section you want to improve and the matching job description."
      );
      return;
    }

    setErrorMessage("");
    setLoading(true);
    try {
      const data = await generateResumeBullets(resumeText, jobDescription);
      setResult(data);
    } catch {
      setErrorMessage(
        "We could not rewrite your bullet points right now. Please simplify your text and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Loader text="Rewriting your bullet points to match the role..." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Resume Bullet Point Generator
        </h1>
        <p className="text-gray-600">
          Paste one or more resume lines and the job description. We will turn
          them into clear, results-driven bullet points tailored to the role.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Resume section to improve
        </label>
        <textarea
          rows={6}
          value={resumeText}
          onChange={(event) => setResumeText(event.target.value)}
          placeholder="Paste the resume lines you want to improve..."
          className="w-full resize-none rounded-lg border p-3"
        />
        <p className="mt-1 text-xs text-gray-500">
          Tip: Focus on the role or experience most relevant to this job.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Matching job description
        </label>
        <textarea
          rows={6}
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the most important parts of the job description..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <button
        type="button"
        onClick={handleGenerate}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Improve Bullet Points
      </button>
      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-600">
          {errorMessage}
        </p>
      )}
      {result && (
        <div className="mt-10 space-y-6">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Rewritten bullet points
            </h2>
            <ul className="space-y-2">
              {result.improvedBullets?.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-800"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          {result.guidanceSummary && (
            <div className="rounded-lg border bg-white p-4 text-sm text-gray-700">
              <h3 className="mb-2 font-semibold">
                Why these changes work better
              </h3>
              <p className="leading-relaxed">{result.guidanceSummary}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeBullets;

