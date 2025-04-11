const Header = () => {
    return (
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-icon">⚕️</span>
          MetaHealthXR
        </a>
        <nav className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#metaverse" className="nav-link">Metaverse</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
        <button className="login-btn">Login / Sign Up</button>
      </header>
    );
  };
  
  export default Header;