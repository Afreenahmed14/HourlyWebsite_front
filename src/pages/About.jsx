import { useState } from "react";

export default function Home({ navigate }) {
  const [activeTab, setActiveTab] = useState("Frontend");

  const techData = {
    Frontend: [
      { name: "React.js", color: "#61dafb" },
      { name: "Angular", color: "#dd1b16" },
      { name: "Vue.js", color: "#42b883" },
      { name: "HTML/CSS", color: "#e34c26" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Next.js", color: "#000000" },
    ],
    Backend: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776ab" },
      { name: "Java", color: "#f89820" },
      { name: "PHP", color: "#777bb4" },
      { name: ".NET", color: "#512bd4" },
      { name: "Django", color: "#0c4b33" },
      { name: "FastAPI", color: "#009688" },
      { name: "Express.js", color: "#259dff" },
    ],
    "Cloud & DevOps": [
      { name: "AWS", color: "#ff9900" },
      { name: "Azure", color: "#0078d4" },
      { name: "GCP", color: "#4285f4" },
      { name: "Docker", color: "#2496ed" },
      { name: "Kubernetes", color: "#326ce5" },
      { name: "CI/CD", color: "#22c55e" },
      { name: "Terraform", color: "#7b42bc" },
      { name: "GitHub Actions", color: "#2088ff" },
    ],
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge-tag badge-tag-dark">
            <span className="badge-dot"></span>
            Hire Developers On Hourly Basis
          </div>
          <h1>
            Hire Skilled<br />
            Developers on<br />
            <span className="accent">Hourly Basis</span>
          </h1>
          <p className="hero-sub">
            Scale your projects faster with experienced developers available on flexible hourly engagement models. No long-term contracts, no risk.
          </p>
          <div className="hero-checks">
            {["Flexible Hiring", "No Long-Term Contracts", "Quick Onboarding", "Pay Only for Productive Hours"].map(c => (
              <div className="hero-check" key={c}>
                <div className="check-icon">
                  <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                </div>
                {c}
              </div>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("hire")}>Hire Developers</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Book Free Consultation</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-float hero-float-1">
            <div className="float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className="float-txt">
              <strong>500+ Developers</strong>
              <span>Ready to hire</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-avatar">HR</div>
            <div className="card-title">Developer Dashboard</div>
            <div className="card-sub">Active projects overview</div>
            <div className="card-stats">
              <div className="cs"><strong>98%</strong><span>Success Rate</span></div>
              <div className="cs"><strong>4.9★</strong><span>Avg Rating</span></div>
              <div className="cs"><strong>24h</strong><span>Onboarding</span></div>
            </div>
            <div className="card-bar-wrap">
              <div className="card-bar"><div className="card-bar-fill" style={{ width: "85%" }} /></div>
              <div className="card-bar-label"><span>Project Progress</span><span>85%</span></div>
            </div>
            <div className="card-bar-wrap" style={{ marginTop: 10 }}>
              <div className="card-bar"><div className="card-bar-fill" style={{ width: "92%", background: "linear-gradient(90deg,#22c55e,#4ade80)" }} /></div>
              <div className="card-bar-label"><span>Client Satisfaction</span><span>92%</span></div>
            </div>
          </div>

          <div className="hero-float hero-float-2">
            <div className="float-icon dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <div className="float-txt light">
              <strong>200+ Projects</strong>
              <span>Delivered on time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <div className="trust">
        <div className="trust-inner">
          <span className="trust-label">Trusted by Startups, Agencies & Businesses Worldwide</span>
          <div className="trust-logos">
            {["Google", "Microsoft", "airbnb", "Uber", "PayPal", "shopify"].map(b => (
              <span key={b} className="trust-logo">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHAT WE OFFER ── */}
      <section className="offer">
        <div className="sec-head">
          <span className="sec-label">What We Offer</span>
          <h2 className="sec-title">Hire Developers On Demand</h2>
          <p className="sec-sub">Choose from a wide range of skilled developers and tech specialists.</p>
        </div>
        <div className="offer-grid">
          {[
            { icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: "Frontend\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "Backend\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, title: "Full Stack\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, title: "Mobile App\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M16.24 7.76a6 6 0 0 1 0 8.49"/></svg>, title: "UI/UX\nDesigners" },
            { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "DevOps\nEngineers" },
            { icon: <svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>, title: "QA / Test\nEngineers" },
            { icon: <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 6v6l4 2"/></svg>, title: "AI & Automation\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>, title: "Python\nDevelopers" },
            { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, title: "Node.js\nDevelopers" },
          ].map(({ icon, title }, i) => (
            <div key={i} className="offer-item" onClick={() => navigate("hire")} style={{ cursor: "pointer" }}>
              <div className="offer-icon">{icon}</div>
              <h3>{title.split("\n").map((t, j) => <span key={j}>{t}{j === 0 && <br />}</span>)}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="engage">
        <div className="sec-head">
          <span className="sec-label">Engagement Models</span>
          <h2 className="sec-title">Flexible Hiring Models for Every Need</h2>
          <p className="sec-sub">Choose the engagement model that best fits your project requirements and budget.</p>
        </div>
        <div className="engage-grid">
          <div className="eng-card">
            <div className="eng-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Hourly Hiring</h3>
            <p>Hire developers based on the exact number of hours you need. Perfect for short-term projects.</p>
            <div className="eng-perks">
              {["Startup MVPs", "Bug Fixes", "Feature Development", "Ongoing Support", "Technical Consultation"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
          <div className="eng-card featured">
            <span className="eng-badge">Popular</span>
            <div className="eng-icon inv">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Dedicated Developers</h3>
            <p>Get full-time dedicated resources working exclusively on your project with full transparency.</p>
            <div className="eng-perks">
              {["Faster delivery", "Better collaboration", "Flexible scaling", "Transparent communication"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
          <div className="eng-card">
            <div className="eng-icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Project-Based Teams</h3>
            <p>Build complete teams for web, mobile, SaaS, or enterprise applications end-to-end.</p>
            <div className="eng-perks">
              {["Developers", "UI/UX Designers", "QA Engineers", "Project Coordinators"].map(p => (
                <div key={p} className="eng-perk">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="tech">
        <div className="sec-head">
          <span className="sec-label">Technologies We Work With</span>
          <h2 className="sec-title">Modern Technologies. Expert Developers.</h2>
        </div>
        <div className="tech-tabs">
          {Object.keys(techData).map(tab => (
            <button key={tab} className={`tech-tab ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className="tech-logos">
          {techData[activeTab].map(({ name, color }) => (
            <div key={name} className="tech-pill">
              <span className="tech-dot" style={{ background: color }} />
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="industries">
        <div className="sec-head">
          <span className="sec-label">Industries We Support</span>
          <h2 className="sec-title">Trusted By Many Industries</h2>
          <p className="sec-sub">Our developers bring domain expertise across a wide range of verticals.</p>
        </div>
        <div className="ind-grid">
          {[
            { icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: "SaaS & Software", sub: "Scalable platforms & cloud solutions" },
            { icon: <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, title: "E-Commerce", sub: "Online stores & payment solutions" },
            { icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "FinTech", sub: "Banking, payments & blockchain" },
            { icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: "Healthcare", sub: "EMR, telemedicine & health apps" },
            { icon: <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, title: "Logistics", sub: "Supply chain & tracking systems" },
            { icon: <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, title: "EdTech", sub: "LMS, e-learning & assessments" },
            { icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "Hospitality", sub: "Booking, PMS & guest apps" },
            { icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, title: "Enterprise", sub: "ERP, CRM & workflow automation" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="ind-card">
              <div className="ind-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STARTUP ── */}
      <section className="startup">
        <div className="startup-inner">
          <div>
            <span className="startup-tag">For Startups</span>
            <h2>Build Your MVP Faster</h2>
            <p>We help startups go from idea to product with the right tech talent. Agile, affordable, and reliable.</p>
            <div className="startup-checks">
              {["Build MVPs", "Develop SaaS products", "Create mobile apps", "Maintain existing products", "Add new features faster"].map(c => (
                <div key={c} className="startup-check">{c}</div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => navigate("hire")}>Hire Developers</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="rocket-card">
              <span className="rocket-icon">🚀</span>
              <h4>Launch Ready</h4>
              <p>From concept to deployment in weeks, not months.</p>
              <div className="rocket-stats">
                <div className="rs"><strong>3x</strong><span>Faster Launch</span></div>
                <div className="rs"><strong>60%</strong><span>Cost Savings</span></div>
                <div className="rs"><strong>50+</strong><span>MVPs Built</span></div>
                <div className="rs"><strong>100%</strong><span>On-Time Rate</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how">
        <div className="sec-head">
          <span className="sec-label">How It Works</span>
          <h2 className="sec-title">Simple Process. Powerful Results.</h2>
          <p className="sec-sub">Get started with your development team in just four easy steps.</p>
        </div>
        <div className="steps-grid">
          {[
            { n: "1", title: "Share Your Requirement", desc: "Tell us your project needs, tech stack, and hiring preferences." },
            { n: "2", title: "Select Developers", desc: "Choose from pre-screened developers that match your requirements." },
            { n: "3", title: "Start Development", desc: "Begin work immediately with flexible engagement and full transparency." },
            { n: "4", title: "Scale Anytime", desc: "Increase or reduce your team size based on your project demands." },
          ].map(s => (
            <div key={s.n} className="step">
              <div className="step-num"><span>{s.n}</span></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="sec-label sec-label-light">Why Choose HourlyRecruit</span>
          <h2 className="sec-title sec-title-light">Build Faster. Smarter. Better.</h2>
          <div className="why-grid">
            {[
              { icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: "Flexible Hiring", desc: "Hire only when you need and optimize costs. No commitments." },
              { icon: <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: "Faster Execution", desc: "Quick onboarding with ready-to-work experts from day one." },
              { icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: "Scalable Teams", desc: "Scale up or down based on your project needs instantly." },
              { icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "Startup Friendly", desc: "Affordable solutions designed for early-stage startups." },
              { icon: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: "Transparent Comms", desc: "Regular updates and clear communication throughout." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="sec-head">
          <span className="sec-label">Testimonials</span>
          <h2 className="sec-title">What Our Clients Say</h2>
          <p className="sec-sub">Trusted by businesses worldwide.</p>
        </div>
        <div className="testi-grid">
          {[
            { initials: "AT", name: "Alex Thompson", role: "CTO, InnovateX", color: "linear-gradient(135deg,#1a56db,#3b82f6)", quote: "HourlyRecruit helped us quickly onboard frontend and backend developers for our SaaS product. The process was smooth, flexible and highly professional." },
            { initials: "PS", name: "Priya Sharma", role: "Founder, HealthTrack", color: "linear-gradient(135deg,#ec4899,#f43f5e)", quote: "We were able to launch our MVP faster using their hourly developer model. Great communication and high-quality work delivered on time every single sprint." },
            { initials: "RM", name: "Rahul Mehta", role: "Founder, SaaSFlow", color: "linear-gradient(135deg,#06b6d4,#0891b2)", quote: "HourlyRecruit helped us hire experienced developers within days. Their flexible engagement model allowed us to scale quickly without long-term hiring commitments." },
            { initials: "SC", name: "Sarah Chen", role: "VP Engineering, FinEdge", color: "linear-gradient(135deg,#8b5cf6,#7c3aed)", quote: "The dedicated developer model worked brilliantly for us. They integrated seamlessly with our team, attended standups, and delivered exceptional code quality." },
          ].map(({ initials, name, role, color, quote }) => (
            <div key={name} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: color }}>{initials}</div>
                <div>
                  <h4>{name}</h4>
                  <span>{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="sec-label" style={{ color: "#38bdf8" }}>Get Started Today</span>
            <h2>Let's Build Something<br />Great Together</h2>
            <p>Hire skilled developers on hourly basis and bring your ideas to life. No long-term contracts, no risk.</p>
          </div>
          <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
            <button className="btn-white" onClick={() => navigate("hire")}>Hire Developers Today</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Book Free Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
}