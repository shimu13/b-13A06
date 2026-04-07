export default function Steps() {
  const steps = [
    { icon: "📝", title: "Create Account", desc: "Sign up quickly" },
    { icon: "🛒", title: "Choose Products", desc: "Select the tools you need" },
    { icon: "🚀", title: "Start Creating", desc: "Use tools efficiently" },
  ];
  return (
    <section className="steps grid md:grid-cols-3 gap-5 my-10">
      {steps.map((s, i) => (
        <div key={i} className="p-5 border rounded-xl text-center shadow-md">
          <div className="text-4xl mb-3">{s.icon}</div>
          <h3 className="font-bold mb-2">{s.title}</h3>
          <p className="text-gray-600">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}