import { Link } from "react-router-dom";
import ToolIcon from "./ToolIcon";

const pathById = {
  1: "/tools/ats",
  2: "/tools/resume-bullets",
  3: "/tools/interview-questions",
  4: "/tools/career-matrix",
};

const ToolCard = ({ cta, description, icon, id, title }) => {
  const path = pathById[id] || "/tools";

  return (
    <Link
      to={path}
      className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
    >
      <div className="mb-4">
        <ToolIcon name={icon} />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 flex-1 leading-relaxed text-gray-600">{description}</p>
      <span className="font-medium text-indigo-600 hover:underline">
        {cta} →
      </span>
    </Link>
  );
};

export default ToolCard;
