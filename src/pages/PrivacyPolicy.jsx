import React, { useEffect } from "react";

export default function PrivacyPolicy() {


  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0b0710] text-white">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#230f39] via-[#1a0d24] to-black"></div>

      {/* SUBTLE DOT TEXTURE */}
      <div className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle_at_40%_40%,white_1px,transparent_1px)] bg-[size:22px_22px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* GLASS CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-10 space-y-10 shadow-2xl mt-10">
          
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Privacy <span className="text-[#bfa2ff]">Policy</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              How <strong>Ctrl Zs</strong> handles your personal data.
            </p>
          </div>

          <Section title="1. Introduction">
            <strong>Ctrl Zs</strong> respects your privacy and is committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information.
          </Section>

          <Section title="2. Information We Collect">
            We may collect the following information when you interact with our
            website or services:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Website or business details</li>
              <li>Information submitted via forms</li>
              <li>Usage data (cookies, analytics, IP address)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            We use your data to:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Respond to inquiries and requests</li>
              <li>Deliver services and requested resources</li>
              <li>Share updates or marketing communications (optional)</li>
              <li>Improve website performance and user experience</li>
            </ul>
            <p className="mt-4 text-white/80">
              We do not collect unnecessary or excessive personal data.
            </p>
          </Section>

          <Section title="4. Cookies & Analytics">
            <p className="text-white/80">
              Our website uses cookies and analytics tools to understand user
              behavior and improve performance. You may disable cookies via your
              browser settings.
            </p>
          </Section>

          <Section title="5. Data Sharing">
            <p className="text-white/80 mb-4">
              We do not sell or rent your personal information.
            </p>
            <p className="text-white/80">Your data may be shared only with:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-white/80">
              <li>Trusted service providers (e.g., email or analytics tools)</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="mt-4 text-white/80">
              All third parties are required to maintain confidentiality.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p className="text-white/80">
              We implement appropriate technical and organizational security
              measures to protect your information from unauthorized access,
              loss, or misuse.
            </p>
          </Section>

          <Section title="7. Your Rights">
            You have the right to:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communications</li>
            </ul>
            <p className="mt-4 text-white/80">
              You can exercise these rights by contacting us.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p className="text-white/80">
              Our website may contain links to third-party websites. Ctrl Zs is
              not responsible for their privacy practices or content.
            </p>
          </Section>

          <Section title="9. Updates to Privacy Policy">
            <p className="text-white/80">
              This Privacy Policy may be updated periodically. Any changes will
              be posted on this page with a revised effective date.
            </p>
          </Section>

          <Section title="10. Contact Information">
            <p className="text-white/80">
              For privacy-related questions or requests, contact us at:
            </p>
            <p className="mt-3 font-semibold text-[#bfa2ff]">
              socials@ctrlzs.com
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

/* Reusable Section */
function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#bfa2ff]">
        {title}
      </h2>
      <div className="text-sm sm:text-base leading-relaxed text-white/85">
        {children}
      </div>
    </div>
  );
}
