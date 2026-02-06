const KeywordList = ({ title, keywords, type, showCopyAll = false }) => {
  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {showCopyAll && keywords.length > 0 && (
          <button
            type="button"
            onClick={() => {
              const text = keywords.join(", ");
              navigator.clipboard.writeText(text).catch(() => undefined);
            }}
            className="text-xs font-medium text-indigo-600 hover:underline"
          >
            Copy all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word) => (
          <span
            key={word}
            className={`rounded-full px-3 py-1 text-sm ${
              type === "missing"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordList;

