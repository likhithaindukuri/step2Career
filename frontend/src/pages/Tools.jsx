import ToolCard from "../components/ToolCard";
import { tools } from "../data/tools";

const Tools = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Career Tools Built for Real Job Problems
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          We help you understand what’s wrong, what to fix, and how to move
          forward — not just show a score.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            cta={tool.cta}
            description={tool.description}
            id={tool.id}
            title={tool.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
