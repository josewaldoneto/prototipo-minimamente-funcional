
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const Home = () => {
  const featuredGames = [
    { id: 7, name: "Doom", image: "/imgcebola/img-1.png" },
    { id: 8, name: "Spider-Man 2", image: "/imgcebola/img-2.png" },
    { id: 9, name: "Bloodborne", image: "/imgcebola/img-3.png" },
    { id: 10, name: "Assassin's Creed", image: "/imgcebola/img-4.png" },
    { id: 11, name: "GTA V", image: "/imgcebola/img-5.png" },
    { id: 12, name: "Helldivers", image: "/imgcebola/img-6.png" }
  ];
  
  const promoGames = [
    { id: 1, name: "GTA San Andreas", image: "/imgcebola/img-7.png" },
    { id: 2, name: "The Binding of Isaac", image: "/imgcebola/img-8.png" },
    { id: 3, name: "Forza Horizon", image: "/imgcebola/img-9.png" },
    { id: 4, name: "Hades", image: "/imgcebola/img-12.png" },
    { id: 5, name: "Elden Ring", image: "/imgcebola/img-13.png" },
    { id: 6, name: "Balatro", image: "/imgcebola/img-14.png" }
  ];
  
  const newReleases = [
    { id: 13, name: "Monster Hunter", image: "/imgcebola/img-15.png" },
    { id: 14, name: "GTA VI", image: "/imgcebola/img-16.png" },
    { id: 15, name: "The Last of Us", image: "/imgcebola/img-17.png" },
    { id: 16, name: "Hades 2", image: "/imgcebola/img-21.png" },
    { id: 17, name: "Half-Life 3", image: "/imgcebola/img-22.png" },
    { id: 18, name: "Project L", image: "/imgcebola/img-23.png" }
  ];

  return (
    <div>
      <Header />
      <main className="page-content">
        <img 
          src="/imgcebola/img-20.png" 
          alt="Promoção de Outono" 
          className="promo-banner rounded-lg" 
        />
        
        <div>
          <div className="section-title">Em Alta</div>
          <div className="grid grid-cols-3 gap-4">
            {featuredGames.map(game => (
              <Link to={`/game/${game.id}`} key={game.id}>
                <div className="game-card">
                  <img src={game.image} alt={game.name} className="game-image" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="category-buttons">
          <div className="category-button">
            <h2>INDIE</h2>
          </div>
          <div className="category-button">
            <h2>AÇÃO</h2>
          </div>
        </div>
        
        <div>
          <div className="section-title">Promoções</div>
          <div className="grid grid-cols-3 gap-4">
            {promoGames.map(game => (
              <Link to={`/game/${game.id}`} key={game.id}>
                <div className="game-card">
                  <img src={game.image} alt={game.name} className="game-image" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="section-title">Recém lançados</div>
          <div className="grid grid-cols-3 gap-4">
            {newReleases.map(game => (
              <Link to={`/game/${game.id}`} key={game.id}>
                <div className="game-card">
                  <img src={game.image} alt={game.name} className="game-image" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton backToTop />
    </div>
  );
};

export default Home;
