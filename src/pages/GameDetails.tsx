
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const GameDetails = () => {
  const { id } = useParams();
  
  // Example data for GTA VI
  const game = {
    id: 13,
    name: "Grand Theft Auto VI",
    images: [
      "/imgcebola/img-1.png",
      "/imgcebola/img-1.png",
      "/imgcebola/img-1.png",
      "/imgcebola/img-1.png",
      "/imgcebola/img-1.png"
    ],
    price: "R$ 599,87",
    description: "Sobre Grand Theft Auto VI:",
    minRequirements: [
      "Processador: Intel Core i9 3225 (ou superior);",
      "Memória RAM: 80 GB ou mais;",
      "Placa de vídeo: Intel HD 9000 de PC ou AMD Radeon Vega 20 (ou superior);",
      "Espaço disponível em disco: 5 TB;",
      "Sistema operacional: Windows 10/11 de 64 bits."
    ],
    recommendedRequirements: [
      "Processador: Intel Core i20 7300U ou AMD Ryzen 90 3300U (ou superior);",
      "Memória RAM: 16 TB ou mais;",
      "Placa de vídeo: Nvidia RTX 9060, AMD R90 2800 (ou superior com DX55);",
      "Memória de vídeo: 2 TB VRAM",
      "Armazenamento: SSD NVMe;",
      "Espaço disponível em disco: 20 TB;",
      "Sistema operacional: Windows 10/11 de 128 bits."
    ]
  };

  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="text-3xl font-bold mb-6">{game.name}</h1>
        
        <div className="game-details">
          <img 
            src="./imgcebola/img-1.png"
            alt={game.name} 
            className="game-hero rounded-lg"
          />
          
          <div className="game-images">
            {game.images.map((img, index) => (
              <img key={index} src={img} alt={`${game.name} screenshot ${index + 1}`} className="game-thumbnail rounded" />
            ))}
          </div>
          
          <div className="buy-section">
            <div className="price">{game.price}</div>
            <button className="buy-button">COMPRAR</button>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-3">{game.description}</h2>
            <div className="bg-light-blue text-black p-4 rounded-lg">
              {/* Description would go here */}
            </div>
          </div>
          
          <div className="requirements">
            <h2 className="requirements-title">Requisitos de sistema:</h2>
            <div className="requirements-box">
              <p className="font-bold mb-2">Requisitos mínimos:</p>
              <ul className="requirements-list">
                {game.minRequirements.map((req, index) => (
                  <li key={`min-${index}`}>{req}</li>
                ))}
              </ul>
              
              <p className="font-bold mb-2 mt-4">Requisitos recomendados:</p>
              <ul className="requirements-list">
                {game.recommendedRequirements.map((req, index) => (
                  <li key={`rec-${index}`}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton backToTop />
    </div>
  );
};

export default GameDetails;
