import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0b0710] text-white">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#230f39] via-[#1a0d24] to-black"></div>

      {/* SUBTLE DOT TEXTURE */}
      <div className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle_at_40%_40%,white_2px,transparent_1px)] bg-[size:22px_22px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        {/* HEADER */}
        
        {/* GLASS CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-10 space-y-10 shadow-2xl mt-10">
          {/* SECTION */}

          <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Terms & <span className="text-[#bfa2ff]">Conditions</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>


          <Section title="1. Introduction">
            Welcome to <strong>Ctrl Zs</strong>. By accessing our website or using
            our services, you agree to comply with and be bound by these Terms &
            Conditions. If you do not agree, please do not use our website or
            services.
          </Section>

          <Section title="2. About Ctrl Zs">
            Ctrl Zs is a digital marketing and creative agency offering services
            including but not limited to:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Digital marketing & AI-powered marketing</li>
              <li>Branding & graphic design</li>
              <li>UI/UX design</li>
              <li>Website development</li>
              <li>Video editing & content creation</li>
            </ul>
            <p className="mt-4 text-white/80">
              All services are provided based on mutually agreed scopes,
              timelines, and deliverables.
            </p>
          </Section>

          <Section title="3. Use of Website">
            You agree to use this website only for lawful purposes. You must not:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Copy, reproduce, or redistribute website content without permission</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Engage in activities that harm, disrupt, or misuse the website</li>
            </ul>
            <p className="mt-4 text-white/80">
              Ctrl Zs reserves the right to restrict access if misuse is detected.
            </p>
          </Section>

          <Section title="4. Services & Project Engagement">
            All services are customized and executed based on:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Approved project scope</li>
              <li>Timelines agreed upon in writing</li>
              <li>Client inputs, feedback, and approvals</li>
            </ul>
            <p className="mt-4 text-white/80">
              Delays caused by missing inputs or delayed approvals may impact
              delivery timelines.
            </p>
          </Section>

          <Section title="5. Payments & Refund Policy">
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Payments must be made as per agreed terms before or during project execution</li>
              <li>All fees are non-refundable unless explicitly stated in writing</li>
              <li>Prices are subject to change and do not affect ongoing projects</li>
              <li>Failure to complete payment may result in project suspension</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>
                All designs, content, strategies, and assets remain the property
                of Ctrl Zs until full payment is received
              </li>
              <li>
                Upon final payment, ownership is transferred to the client unless
                otherwise agreed
              </li>
              <li>
                Ctrl Zs retains the right to showcase work in portfolios, case
                studies, and marketing materials unless restricted by NDA
              </li>
            </ul>
          </Section>

          <Section title="7. Confidentiality">
            Both parties agree to keep confidential any non-public, sensitive, or
            proprietary information shared during the engagement.
          </Section>

          <Section title="8. Limitation of Liability">
            Ctrl Zs shall not be liable for:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Indirect or consequential damages</li>
              <li>Loss of revenue, profits, or data</li>
              <li>Platform algorithm changes or third-party service failures</li>
            </ul>
            <p className="mt-4 text-white/80">
              We do not guarantee specific performance metrics (reach, sales,
              rankings), as results depend on multiple external factors.
            </p>
          </Section>

          <Section title="9. Termination">
            Ctrl Zs reserves the right to terminate or suspend services if:
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
              <li>Terms are violated</li>
              <li>Payments are delayed</li>
              <li>Misuse or unethical conduct is observed</li>
            </ul>
            <p className="mt-4 text-white/80">
              Clients may also terminate services with written notice, subject to
              agreed terms.
            </p>
          </Section>

          <Section title="10. Changes to Terms">
            Ctrl Zs may update these Terms & Conditions at any time. Continued use
            of the website or services constitutes acceptance of updated terms.
          </Section>

          <Section title="11. Contact Information">
            For questions regarding these Terms & Conditions, contact:
            <p className="mt-3 font-semibold text-[#bfa2ff]">
              socials@ctrlzs.com
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

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
