import { Link } from "react-router-dom";

const ToolCard = ({ cta, description, id, title }) => {
  const path =
    id === 1
      ? "/tools/ats"
      : id === 2
        ? "/tools/resume-bullets"
        : id === 3
          ? "/tools/interview-questions"
          : "/tools/career-matrix";

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mb-6 leading-relaxed text-gray-600">
        {description}
      </p>
      <Link
        to={path}
        className="font-medium text-indigo-600 hover:underline"
      >
        {cta} →
      </Link>
    </div>
  );
};

export default ToolCard;