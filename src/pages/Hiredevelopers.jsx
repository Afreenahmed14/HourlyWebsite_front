import { useState } from "react";

const developers = [
  { initials: "AK", name: "Arjun Kumar", role: "Senior React Developer", exp: "6 yrs", rate: "$35/hr", rating: "4.9", projects: 42, color: "linear-gradient(135deg,#1a56db,#3b82f6)", skills: ["React.js", "TypeScript", "Next.js", "Node.js"], category: "Frontend" },
  { initials: "PS", name: "Priya Singh", role: "Full Stack Developer", exp: "5 yrs", rate: "$38/hr", rating: "5.0", projects: 31, color: "linear-gradient(135deg,#ec4899,#f43f5e)", skills: ["React.js", "Node.js", "MongoDB", "AWS"], category: "Full Stack" },
  { initials: "RV", name: "Rahul Verma", role: "Backend Engineer", exp: "7 yrs", rate: "$40/hr", rating: "4.8", projects: 58, color: "linear-gradient(135deg,#06b6d4,#0891b2)", skills: ["Python", "Django", "PostgreSQL", "Redis"], category: "Backend" },
  { initials: "SM", name: "Sneha Mehta", role: "Flutter Developer", exp: "4 yrs", rate: "$32/hr", rating: "4.9", projects: 27, color: "linear-gradient(135deg,#8b5cf6,#7c3aed)", skills: ["Flutter", "Dart", "Firebase", "iOS/Android"], category: "Mobile" },
  { initials: "KP", name: "Kiran Patel", role: "DevOps Engineer", exp: "6 yrs", rate: "$42/hr", rating: "4.8", projects: 45, color: "linear-gradient(135deg,#f59e0b,#d97706)", skills: ["AWS", "Docker", "Kubernetes", "Terraform"], category: "DevOps" },
  { initials: "DG", name: "Divya Gupta", role: "UI/UX Designer", exp: "5 yrs", rate: "$30/hr", rating: "5.0", projects: 38, color: "linear-gradient(135deg,#22c55e,#16a34a)", skills: ["Figma", "Adobe XD", "Framer", "Prototyping"], category: "Design" },
  { initials: "AS", name: "Amit Sharma", role: "Node.js Developer", exp: "5 yrs", rate: "$36/hr", rating: "4.7", projects: 33, color: "linear-gradient(135deg,#0ea5e9,#0284c7)", skills: ["Node.js", "Express", "GraphQL", "MongoDB"], category: "Backend" },
  { initials: "NR", name: "Neha Rao", role: "React Native Developer", exp: "4 yrs", rate: "$33/hr", rating: "4.9", projects: 22, color: "linear-gradient(135deg,#f43f5e,#e11d48)", skills: ["React Native", "Redux", "Firebase", "REST APIs"], category: "Mobile" },
  { initials: "VK", name: "Vikram Krishnan", role: "Java Backend Developer", exp: "8 yrs", rate: "$44/hr", rating: "4.8", projects: 67, color: "linear-gradient(135deg,#d97706,#b45309)", skills: ["Java", "Spring Boot", "Microservices", "AWS"], category: "Backend" },
];

const filters = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "DevOps", "Design"];

