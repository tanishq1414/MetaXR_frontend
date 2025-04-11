const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Your AI-Powered Health Companion in the Metaverse</h1>
          <p className="hero-subtitle">
            Experience healthcare in a new dimension with MetaHealthXR. Our AI-driven virtual health platform 
            combines the power of artificial intelligence with immersive 3D environments to provide 
            personalized health guidance, support, and monitoring.
          </p>
          <div className="hero-cta">
            <button className="hero-btn primary-btn">Enter Metaverse</button>
            <button className="hero-btn secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/placeholder/800/400" alt="MetaHealthXR VR Experience" />
        </div>
      </section>
    );
  };
  
  export default Hero;