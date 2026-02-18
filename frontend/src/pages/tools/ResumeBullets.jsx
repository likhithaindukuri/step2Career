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
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Loader text="Rewriting your bullet points to match the role..." />
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
              Resume Bullet Generator
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Turn weak bullets into strong, impact-driven lines
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">
              Paste your current resume bullets and the job description. We&apos;ll
              rewrite them with quantifiable results, action verbs, and
              role-specific keywords that get you shortlisted.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Resume section to improve
            </label>
            <textarea
              rows={8}
              value={resumeText}
              onChange={(event) => setResumeText(event.target.value)}
              placeholder="Paste the resume lines you want to improve..."
              className="w-full resize-none rounded-lg border-2 border-gray-200 p-4 text-gray-700 transition focus:border-indigo-500 focus:outline-none"
            />
            <p className="mt-2 text-xs text-gray-500">
              Tip: Focus on the role or experience most relevant to this job.
            </p>
          </div>

          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Matching job description
            </label>
            <textarea
              rows={8}
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the most important parts of the job description..."
              className="w-full resize-none rounded-lg border-2 border-gray-200 p-4 text-gray-700 transition focus:border-indigo-500 focus:outline-none"
            />
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
            onClick={handleGenerate}
            disabled={!resumeText.trim() || !jobDescription.trim()}
            className="w-full rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            Improve Bullet Points
          </button>
        </div>

        {result && (
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Your improved bullet points
              </h2>
              <ul className="space-y-4">
                {result.improvedBullets?.map((bullet, index) => (
                  <li
                    key={`${bullet}-${index.toString()}`}
                    className="flex items-start gap-3 rounded-lg border border-indigo-100 bg-indigo-50/50 p-4 text-sm text-gray-800"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="flex-1 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {result.guidanceSummary && (
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Why these changes work better
                </h3>
                <p className="leading-relaxed text-gray-700">
                  {result.guidanceSummary}
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ResumeBullets;