export default function HireDevelopers({ navigate }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? developers : developers.filter(d => d.category === activeFilter);

  return (
    <>
      <section className="hire-hero">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="badge-tag badge-tag-dark" style={{ margin: "0 auto 18px" }}>
            <span className="badge-dot"></span>
            Pre-vetted & Ready to Start
          </div>
          <h1>Hire World-Class Developers</h1>
          <p>Browse our network of 500+ pre-screened developers and hire the perfect match for your project in hours, not weeks.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-white" onClick={() => navigate("contact")}>Book Free Consultation</button>
            <button className="btn-outline-white" onClick={() => navigate("how")}>How It Works</button>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="hire-filter">
        <div className="hire-filter-inner">
          <span className="filter-label">Filter by:</span>
          {filters.map(f => (
            <button key={f} className={`filter-chip ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Developer Cards */}
      <section className="hire-grid">
        <div className="sec-head" style={{ marginBottom: 36 }}>
          <span className="sec-label">Available Developers</span>
          <h2 className="sec-title">Choose Your Perfect Match</h2>
          <p className="sec-sub">{filtered.length} developers available · Hire in 48 hours or less</p>
        </div>
        <div className="dev-cards">
          {filtered.map((dev) => (
            <div key={dev.name} className="dev-card">
              <div className="dev-header">
                <div className="dev-avatar" style={{ background: dev.color }}>{dev.initials}</div>
                <div>
                  <div className="dev-name">{dev.name}</div>
                  <div className="dev-role">{dev.role}</div>
                </div>
                <div className="dev-avail">
                  <div className="dev-avail-dot" />
                  Available
                </div>
              </div>
              <div className="dev-skills">
                {dev.skills.map(s => <span key={s} className="dev-skill">{s}</span>)}
              </div>
              <div className="dev-stats">
                <div className="ds"><strong>{dev.exp}</strong><span>Experience</span></div>
                <div className="ds"><strong>{dev.rating}★</strong><span>Rating</span></div>
                <div className="ds"><strong>{dev.projects}</strong><span>Projects</span></div>
              </div>
              <p className="dev-rate">Starting at <strong>{dev.rate}</strong></p>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "10px 16px" }} onClick={() => navigate("contact")}>
                  Hire Now
                </button>
                <button className="btn-secondary" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "10px 16px" }} onClick={() => navigate("contact")}>
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="sec-head">
          <span className="sec-label">Pricing</span>
          <h2 className="sec-title">Transparent Pricing. No Surprises.</h2>
          <p className="sec-sub">Choose the plan that fits your needs. Scale or cancel anytime.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-name">Hourly</div>
            <div className="price-amt">$25<span style={{ fontSize: 18 }}>/hr</span></div>
            <div className="price-period">Pay as you go · No minimum commitment</div>
            <div className="price-features">
              {["Access to vetted developers", "Pay for actual hours logged", "Weekly billing & timesheets", "Start & pause anytime", "Basic account support"].map(f => (
                <div key={f} className="price-feat">{f}</div>
              ))}
            </div>
            <button className="btn-secondary" style={{ width: "100%", justifyContent: "center" }} onClick={() => navigate("contact")}>Get Started</button>
          </div>
          <div className="price-card popular" style={{ marginTop: 12 }}>
            <div className="popular-badge">Most Popular</div>
            <div className="price-name">Dedicated</div>
            <div className="price-amt">$2,800<span style={{ fontSize: 18 }}>/mo</span></div>
            <div className="price-period">Full-time dedicated developer · Timezone aligned</div>
            <div className="price-features">
              {["Everything in Hourly", "Exclusive to your project", "Full timezone alignment", "Daily standups & reporting", "Dedicated account manager", "7-day replacement guarantee"].map(f => (
                <div key={f} className="price-feat">{f}</div>
              ))}
            </div>
            <button className="btn-white" style={{ width: "100%", justifyContent: "center" }} onClick={() => navigate("contact")}>Hire Now</button>
          </div>
          <div className="price-card">
            <div className="price-name">Team</div>
            <div className="price-amt" style={{ fontSize: 28 }}>Custom</div>
            <div className="price-period">Full project team · Milestone-based billing</div>
            <div className="price-features">
              {["Everything in Dedicated", "2–12 member teams", "Project manager included", "Milestone-based billing", "Fixed scope delivery", "Priority support 24/7"].map(f => (
                <div key={f} className="price-feat">{f}</div>
              ))}
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => navigate("contact")}>Request a Quote</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="sec-label" style={{ color: "#38bdf8" }}>Start Today</span>
            <h2>Your Next Developer is<br />48 Hours Away</h2>
            <p>Tell us what you need. We'll match you with the perfect developer and have them ready to start within 48 hours.</p>
          </div>
          <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
            <button className="btn-white" onClick={() => navigate("contact")}>Start Hiring</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Book Free Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
}