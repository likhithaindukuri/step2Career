import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const plans = [
  {
    name: "Free Plan",
    price: "₹0",
    period: "/month",
    bestFor: "Best for beginners",
    features: [
      "Resume Bullet Point Generator (5 per month)",
      "ATS Keyword Match Checker (3 per month)",
      "Interview Question Generator (3 per month)",
      "Career Matrix (limited access)",
    ],
    cta: "Get Started Free",
    ctaLinkPublic: "/signup",
    ctaLinkAuth: "/signup",
    highlight: false,
  },
  {
    name: "Standard Plan",
    price: "₹199",
    period: "/month",
    bestFor: "Best for active job seekers",
    features: [
      "Unlimited ATS Checker",
      "Unlimited Bullet Generator",
      "Unlimited Interview Questions",
      "Full Career Matrix access",
      "Resume improvement suggestions",
    ],
    cta: "Upgrade to Standard",
    ctaLinkPublic: "/login?redirect=/pricing",
    ctaLinkAuth: "/pricing",
    highlight: false,
  },
  {
    name: "Pro Plan",
    price: "₹399",
    period: "/month",
    bestFor: "Best for serious career growth",
    features: [
      "Everything in Standard",
      "AI Mock Interview (unlimited) ⭐",
      "AI Interview Feedback ⭐",
      "Resume score improvement suggestions",
      "Interview readiness score",
      "Priority processing",
      "Early access to new features",
    ],
    cta: "Go Pro",
    ctaLinkPublic: "/login?redirect=/pricing",
    ctaLinkAuth: "/pricing",
    highlight: true,
  },
];

const Pricing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-gray-900">
        Pricing
      </h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
        Start free. Upgrade when you&apos;re ready. No hidden fees.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.highlight
                ? "relative rounded-2xl border-2 border-amber-500 bg-amber-50/50 p-8 shadow-lg"
                : "rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            }
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-medium text-white">
                ⭐ MOST POPULAR
              </span>
            )}
            <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{plan.bestFor}</p>
            <p className="mt-3 text-3xl font-bold text-gray-900">
              {plan.price}
              <span className="text-base font-normal text-gray-500">{plan.period}</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-indigo-600">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              to={isAuthenticated ? plan.ctaLinkAuth : plan.ctaLinkPublic}
              className={
                plan.highlight
                  ? "mt-8 block rounded-lg bg-amber-500 py-3 text-center font-medium text-white hover:bg-amber-600"
                  : "mt-8 block rounded-lg border-2 border-gray-300 py-3 text-center font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
              }
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-gray-500">
        Payments powered by Razorpay. Secure and reliable.
      </p>
    </div>
  );
};

export default Pricing;
