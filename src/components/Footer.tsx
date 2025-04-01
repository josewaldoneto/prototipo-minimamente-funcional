
import { Link } from "react-router-dom";

interface FooterProps {
  showBackButton?: boolean;
  backToTop?: boolean;
}

const Footer = ({ showBackButton = false, backToTop = false }: FooterProps) => {
  const handleBackClick = () => {
    if (backToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.back();
    }
  };

  return (
    <footer className="footer">
      {showBackButton && (
        <button className="back-button" onClick={handleBackClick}>
          {backToTop ? "Voltar ao topo" : "Voltar"}
        </button>
      )}
    </footer>
  );
};

export default Footer;
