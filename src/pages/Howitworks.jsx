import { useState } from "react";

export default function HowItWorks({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      n: "01",
      title: "Share Your Requirements",
      desc: "Tell us your technology stack, project scope, team size, timeline, and desired skill set. Takes 10 minutes via our simple intake form or a quick call with our team.",
      tips: ["Project scope & timeline", "Tech stack preferences", "Team size needed", "Budget range"],
    },
    {
      n: "02",
      title: "Review Matched Profiles",
      desc: "We surface 3–5 pre-screened candidates tailored to your exact requirements within 48 hours. Every developer has passed multi-stage technical assessments and communication screenings.",
      tips: ["Detailed developer profiles", "Technical assessment scores", "Portfolio & references", "Availability windows"],
    },
    {
      n: "03",
      title: "Interview & Select",
      desc: "Conduct technical interviews at your convenience. Ask anything — code problems, system design, past work. We're available to help facilitate if needed. Hire one or all — your choice.",
      tips: ["Live coding sessions", "System design discussions", "Culture fit evaluation", "Reference checks"],
    },
    {
      n: "04",
      title: "Onboard & Build",
      desc: "Begin development immediately. We handle all contracts, payments, and administration. Your developer integrates into your tools, attends standups, and starts contributing from day one.",
      tips: ["Same-day tool access", "Slack/Teams integration", "Contract handling", "First sprint planning"],
    },
    {
      n: "05",
      title: "Scale or Wind Down",
      desc: "Add team members as your project grows, or reduce with just 7 days notice. No penalties, no lock-ins. Your dedicated account manager ensures smooth transitions at every stage.",
      tips: ["7-day notice period", "Easy team scaling", "No exit penalties", "Continuous support"],
    },
  ];

  const faqs = [
    { q: "How quickly can I hire a developer?", a: "In most cases, you can have a developer ready to start within 48 hours of sharing your requirements. Complex or very niche requirements may take up to 5 business days." },
    { q: "What if the developer doesn't meet my expectations?", a: "We offer a 7-day guarantee. If you're not satisfied in the first week, we'll find you a replacement at no additional cost — no questions asked." },
    { q: "Do I need to sign a long-term contract?", a: "No. Our Hourly model has zero minimum commitment. Our Dedicated model runs month-to-month with a 7-day cancellation notice. No lock-ins, ever." },
    { q: "How do you vet your developers?", a: "Every developer passes a multi-stage process: initial technical screen, live coding assessment, system design interview, communication evaluation, and reference checks. Less than 8% of applicants make it through." },
    { q: "What time zones do your developers work in?", a: "Our developers are spread across IST (India), EET (Eastern Europe), and LATAM time zones. We match you with developers who overlap at least 4 hours with your working day." },
    { q: "How does billing work?", a: "Hourly model: billed weekly based on timesheets. Dedicated model: fixed monthly billing. Project model: milestone-based payments. All invoices are NET-15." },
    { q: "Can developers join our existing team processes?", a: "Absolutely. Our developers are remote-work veterans who integrate into your Slack, Jira, GitHub, standups, and sprint cycles from day one." },
  ];

  return (
    <>
      <section className="how-hero">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="sec-label sec-label-light">Process</span>
          <h1>From Brief to Build<br />in 5 Simple Steps</h1>
          <p>A streamlined hiring process designed to get your project moving in days, not months. Transparent, efficient, and stress-free.</p>
        </div>
      </section>

      <section className="how-page">
        <div className="sec-head" style={{ marginBottom: 48 }}>
          <span className="sec-label">The Process</span>
          <h2 className="sec-title">How HourlyRecruit Works</h2>
          <p className="sec-sub">Everything is handled for you — from matching to contracts to payments. You focus on building.</p>
        </div>

        <div className="how-steps-full">
          {steps.map(({ n, title, desc, tips }) => (
            <div key={n} className="how-step-row">
              <div className="how-step-num-wrap">
                <div className="how-step-num">{n}</div>
              </div>
              <div className="how-step-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="how-step-tips">
                  {tips.map(t => <div key={t} className="how-tip">✓ {t}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models Quick View */}
      <section style={{ padding: "80px 5%", background: "var(--off)" }}>
        <div className="sec-head" style={{ marginBottom: 48 }}>
          <span className="sec-label">Engagement Models</span>
          <h2 className="sec-title">Choose How You Work With Us</h2>
        </div>
        <div className="engage-grid">
          <div className="eng-card">
            <div className="eng-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Hourly Hiring</h3>
            <p>Pay only for productive hours logged. Ideal for ongoing feature development, bug fixes, or ad-hoc technical support where scope is fluid.</p>
            <div className="eng-perks">
              {["Pay for actual hours logged", "Weekly billing & timesheets", "Start & pause anytime", "No minimum commitment"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
          <div className="eng-card featured">
            <span className="eng-badge">Popular</span>
            <div className="eng-icon inv">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Dedicated Developer</h3>
            <p>A full-time developer embedded into your team — attending standups, working your timezone, and owning deliverables just like an in-house hire.</p>
            <div className="eng-perks">
              {["Exclusive to your project", "Full timezone alignment", "Monthly fixed pricing", "7-day replacement guarantee"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
          <div className="eng-card">
            <div className="eng-icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Project-Based Team</h3>
            <p>Assemble a complete team scoped to deliver a defined product milestone from design to deployment.</p>
            <div className="eng-perks">
              {["Fixed scope & deliverables", "Dedicated project manager", "Milestone-based billing", "End-to-end ownership"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="sec-label">FAQ</span>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <p className="sec-sub">Everything you need to know about working with HourlyRecruit.</p>
        </div>
        <div className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-q ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {q}
                <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              {openFaq === i && <div className="faq-a">{a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="sec-label" style={{ color: "#38bdf8" }}>Ready?</span>
            <h2>Start Your Project<br />in 48 Hours</h2>
            <p>Share your requirements today. We'll have matched candidates in your inbox by tomorrow.</p>
          </div>
          <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
            <button className="btn-white" onClick={() => navigate("hire")}>Browse Developers</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Get Started Free</button>
          </div>
        </div>
      </section>
    </>
  );
}