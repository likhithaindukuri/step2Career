import KeywordList from "../../components/KeywordList";
import ScoreRing from "../../components/ScoreRing";
import SuggestionCard from "../../components/SuggestionCard";
import { useLocation } from "react-router-dom";

const ATSResult = () => {
  const location = useLocation();
  const data = location.state?.atsResult;

  if (!data) {
    return (
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-lg font-medium text-gray-700">
            Paste your resume &amp; job description to begin
          </p>
          <p className="mt-2 text-sm text-gray-500">
            We&apos;ll explain what ATS systems look for — step by step.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <section className="border-b border-indigo-100">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              ATS Analysis Results
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Your ATS Compatibility Score
            </h1>
            <p className="mx-auto max-w-2xl text-gray-700">{data.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex justify-center">
            <ScoreRing score={data.atsScore} />
          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            This analysis simulates common ATS patterns. Actual systems may vary.
          </p>

          <div className="mt-8 rounded-lg border-2 border-indigo-100 bg-indigo-50 p-6">
            <div className="mb-2 flex items-center gap-2">
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
              <strong className="text-base text-gray-900">
                What this score means:
              </strong>
            </div>
            <p className="leading-relaxed text-gray-700">
              Your resume has an approximate {data.atsScore}% alignment with this
              job description. Improving keyword relevance and role-specific
              phrasing can increase your chances of being shortlisted by ATS
              systems.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <KeywordList
              title="Keywords Already Matched"
              keywords={data.matchedKeywords}
              type="matched"
            />
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <KeywordList
              title="Keywords to Add"
              keywords={data.missingKeywords}
              type="missing"
              showCopyAll
            />
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {data.atsScore >= 90
              ? "Optional ways to polish your resume"
              : "How to improve your resume for this role"}
          </h3>
          {data.atsScore >= 90 && (
            <p className="mb-6 text-sm text-gray-600">
              You already look like a strong match. These are small tweaks that
              can make your resume even clearer for recruiters and ATS systems.
            </p>
          )}
          <div className="space-y-3">
            {data.improvementSuggestions?.map((tip) => (
              <SuggestionCard key={tip} text={tip} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATSResult;
