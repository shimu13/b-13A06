export default function Steps() {
  const steps = [
    {
      icon: "📝",
      title: "Create Account",
      desc: "Sign up in seconds and get started instantly",
    },
    {
      icon: "🛒",
      title: "Choose Tools",
      desc: "Browse and select the tools you need",
    },
    {
      icon: "🚀",
      title: "Start Creating",
      desc: "Boost your workflow with powerful tools",
    },
  ];

  return (
    <section className="steps-section">

      {/* TITLE */}
      <h2 className="steps-title">How It Works</h2>

      {/* CARDS */}
      <div className="steps-container">
        {steps.map((step, i) => (
          <div key={i} className="step-card">

            <div className="step-icon">{step.icon}</div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}