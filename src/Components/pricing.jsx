export default function Pricing() {
  const plans = [
    { name: "Starter", price: 0, features: ["Basic Tools"] },
    { name: "Pro", price: 29, features: ["All Tools", "Priority Support"] },
    { name: "Enterprise", price: 99, features: ["All Features", "Dedicated Manager"] },
  ];
  return (
    <section className="pricing grid md:grid-cols-3 gap-5 my-10">
      {plans.map((p, i) => (
        <div key={i} className="border rounded-xl p-5 shadow-md text-center">
          <h3 className="font-bold text-xl mb-2">{p.name}</h3>
          <p className="text-2xl font-bold mb-3">${p.price}</p>
          <ul className="mb-3">
            {p.features.map((f, j) => <li key={j}>{f}</li>)}
          </ul>
          <button className="btn btn-primary w-full">Select</button>
        </div>
      ))}
    </section>
  );
}