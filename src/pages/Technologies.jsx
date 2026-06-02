export default function Technologies({ navigate }) {
  const stacks = [
    {
      name: "Frontend",
      icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      techs: [
        { name: "React.js", color: "#61dafb", desc: "Component-driven UIs with hooks and concurrent features" },
        { name: "Next.js", color: "#000000", desc: "Full-stack React framework with SSR and static generation" },
        { name: "Vue.js", color: "#42b883", desc: "Progressive framework for building user interfaces" },
        { name: "Angular", color: "#dd1b16", desc: "Enterprise-grade TypeScript framework by Google" },
        { name: "TypeScript", color: "#3178c6", desc: "Typed superset of JavaScript for safer, scalable code" },
        { name: "Tailwind CSS", color: "#06b6d4", desc: "Utility-first CSS framework for rapid UI development" },
        { name: "JavaScript", color: "#f7df1e", desc: "The web's core scripting language, ES2024+" },
        { name: "Svelte", color: "#ff3e00", desc: "Compiler-based UI framework with zero virtual DOM" },
      ],
    },
    {
      name: "Backend",
      icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>,
      techs: [
        { name: "Node.js", color: "#339933", desc: "Event-driven JavaScript runtime for scalable servers" },
        { name: "Python", color: "#3776ab", desc: "Versatile language for APIs, ML, and data engineering" },
        { name: "Java", color: "#f89820", desc: "Enterprise-grade JVM language with Spring ecosystem" },
        { name: "Django", color: "#0c4b33", desc: "Batteries-included Python web framework" },
        { name: "FastAPI", color: "#009688", desc: "High-performance async Python API framework" },
        { name: "Express.js", color: "#259dff", desc: "Minimal and flexible Node.js web application framework" },
        { name: "PHP", color: "#777bb4", desc: "Server-side scripting for web development" },
        { name: ".NET", color: "#512bd4", desc: "Microsoft's cross-platform framework for enterprise apps" },
      ],
    },
    {
      name: "Mobile",
      icon: <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
      techs: [
        { name: "Flutter", color: "#54c5f8", desc: "Google's cross-platform UI toolkit using Dart" },
        { name: "React Native", color: "#61dafb", desc: "Build native apps using React components" },
        { name: "Swift", color: "#f05138", desc: "Apple's modern language for iOS and macOS apps" },
        { name: "Kotlin", color: "#7f52ff", desc: "Modern JVM language for Android development" },
        { name: "Android", color: "#3ddc84", desc: "Native Android SDK and Jetpack Compose" },
        { name: "iOS", color: "#000000", desc: "Native iOS development with SwiftUI" },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: <svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
      techs: [
        { name: "AWS", color: "#ff9900", desc: "Amazon Web Services — EC2, Lambda, RDS, S3, and more" },
        { name: "Google Cloud", color: "#4285f4", desc: "GCP — Cloud Run, BigQuery, Firestore, Vertex AI" },
        { name: "Azure", color: "#0078d4", desc: "Microsoft Azure cloud services and DevOps pipelines" },
        { name: "Docker", color: "#2496ed", desc: "Containerization platform for consistent deployments" },
        { name: "Kubernetes", color: "#326ce5", desc: "Container orchestration at scale" },
        { name: "Terraform", color: "#7b42bc", desc: "Infrastructure as Code for reproducible environments" },
        { name: "GitHub Actions", color: "#2088ff", desc: "Automated CI/CD workflows in GitHub" },
        { name: "Jenkins", color: "#d33833", desc: "Open-source automation server for CI/CD" },
      ],
    },
    {
      name: "Databases",
      icon: <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
      techs: [
        { name: "PostgreSQL", color: "#336791", desc: "Advanced open-source relational database" },
        { name: "MongoDB", color: "#47a248", desc: "Flexible NoSQL document database" },
        { name: "MySQL", color: "#4479a1", desc: "World's most popular open-source relational DB" },
        { name: "Redis", color: "#dc382d", desc: "In-memory data store for caching and pub/sub" },
        { name: "Firebase", color: "#ffca28", desc: "Google's real-time database and backend platform" },
        { name: "Supabase", color: "#3ecf8e", desc: "Open-source Firebase alternative with PostgreSQL" },
      ],
    },
  ];

  return (
    <>
      <section className="tech-hero">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="sec-label sec-label-light">Technologies</span>
          <h1>Modern Technologies.<br />Expert Developers.</h1>
          <p>Our developers bring deep expertise across the full technology spectrum — from modern frontend frameworks to cloud infrastructure and AI.</p>
        </div>
      </section>

      <section className="tech-page">
        {stacks.map(({ name, icon, techs }) => (
          <div key={name} className="tech-section">
            <div className="tech-section-header">
              <div className="tech-section-icon">{icon}</div>
              <h3>{name}</h3>
            </div>
            <div className="tech-cards">
              {techs.map(({ name: tname, color, desc }) => (
                <div key={tname} className="tech-card">
                  <div className="tech-card-dot" style={{ background: color }} />
                  <h4>{tname}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="sec-label" style={{ color: "#38bdf8" }}>Need a Specialist?</span>
            <h2>Find the Right Tech Expert<br />for Your Stack</h2>
            <p>Whatever technology you're building with, we have vetted developers who specialize in it.</p>
          </div>
          <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
            <button className="btn-white" onClick={() => navigate("hire")}>Browse Developers</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Talk to Us</button>
          </div>
        </div>
      </section>
    </>
  );
}