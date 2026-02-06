import { getScoreColor } from "../utils/scoreColor";

const getLabel = (score) => {
  if (score >= 80) {
    return "Excellent match";
  }
  if (score >= 60) {
    return "Good potential";
  }
  if (score >= 40) {
    return "Needs improvements";
  }
  return "Low match";
};

const ScoreRing = ({ score }) => {
  const color = getScoreColor(score);
  const label = getLabel(score);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={`flex h-32 w-32 items-center justify-center rounded-full border-8 ${color}`}
      >
        <span className="text-3xl font-bold">{score}</span>
      </div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
};

export default ScoreRing;


