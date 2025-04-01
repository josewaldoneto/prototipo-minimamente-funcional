
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const Index = () => {
  const actionGames = [
    { id: 1, name: "Hades", image: "/imgcebola/img-1.png" },
    { id: 2, name: "Celeste", image: "/imgcebola/img-2.png" },
    { id: 3, name: "Doom", image: "/imgcebola/img-3.png" },
    { id: 4, name: "The Binding of Isaac", image: "/imgcebola/img-4.png" },
    { id: 5, name: "GTA San Andreas", image: "/imgcebola/img-5.png" },
    { id: 6, name: "Assassin's Creed", image: "/imgcebola/img-6.png" },
    { id: 7, name: "Spider-Man 2", image: "/imgcebola/img-7.png" },
    { id: 8, name: "Bloodborne", image: "/imgcebola/img-8.png" },
    { id: 9, name: "Monster Hunter", image: "/imgcebola/img-9.png" },
    { id: 10, name: "GTA V", image: "/imgcebola/img-10.png" },
    { id: 11, name: "Helldivers", image: "/imgcebola/img-11.png" },
    { id: 12, name: "Hades 2", image: "/imgcebola/img-12.png" },
    { id: 13, name: "GTA VI", image: "/imgcebola/img-13.png" },
    { id: 14, name: "The Last of Us", image: "/imgcebola/img-14.png" },
    { id: 15, name: "Call of Duty", image: "/imgcebola/img-15.png" },
    { id: 16, name: "Need for Speed", image: "/imgcebola/img-16.png" },
    { id: 17, name: "Half-Life 3", image: "/imgcebola/img-17.png" },
    { id: 18, name: "Yakuza", image: "/imgcebola/img-18.png" },
    { id: 19, name: "Terraria", image: "/imgcebola/img-19.png" },
    { id: 20, name: "Project L", image: "/imgcebola/img-20.png" },
    { id: 21, name: "Sons of the Forest", image: "/imgcebola/img-21.png" }
  ];

  return (
    <div>
      <Header />
      <main className="page-content">
        <div className="action-title">
          <h1 className="font-bold">Jogos De Ação</h1>
        </div>

        <div className="game-grid">
          {actionGames.map(game => (
            <Link to={`/game/${game.id}`} key={game.id}>
              <div className="game-card">
                <img src={game.image} alt={game.name} className="game-image" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton backToTop />
    </div>
  );
};

export default Index;
