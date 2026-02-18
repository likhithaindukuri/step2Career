import { useState } from "react";
import { generateInterviewQuestions } from "../../api/atsApi";
import Loader from "../../components/Loader";

const InterviewQuestions = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(8);
  const [resumeText, setResumeText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setErrorMessage(
        "Paste your resume highlights and the job description to generate questions."
      );
      return;
    }

    setErrorMessage("");
    setLoading(true);
    try {
      const safeCount =
        Number.isNaN(Number(questionCount)) || Number(questionCount) <= 0
          ? 8
          : Number(questionCount);
      const data = await generateInterviewQuestions(
        resumeText,
        jobDescription,
        safeCount
      );
      setResult(data);
    } catch {
      setErrorMessage(
        "We could not generate interview questions right now. Please simplify your inputs and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Loader text="Generating role-specific interview questions..." />
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
              Interview Question Generator
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Practice with real interview questions
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">
              Get targeted questions based on your resume and the job description.
              Practice these before your interview to feel confident and prepared.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Key resume highlights
            </label>
            <textarea
              rows={8}
              value={resumeText}
              onChange={(event) => setResumeText(event.target.value)}
              placeholder="Paste the most relevant parts of your resume for this role..."
              className="w-full resize-none rounded-lg border-2 border-gray-200 p-4 text-gray-700 transition focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Job description
            </label>
            <textarea
              rows={8}
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the job description or responsibilities section..."
              className="w-full resize-none rounded-lg border-2 border-gray-200 p-4 text-gray-700 transition focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold text-gray-900">
                Number of questions
              </label>
              <input
                type="number"
                min={3}
                max={20}
                value={questionCount}
                onChange={(event) => setQuestionCount(event.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm transition focus:border-indigo-500 focus:outline-none sm:w-32"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-600">
                Between 3 and 20. We recommend 8–12 for focused practice.
              </p>
            </div>
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
            Generate Questions
          </button>
        </div>

        {result && result.questions && result.questions.length > 0 && (
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Questions to practice
              </h2>
              <ul className="space-y-4">
                {result.questions.map((item, index) => (
                  <li
                    key={`${item.question}-${index.toString()}`}
                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {item.question}
                        </span>
                      </span>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700">
                          {item.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                          {item.difficulty}
                        </span>
                      </div>
                    </div>
                    {item.reason && (
                      <div className="mt-3 rounded-lg bg-indigo-50 p-3">
                        <p className="text-xs font-medium text-indigo-900">
                          Why this matters:
                        </p>
                        <p className="mt-1 text-xs text-indigo-800">
                          {item.reason}
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default InterviewQuestions;

