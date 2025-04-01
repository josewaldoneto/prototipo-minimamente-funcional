
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const Index = () => {
  const actionGames = [
    { id: 1, name: "Hades", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 2, name: "Celeste", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 3, name: "Doom", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 4, name: "The Binding of Isaac", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 5, name: "GTA San Andreas", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 6, name: "Assassin's Creed", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 7, name: "Spider-Man 2", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 8, name: "Bloodborne", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 9, name: "Monster Hunter", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 10, name: "GTA V", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 11, name: "Helldivers", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 12, name: "Hades 2", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 13, name: "GTA VI", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 14, name: "The Last of Us", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 15, name: "Call of Duty", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 16, name: "Need for Speed", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 17, name: "Half-Life 3", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 18, name: "Yakuza", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 19, name: "Terraria", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 20, name: "Project L", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 21, name: "Sons of the Forest", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" }
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
