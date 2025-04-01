
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/lovable-uploads/e6a2989f-c903-413d-afd2-ead53443d2e2.png" alt="Logo" className="logo-image" />
        </Link>
        <span className="ml-3 text-xl font-bold">Loja</span>
      </div>
      
      <nav className="nav-links">
        <Link to="/biblioteca">Biblioteca</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-button">Login</button>
          </Link>
          <Link to="/registrar">
            <button className="auth-button">Registrar</button>
          </Link>
        </div>
        
        <button className="settings-button">
          <img src="/lovable-uploads/78110570-0dc8-4d2e-bfb7-b37469275878.png" alt="Settings" className="settings-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
