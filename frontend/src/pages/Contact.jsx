import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact us</h1>
          <p className="mt-4 text-xl text-gray-600">
            Have questions about Step2Career or need help? We&apos;re here for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">
              Whether you need help with your account, have feedback, or want to know more about our tools — send us a message. We typically respond within 24–48 hours.
            </p>
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a href="mailto:support@step2career.com" className="mt-1 block text-indigo-600 hover:underline">
                support@step2career.com
              </a>
              <p className="mt-6 text-sm font-medium text-gray-500">Response time</p>
              <p className="mt-1 text-gray-700">Within 24–48 hours on business days</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Send a message</h2>
            {submitted ? (
              <p className="mt-6 rounded-lg bg-green-50 p-4 text-green-800">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    id="contact-name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    id="contact-email"
                    name="email"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    id="contact-message"
                    name="message"
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    rows={4}
                    value={formData.message}
                  />
                </div>
                <button
                  className="w-full rounded-lg bg-amber-500 py-3 font-medium text-white hover:bg-amber-600"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
