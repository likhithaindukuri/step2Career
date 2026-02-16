const Refund = () => (
  <div className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900">Refund Policy – Step2Career</h1>
    <p className="mt-2 text-sm text-gray-500">Last updated: January 2026</p>

    <div className="mt-8 space-y-6 text-gray-700">
      <p>
        At Step2Career, we strive to provide high-quality services.
      </p>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Subscription Refunds</h2>
        <p className="mt-3">
          Due to the nature of digital services, all purchases are generally non-refundable.
        </p>
        <p className="mt-3">
          However, refunds may be considered if:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>The service was not delivered due to technical issues</li>
          <li>Payment was deducted but service was not activated</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Refund Request Period</h2>
        <p className="mt-3">
          Users must request refunds within 7 days of purchase.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Refund Processing Time</h2>
        <p className="mt-3">
          If approved, refunds will be processed within 5–7 business days to the original payment method.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Contact for Refunds</h2>
        <p className="mt-3">
          Email: <a href="mailto:support@step2career.com" className="text-indigo-600 hover:underline">support@step2career.com</a>
        </p>
        <p className="mt-3">Include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Registered email</li>
          <li>Payment details</li>
          <li>Reason for refund request</li>
        </ul>
        <p className="mt-3">
          We review requests fairly and transparently.
        </p>
      </section>
    </div>
  </div>
);

export default Refund;
