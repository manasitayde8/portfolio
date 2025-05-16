import React from "react";

const TermsOfService = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Terms of Service</h1>

        <p className="mb-6">
          Please read these Terms of Service carefully before using this website. By accessing or using the site, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. Use of Content</h2>
        <p className="mb-4">
          All content on this website is for personal, non-commercial use only. You may not reproduce, distribute, or modify any content without permission.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. Intellectual Property</h2>
        <p className="mb-4">
          All code, graphics, and content are the intellectual property of the site owner unless otherwise stated.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. Disclaimer</h2>
        <p className="mb-4">
          The information provided on this site is for general informational purposes only. The owner is not liable for any errors or omissions.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. External Links</h2>
        <p className="mb-4">
          This website may contain links to third-party websites. The owner is not responsible for the content or practices of those sites.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Changes to Terms</h2>
        <p className="mb-4">
          The site owner reserves the right to modify these terms at any time. Continued use of the site after changes means you accept the new terms.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
