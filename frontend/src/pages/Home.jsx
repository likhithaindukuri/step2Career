import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col items-center py-16 text-center">
      {/* Main headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl">
        Understand why your resume gets rejected —
        <span className="text-indigo-600"> and what to fix</span>
      </h1>

      {/* Sub headline */}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        We help students, fresh graduates, and professionals analyze their resume,
        improve bullet points, and prepare better for interviews.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/tools"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
        >
          Analyze My Resume
        </Link>

        <Link
          to="/how-it-works"
          className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100"
        >
          How it Works
        </Link>
      </div>

      {/* Trust text */}
      <p className="mt-6 text-sm text-gray-500">
        We don&apos;t promise jobs. We help you understand and improve.
      </p>

      {/* Trust section */}
      <div className="mt-10 max-w-4xl rounded-xl bg-white p-6 text-left shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Built for students. Designed to explain, not judge.
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          No fake guarantees. No &quot;get a job in 7 days&quot; promises. We
          focus on clarity, not hype.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700 leading-relaxed">
          <li>ATS-focused, not generic scoring.</li>
          <li>Resume-specific, role-aware suggestions.</li>
          <li>Beginner-friendly language, no scary jargon.</li>
          <li>Honest guidance so you know what to fix next.</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
