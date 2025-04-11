const Footer = () => {
    const footerLinks = [
      {
        title: "MetaHealthXR",
        links: ["About Us", "Our Team", "Careers", "Contact"]
      },
      {
        title: "Features",
        links: ["AI Doctor", "Metaverse Spaces", "Health Dashboard", "Support Groups"]
      },
      {
        title: "Resources",
        links: ["Blog", "FAQs", "Documentation", "API"]
      },
      {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "HIPAA Compliance"]
      }
    ];
  
    return (
      <footer className="footer">
        <div className="footer-content">
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-col">
              <h3 className="footer-title">{column.title}</h3>
              <div className="footer-links">
                {column.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#" className="footer-link">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 MetaHealthXR. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;