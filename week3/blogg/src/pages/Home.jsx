const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Stories That Matter</h1>
          <p>
            Read insightful blogs, learn new skills, and explore ideas
            from creators around the world.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Explore Blogs</button>
            <button className="btn outline">Start Writing</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Easy Writing</h3>
          <p>Create and publish blogs effortlessly</p>
        </div>
        <div className="feature-card">
          <h3>Fast Reading</h3>
          <p>Optimized reading experience</p>
        </div>
        <div className="feature-card">
          <h3>Global Reach</h3>
          <p>Share your ideas with the world</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
