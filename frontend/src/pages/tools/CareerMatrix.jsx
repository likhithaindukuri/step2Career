import { useState } from "react";
import { generateCareerMatrix } from "../../api/atsApi";
import Loader from "../../components/Loader";

const CareerMatrix = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!currentRole.trim() || !targetRole.trim()) {
      setErrorMessage(
        "Add both your current role and your target role to generate a career path."
      );
      return;
    }

    setErrorMessage("");
    setLoading(true);
    try {
      const data = await generateCareerMatrix(
        currentRole,
        targetRole,
        interests
      );
      setResult(data);
    } catch {
      setErrorMessage(
        "We could not build your career matrix right now. Please simplify your inputs and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Loader text="Mapping skills and paths between your roles..." />
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
              Career Path Planner
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Map your path from current role to target role
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">
              Get a clear, staged roadmap with skills to learn, gaps to close, and
              focus areas at each step. Know exactly what to do next.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-3 block text-base font-semibold text-gray-900">
                Current role
              </label>
              <input
                type="text"
                value={currentRole}
                onChange={(event) => setCurrentRole(event.target.value)}
                placeholder="e.g., Frontend Developer, Student, QA Engineer"
                className="w-full rounded-lg border-2 border-gray-200 p-3 transition focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-semibold text-gray-900">
                Target role
              </label>
              <input
                type="text"
                value={targetRole}
                onChange={(event) => setTargetRole(event.target.value)}
                placeholder="e.g., Machine Learning Engineer, Product Manager"
                className="w-full rounded-lg border-2 border-gray-200 p-3 transition focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="mb-3 block text-base font-semibold text-gray-900">
              Interests, constraints, or preferences (optional)
            </label>
            <textarea
              rows={5}
              value={interests}
              onChange={(event) => setInterests(event.target.value)}
              placeholder="Mention domains you like, locations, time available to learn, or constraints like wanting remote work..."
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
            disabled={!currentRole.trim() || !targetRole.trim()}
            className="w-full rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            Generate Career Matrix
          </button>
        </div>

        {result && (
          <div className="mt-10 space-y-8">
            {result.summary && (
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Big-picture summary
                </h2>
                <p className="leading-relaxed text-gray-700">{result.summary}</p>
              </div>
            )}

            {(result.coreSkills || result.gaps) && (
              <div className="grid gap-6 md:grid-cols-2">
                {result.coreSkills && result.coreSkills.length > 0 && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <svg
                        className="h-5 w-5 text-green-600"
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
                      Skills already working in your favour
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                      {result.coreSkills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-start gap-2 rounded-lg bg-white p-2"
                        >
                          <span className="mt-0.5 text-green-600">✓</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.gaps && result.gaps.length > 0 && (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <svg
                        className="h-5 w-5 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      Gaps to close for this role
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                      {result.gaps.map((gap) => (
                        <li
                          key={gap}
                          className="flex items-start gap-2 rounded-lg bg-white p-2"
                        >
                          <span className="mt-0.5 text-amber-600">→</span>
                          <span>{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {result.stages && result.stages.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Suggested stages on your path
                </h2>
                <ol className="space-y-6">
                  {result.stages.map((stage, index) => (
                    <li
                      key={`${stage.label}-${index.toString()}`}
                      className="relative rounded-lg border-2 border-indigo-100 bg-indigo-50/50 p-6 pl-12 shadow-sm"
                    >
                      <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          {stage.label}
                        </span>
                      </div>
                      <p className="mb-4 text-gray-700">{stage.description}</p>
                      {stage.focusAreas && stage.focusAreas.length > 0 && (
                        <div className="rounded-lg bg-white p-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Focus Areas:
                          </p>
                          <ul className="space-y-1.5 text-sm text-gray-700">
                            {stage.focusAreas.map((area) => (
                              <li
                                key={area}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-0.5 text-indigo-600">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default CareerMatrix;

