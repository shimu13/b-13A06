export default function Banner() {
  return (
    <section className="banner">

      {/* LEFT TEXT */}
      <div className="banner-text">
        <p className="badge">AI-Powered Digital Tools Platform</p>

        <h1>
          Supercharge Your <br />
          Digital Workflow
        </h1>

        <p className="desc">
          All-in-one platform for resumes, portfolios, automation tools,
          and more to boost your productivity.
        </p>

        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">View Tools</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="banner-img">
        <img src="/icons.svg" alt="banner" />
      </div>

    </section>
  );
}