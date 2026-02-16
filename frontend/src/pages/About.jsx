import { Link } from "react-router-dom";

const values = [
  {
    title: "Honest guidance",
    description: "We explain why your resume gets rejected and what to fix — no fake scores or empty promises.",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Built for freshers",
    description: "Language and tools designed for students and early-career professionals — no jargon.",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Clarity over hype",
    description: "We don't promise jobs in 7 days. We help you understand ATS, improve your resume, and prepare for interviews.",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Step2Career</h1>
          <p className="mt-4 text-xl text-gray-600">
            We exist to help you understand rejection — not to promise jobs. Real tools for real career growth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Our mission</h2>
        <p className="mt-4 leading-relaxed text-gray-600">
          Students and freshers wake up every day asking: &quot;Why isn&apos;t my resume getting shortlisted?&quot; or &quot;How do I even prepare for interviews?&quot; Step2Career is built for that moment. We give you ATS-friendly resume tools, interview question generators, and career path visualizers — so you can see what&apos;s wrong, fix it, and move forward with clarity instead of guesswork.
        </p>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">What we stand for</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Who we&apos;re for</h2>
        <p className="mt-4 leading-relaxed text-gray-600">
          Students, fresh graduates, and career switchers who are tired of applying blindly. If you want to know why your resume isn&apos;t matching job descriptions, how to write stronger bullet points, what questions to expect in interviews, and how to plan your next career step — Step2Career is your toolkit.
        </p>
        <div className="mt-8">
          <Link
            to="/signup"
            className="inline-block rounded-lg bg-amber-500 px-6 py-3 font-medium text-white hover:bg-amber-600"
          >
            Get started free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
