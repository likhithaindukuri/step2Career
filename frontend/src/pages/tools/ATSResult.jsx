import KeywordList from "../../components/KeywordList";
import ScoreRing from "../../components/ScoreRing";
import SuggestionCard from "../../components/SuggestionCard";
import { useLocation } from "react-router-dom";

const ATSResult = () => {
  const location = useLocation();
  const data = location.state?.atsResult;

  if (!data) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center text-gray-500">
        <p className="text-lg font-medium">
          Paste your resume &amp; job description to begin
        </p>
        <p className="mt-2 text-sm">
          We&apos;ll explain what ATS systems look for — step by step.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          ATS Compatibility Score
        </h1>
        <p className="text-gray-600">{data.summary}</p>
      </div>

      <div className="mt-8">
        <ScoreRing score={data.atsScore} />
      </div>

      <p className="mt-2 text-center text-xs text-gray-500">
        This analysis simulates common ATS patterns. Actual systems may vary.
      </p>

      <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">
        <strong>What this score means:</strong>
        <p className="mt-1 leading-relaxed">
          Your resume has an approximate {data.atsScore}% alignment with this
          job description. Improving keyword relevance and role-specific
          phrasing can increase your chances of being shortlisted by ATS
          systems.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <KeywordList
          title="Keywords Already Matched"
          keywords={data.matchedKeywords}
          type="matched"
        />
        <KeywordList
          title="Keywords to Add"
          keywords={data.missingKeywords}
          type="missing"
          showCopyAll
        />
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="font-semibold">
          {data.atsScore >= 90
            ? "Optional ways to polish your resume"
            : "How to improve your resume for this role"}
        </h3>
        {data.atsScore >= 90 && (
          <p className="text-sm text-gray-600">
            You already look like a strong match. These are small tweaks that
            can make your resume even clearer for recruiters and ATS systems.
          </p>
        )}
        {data.improvementSuggestions?.map((tip) => (
          <SuggestionCard key={tip} text={tip} />
        ))}
      </div>
    </div>
  );
};

export default ATSResult;
