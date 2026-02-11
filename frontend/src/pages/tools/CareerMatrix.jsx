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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Loader text="Mapping skills and paths between your roles..." />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Career Matrix
        </h1>
        <p className="text-gray-600">
          See how to move from where you are today to your target role, with
          clear stages and skills to focus on at each step.
        </p>
      </div>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Current role
          </label>
          <input
            type="text"
            value={currentRole}
            onChange={(event) => setCurrentRole(event.target.value)}
            placeholder="e.g., Frontend Developer, Student, QA Engineer"
            className="w-full rounded-lg border p-3"
          />
        </div>
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Target role
          </label>
          <input
            type="text"
            value={targetRole}
            onChange={(event) => setTargetRole(event.target.value)}
            placeholder="e.g., Machine Learning Engineer, Product Manager"
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-700">
          Interests, constraints, or preferences (optional)
        </label>
        <textarea
          rows={5}
          value={interests}
          onChange={(event) => setInterests(event.target.value)}
          placeholder="Mention domains you like, locations, time available to learn, or constraints like wanting remote work..."
          className="w-full resize-none rounded-lg border p-3"
        />
      </div>
      <button
        type="button"
        onClick={handleGenerate}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Generate Career Matrix
      </button>
      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-600">
          {errorMessage}
        </p>
      )}
      {result && (
        <div className="mt-10 space-y-8">
          {result.summary && (
            <div className="rounded-lg border bg-white p-4 text-sm text-gray-800">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Big-picture summary
              </h2>
              <p className="leading-relaxed">{result.summary}</p>
            </div>
          )}
          {(result.coreSkills || result.gaps) && (
            <div className="grid gap-6 md:grid-cols-2">
              {result.coreSkills && result.coreSkills.length > 0 && (
                <div className="rounded-lg border bg-gray-50 p-4 text-sm">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Skills already working in your favour
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-800">
                    {result.coreSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.gaps && result.gaps.length > 0 && (
                <div className="rounded-lg border bg-gray-50 p-4 text-sm">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Gaps to close for this role
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-gray-800">
                    {result.gaps.map((gap) => (
                      <li key={gap}>{gap}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {result.stages && result.stages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Suggested stages on your path
              </h2>
              <ol className="space-y-4">
                {result.stages.map((stage, index) => (
                  <li
                    key={`${stage.label}-${index.toString()}`}
                    className="rounded-lg border bg-white p-4 text-sm text-gray-800"
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-semibold text-gray-900">
                        Step {index + 1}: {stage.label}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-700">
                      {stage.description}
                    </p>
                    {stage.focusAreas && stage.focusAreas.length > 0 && (
                      <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-gray-700">
                        {stage.focusAreas.map((area) => (
                          <li key={area}>{area}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerMatrix;

