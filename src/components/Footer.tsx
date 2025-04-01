
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

  const buttonText = backToTop ? "Voltar ao topo" : "Voltar";

  return (
    <footer className="footer">
      {showBackButton && (
        <button className="back-button" onClick={handleBackClick}>
          {buttonText}
        </button>
      )}
    </footer>
  );
};

export default Footer;
