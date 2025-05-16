import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Privacy Policy</h1>

        <p className="mb-6">
          This Privacy Policy outlines how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and any other data you submit through forms on our site.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to improve your experience, respond to inquiries, and send occasional updates or promotional content.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. Data Protection</h2>
        <p className="mb-4">
          We take appropriate security measures to protect your data from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. Third-Party Services</h2>
        <p className="mb-4">
          Our website may contain links to third-party sites. We are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy occasionally. Please check back regularly for updates.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
