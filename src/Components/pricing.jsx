export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for beginners",
      features: ["1 Project", "Basic Tools", "Community Support"],
      highlight: false,
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$29",
      desc: "Best for professionals",
      features: ["Unlimited Projects", "All Tools", "Priority Support"],
      highlight: true,
      button: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "For large teams",
      features: ["All Features", "Team Access", "Dedicated Support"],
      highlight: false,
      button: "Contact Sales",
    },
  ];

  return (
    <section className="pricing-section">

      {/* TITLE */}
      <h2 className="pricing-title">Simple, Transparent Pricing</h2>

      {/* CARDS */}
      <div className="pricing-container">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pricing-card ${plan.highlight ? "active" : ""}`}
          >

            {plan.highlight && <span className="badge">Popular</span>}

            <h3>{plan.name}</h3>

            <p className="price">{plan.price}</p>

            <p className="desc">{plan.desc}</p>

            <ul>
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>

            <button className="pricing-btn">
              {plan.button}
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}