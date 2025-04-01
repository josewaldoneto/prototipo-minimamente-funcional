
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const About = () => {
  const teamMembers = [
    { id: 1, name: "Aleff Matheus", role: "T.I Senior", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 2, name: "Bruno de Lima", role: "COF", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 3, name: "Guilherme Miranda", role: "COD", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
    { id: 4, name: "Jose Waldo", role: "CEO", image: "/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" },
    { id: 5, name: "Luis Felipe", role: "CTO", image: "/lovable-uploads/984ee00b-ba55-4c36-8077-16fda00ea083.png" },
    { id: 6, name: "Davi Pacini", role: "CRO", image: "/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" },
  ];

  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="text-3xl font-bold text-center mb-8">Sobre Nós</h1>
        
        <div className="flex justify-center mb-10">
          <img 
            src="/lovable-uploads/0929ba84-48f4-49a7-9cd0-0ce033cfbe11.png" 
            alt="Team" 
            className="rounded-lg w-full max-w-[800px]" 
          />
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image mx-auto">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton backToTop />
    </div>
  );
};

export default About;
