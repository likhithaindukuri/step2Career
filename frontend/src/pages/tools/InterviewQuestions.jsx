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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Loader text="Generating role-specific interview questions..." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Interview Question Generator
        </h1>
        <p className="text-gray-600">
          Use your resume and the job description to get targeted questions you
          are likely to face in interviews for this role.
        </p>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Key resume highlights
        </label>
        <textarea
          rows={6}
          value={resumeText}
          onChange={(event) => setResumeText(event.target.value)}
          placeholder="Paste the most relevant parts of your resume for this role..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Job description
        </label>
        <textarea
          rows={6}
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the job description or responsibilities section..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="block text-sm font-medium text-gray-700">
          Number of questions
        </label>
        <input
          type="number"
          min={3}
          max={20}
          value={questionCount}
          onChange={(event) => setQuestionCount(event.target.value)}
          className="w-28 rounded-lg border p-2 text-sm"
        />
        <p className="text-xs text-gray-500">
          Between 3 and 20. We recommend 8–12 for focused practice.
        </p>
      </div>
      <button
        type="button"
        onClick={handleGenerate}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Generate Questions
      </button>
      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-600">
          {errorMessage}
        </p>
      )}
      {result && result.questions && result.questions.length > 0 && (
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Questions to practice
          </h2>
          <ul className="space-y-4">
            {result.questions.map((item, index) => (
              <li
                key={`${item.question}-${index.toString()}`}
                className="rounded-lg border bg-white p-4 text-sm text-gray-800"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-gray-900">
                    Q{index + 1}. {item.question}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.category} · {item.difficulty}
                  </span>
                </div>
                {item.reason && (
                  <p className="mt-2 text-xs text-gray-600">
                    Why this matters: {item.reason}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InterviewQuestions;

