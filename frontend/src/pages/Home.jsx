import { Link } from "react-router-dom";
import HeroIllustration from "../components/HeroIllustration";
import { tools } from "../data/tools";
import ToolCard from "../components/ToolCard";

const stepIcons = [
  <svg key="1" className="mx-auto h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>,
  <svg key="2" className="mx-auto h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  <svg key="3" className="mx-auto h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-3 3m-6-6l-3-3m0 0v8" /></svg>,
  <svg key="4" className="mx-auto h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
];

const whyChooseCards = [
  {
    title: "Stop Resume Rejections",
    description: "Fix missing keywords and improve ATS score",
    icon: "✓",
  },
  {
    title: "Prepare for Interviews",
    description: "Get real interview questions and practice",
    icon: "✓",
  },
  {
    title: "Clear Career Direction",
    description: "Know exactly what to learn and do next",
    icon: "✓",
  },
  {
    title: "Save Time and Effort",
    description: "Everything in one platform",
    icon: "✓",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:py-24">
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Stop Getting Rejected. Start Getting Shortlisted.
            </h1>
            <p className="mt-5 text-lg font-medium text-gray-700">
              Step2Career helps students and freshers fix their resumes, prepare smarter, and become job-ready with AI-powered career tools.
            </p>
            <p className="mt-3 max-w-xl text-gray-600">
              Trusted by students preparing for Software, Data Science, Product, and IT roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="rounded-lg bg-amber-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-amber-600"
              >
                Get Started
              </Link>
              <Link
                to="/tools"
                className="rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
              >
                Explore Tools
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Free plan available
              </span>
              <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                No credit card required
              </span>
            </div>
          </div>
          <div className="w-full max-w-md flex-1">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Still confused why you&apos;re not getting shortlisted?
          </h2>
          <p className="mt-6 text-center text-gray-600">
            Most students struggle because they:
          </p>
          <ul className="mx-auto mt-4 max-w-2xl list-disc space-y-2 pl-6 text-gray-700">
            <li>Don&apos;t know what recruiters expect</li>
            <li>Have weak resume bullet points</li>
            <li>Miss important ATS keywords</li>
            <li>Don&apos;t know what to prepare for interviews</li>
            <li>Lack a clear career roadmap</li>
          </ul>
          <p className="mt-8 text-center text-xl font-semibold text-indigo-600">
            Step2Career solves all of this.
          </p>
        </div>
      </section>

      {/* What students say */}
      <section className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What students say
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-amber-500">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700">
                &quot;Step2Career helped me fix my resume and I got interview calls in 2 weeks.&quot;
              </p>
              <p className="mt-3 text-sm text-gray-500">— Final Year CSE Student</p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-amber-500">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700">
                &quot;The ATS checker showed me exactly which keywords I was missing. My match score improved in days.&quot;
              </p>
              <p className="mt-3 text-sm text-gray-500">— Fresher, Data Science</p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm">
              <p className="mb-2 text-amber-500">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700">
                &quot;Interview questions were so relevant to my target role. Felt much more prepared.&quot;
              </p>
              <p className="mt-3 text-sm text-gray-500">— B.Tech Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How ATS Checker works */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            See exactly what recruiters see
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Our ATS Keyword Matcher shows you what most students never see — so you can fix it before applying.
          </p>
          <ul className="mx-auto mt-8 max-w-xl space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> ATS score</li>
            <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Missing keywords</li>
            <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Match percentage</li>
            <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Suggestions to improve</li>
          </ul>
        </div>
      </section>

      {/* Target roles */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Step2Career helps students preparing for:
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Software Engineer", "Frontend Developer", "Backend Developer", "Data Analyst", "Data Scientist", "Product Manager", "UI/UX Designer"].map((role) => (
              <span key={role} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Choose Step2Career */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Students Choose Step2Career
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-2xl font-bold text-indigo-600">{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Powerful Career Tools
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Everything you need to fix your resume, crack interviews, and plan your career — no guesswork.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* How It Works */}
      <section className="bg-white py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
          Four simple steps from signup to job-ready.
        </p>
        <div className="mx-auto mt-12 max-w-5xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Create Account", "Choose Tool", "Improve Career", "Get Job Ready"].map((label, i) => (
              <div key={label} className="text-center">
                <div className="flex justify-center">{stepIcons[i]}</div>
                <h3 className="mt-3 font-semibold text-gray-900">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
          Start free. Upgrade when you&apos;re ready.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Free Plan</h3>
            <p className="mt-1 text-sm text-gray-500">Best for beginners</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">₹0<span className="text-base font-normal text-gray-500">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Resume Bullet Point Generator (5 per month)</li>
              <li>ATS Keyword Match Checker (3 per month)</li>
              <li>Interview Question Generator (3 per month)</li>
              <li>Career Matrix (limited access)</li>
            </ul>
            <Link to="/signup" className="mt-6 block rounded-lg border-2 border-gray-300 py-2.5 text-center font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600">
              Get Started Free
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Standard Plan</h3>
            <p className="mt-1 text-sm text-gray-500">Best for active job seekers</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">₹199<span className="text-base font-normal text-gray-500">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Unlimited Resume Bullet Point Generator</li>
              <li>Unlimited ATS Keyword Match Checker</li>
              <li>Unlimited Interview Question Generator</li>
              <li>Full Career Matrix access</li>
              <li>Resume improvement suggestions</li>
            </ul>
            <Link to="/pricing" className="mt-6 block rounded-lg border-2 border-indigo-500 py-2.5 text-center font-medium text-indigo-600 hover:bg-indigo-50">
              Upgrade to Standard
            </Link>
          </div>
          <div className="relative rounded-2xl border-2 border-amber-500 bg-amber-50/50 p-6 shadow-lg">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-medium text-white">⭐ MOST POPULAR</span>
            <h3 className="text-lg font-semibold text-gray-900">Pro Plan</h3>
            <p className="mt-1 text-sm text-gray-500">Best for serious career growth</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">₹399<span className="text-base font-normal text-gray-500">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Everything in Standard</li>
              <li>AI Mock Interview (unlimited) ⭐</li>
              <li>AI Interview Feedback ⭐</li>
              <li>Resume score improvement suggestions</li>
              <li>Interview readiness score</li>
              <li>Priority processing</li>
              <li>Early access to new features</li>
            </ul>
            <Link to="/pricing" className="mt-6 block rounded-lg bg-amber-500 py-2.5 text-center font-medium text-white hover:bg-amber-600">
              Go Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <p className="text-center text-xl font-medium text-gray-800">
          Helping students improve their resumes and interview preparation.
        </p>
      </section>
    </>
  );
};

export default Home;
