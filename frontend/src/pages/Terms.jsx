const Terms = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900">Terms of Service – Step2Career</h1>
    <p className="mt-2 text-sm text-gray-500">Last updated: January 2026</p>

    <div className="mt-8 space-y-6 text-gray-700">
      <p>
        By using Step2Career, you agree to these terms.
      </p>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Service Description</h2>
        <p className="mt-3">Step2Career provides AI-powered tools including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Resume analysis</li>
          <li>ATS keyword matching</li>
          <li>Interview question generation</li>
          <li>Career roadmap visualization</li>
        </ul>
        <p className="mt-3">
          We do not guarantee job placement.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">User Responsibilities</h2>
        <p className="mt-3">You agree to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Provide accurate information</li>
          <li>Not misuse or abuse the platform</li>
          <li>Not attempt to hack, disrupt, or copy the service</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Account Access</h2>
        <p className="mt-3">
          You are responsible for maintaining the confidentiality of your account.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Payments</h2>
        <p className="mt-3">
          Paid plans provide access to premium features. Payments are processed securely through Razorpay.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Termination</h2>
        <p className="mt-3">
          We reserve the right to suspend accounts that violate our terms.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
        <p className="mt-3">
          Step2Career is not responsible for employment outcomes or hiring decisions.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Changes to Terms</h2>
        <p className="mt-3">
          We may update these terms at any time.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-3">
          <a href="mailto:support@step2career.com" className="text-indigo-600 hover:underline">
            support@step2career.com
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default Terms;
