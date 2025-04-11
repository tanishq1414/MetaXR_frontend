const Metaverse = () => {
    const spaces = [
      {
        icon: "🏥",
        title: "Virtual Clinic",
        description: "Consult with our AI doctor in a calming virtual clinic environment. Upload symptoms, get diagnoses, and receive personalized health advice."
      },
      {
        icon: "🧘",
        title: "Yoga & Meditation Hub",
        description: "Join guided sessions in a serene virtual space. Practice yoga, meditation, and mindfulness with AI-guided instructors."
      },
      {
        icon: "👥",
        title: "Support Group Lounge",
        description: "Connect with others in a safe, supportive space. Join therapy sessions, anxiety management groups, or lifestyle improvement circles."
      }
    ];
  
    return (
      <section id="metaverse" className="metaverse-section">
        <h2 className="section-title">Explore Our Metaverse Spaces</h2>
        <div className="metaverse-container">
          {spaces.map((space, index) => (
            <div key={index} className="metaverse-card">
              <div className="metaverse-image">{space.icon}</div>
              <div className="metaverse-content">
                <h3 className="metaverse-title">{space.title}</h3>
                <p className="metaverse-description">{space.description}</p>
                <button className="metaverse-btn">Enter {space.title.split(' ')[0]}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Metaverse;