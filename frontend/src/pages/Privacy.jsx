const Privacy = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900">Privacy Policy – Step2Career</h1>
    <p className="mt-2 text-sm text-gray-500">Last updated: January 2026</p>

    <div className="mt-8 space-y-6 text-gray-700">
      <p>
        Step2Career (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Step2Career website and services.
      </p>
      <p>
        This page informs users about our policies regarding the collection, use, and disclosure of personal information.
      </p>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Information We Collect</h2>
        <p className="mt-3">We may collect the following information:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Name and email address</li>
          <li>Login credentials</li>
          <li>Resume data uploaded by users</li>
          <li>Usage data such as tools accessed and interactions</li>
          <li>Payment information (processed securely via Razorpay, we do not store card details)</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">How We Use Information</h2>
        <p className="mt-3">We use your information to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Provide and improve our services</li>
          <li>Generate resume suggestions, ATS analysis, and interview questions</li>
          <li>Process payments securely</li>
          <li>Communicate important updates</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Data Protection</h2>
        <p className="mt-3">
          We implement reasonable security measures to protect your data. However, no online system is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Third-Party Services</h2>
        <p className="mt-3">
          We use trusted third-party services such as Razorpay for payment processing. These services have their own privacy policies.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">User Data Control</h2>
        <p className="mt-3">
          Users can request deletion of their data by contacting:
        </p>
        <p className="mt-2">
          <a href="mailto:support@step2career.com" className="text-indigo-600 hover:underline">
            support@step2career.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
        <p className="mt-3">
          We may update this policy from time to time. Updates will be posted on this page.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-3">If you have questions, contact:</p>
        <p className="mt-2">
          <a href="mailto:support@step2career.com" className="text-indigo-600 hover:underline">
            support@step2career.com
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default Privacy;
