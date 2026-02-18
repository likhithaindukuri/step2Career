import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import { tools } from "../data/tools";

const Tools = () => {
  return (
    <div className="bg-white">
      {/* Pain Points Hero */}
      <section className="border-b-4 border-red-200 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mb-8 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-700">
            The Reality Check
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Tired of Getting Rejected?
          </h1>
          <div className="mx-auto max-w-3xl space-y-4 text-left">
            <div className="flex items-start gap-4 rounded-xl border-2 border-red-200 bg-white p-5 shadow-sm">
              <span className="mt-1 text-2xl">😞</span>
              <div>
                <p className="font-semibold text-gray-900">
                  Applied to 50+ jobs, got 0 calls?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Your resume is probably missing ATS keywords. Recruiters never even see it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border-2 border-red-200 bg-white p-5 shadow-sm">
              <span className="mt-1 text-2xl">😰</span>
              <div>
                <p className="font-semibold text-gray-900">
                  Weak resume bullets that don&apos;t stand out?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Generic descriptions get ignored. You need impact-driven lines that show results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border-2 border-red-200 bg-white p-5 shadow-sm">
              <span className="mt-1 text-2xl">🤯</span>
              <div>
                <p className="font-semibold text-gray-900">
                  No idea what interview questions to expect?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Walking into interviews unprepared. You need role-specific questions to practice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border-2 border-red-200 bg-white p-5 shadow-sm">
              <span className="mt-1 text-2xl">😕</span>
              <div>
                <p className="font-semibold text-gray-900">
                  Confused about your career path?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Don&apos;t know what skills to learn next or how to reach your target role.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-4 border-indigo-500 bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white shadow-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-200">
              The Solution
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Stop Guessing. Start Fixing.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-indigo-100">
              Four powerful tools that solve exactly these problems. No fluff. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Pick Your Problem. Get Your Solution.
          </h2>
          <p className="mt-3 text-gray-600">
            Each tool fixes one specific pain point. Start with what hurts most.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              cta={tool.cta}
              description={tool.description}
              icon={tool.icon}
              id={tool.id}
              title={tool.title}
            />
          ))}
        </div>
      </section>

      {/* Recommended Flow */}
      <section className="border-t-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              💡 Recommended Flow for Best Results
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-gray-700">
              <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
                1. Resume Bullets
              </span>
              <span className="text-indigo-600">→</span>
              <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
                2. ATS Matcher
              </span>
              <span className="text-indigo-600">→</span>
              <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
                3. Interview Questions
              </span>
              <span className="text-indigo-600">→</span>
              <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
                4. Career Matrix
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Fix your story → Get shortlisted → Prepare for interviews → Plan long-term growth
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
