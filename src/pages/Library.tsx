
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";
import { Link } from "react-router-dom";

const Library = () => {
  const games = [
    { id: 1, name: "GTA San Andreas", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 2, name: "The Binding of Isaac", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 3, name: "Forza Horizon", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 4, name: "Hades", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 5, name: "Elden Ring", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 6, name: "Balatro", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 7, name: "Doom", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 8, name: "Spider-Man 2", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 9, name: "Bloodborne", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 10, name: "Assassin's Creed", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 11, name: "GTA V", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 12, name: "Helldivers", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 13, name: "Monster Hunter", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 14, name: "GTA VI", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 15, name: "The Last of Us", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 16, name: "Hades 2", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 17, name: "Half-Life 3", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 18, name: "Project L", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 19, name: "Call of Duty", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 20, name: "Need for Speed", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 21, name: "Gang Beasts", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" }
  ];

  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="text-3xl font-bold mb-8">Biblioteca</h1>
        
        <div className="game-grid">
          {games.map(game => (
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

export default Library;
