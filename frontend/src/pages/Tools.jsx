import { Link } from "react-router-dom";
import ToolIcon from "../components/ToolIcon";
import { tools } from "../data/tools";

const pathById = {
  1: "/tools/ats",
  2: "/tools/resume-bullets",
  3: "/tools/interview-questions",
  4: "/tools/career-matrix",
};

const Tools = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-gray-900">
        Powerful Career Tools
      </h1>
      <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
        Choose a tool and take the next step in your career.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={pathById[tool.id] || "/tools"}
            className="flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm transition hover:border-indigo-300 hover:shadow-lg"
          >
            <div className="mb-5">
              <ToolIcon name={tool.icon} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">{tool.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-gray-600">
              {tool.description}
            </p>
            <span className="mt-6 inline-flex items-center font-medium text-indigo-600">
              Open Tool
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tools;
