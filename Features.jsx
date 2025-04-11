const Features = () => {
    const features = [
      {
        icon: "👨‍⚕️",
        title: "AI Doctor Avatar",
        description: "Interact with our intelligent health assistant powered by Groq LLM. Get instant responses to your health questions in multiple languages."
      },
      {
        icon: "🌐",
        title: "3D Metaverse Space",
        description: "Explore virtual environments designed for health and wellness, including our Virtual Clinic, Yoga Hub, and Support Group Lounge."
      },
      {
        icon: "📊",
        title: "Health Dashboard",
        description: "Visualize your health metrics in immersive 3D graphics. Track vitals, mood, and progress over time in our interactive dashboard."
      },
      {
        icon: "🔄",
        title: "Multimodal Input",
        description: "Upload data through voice, images, text, or webcam. Our system processes all forms of health information for comprehensive analysis."
      }
    ];
  
    return (
      <section id="features" className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;