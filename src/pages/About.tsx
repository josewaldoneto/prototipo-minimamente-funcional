
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const About = () => {
  const teamMembers = [
    { id: 1, name: "Aleff Matheus", role: "T.I Senior", image: "/imgcebola/img-1.png" },
    { id: 2, name: "Bruno de Lima", role: "COF", image: "/imgcebola/img-1.png" },
    { id: 3, name: "Guilherme Miranda", role: "COD", image: "/imgcebola/img-1.png" },
    { id: 4, name: "Jose Waldo", role: "CEO", image: "/imgcebola/img-1.png" },
    { id: 5, name: "Luis Felipe", role: "CTO", image: "/imgcebola/img-1.png" },
    { id: 6, name: "Davi Pacini", role: "CRO", image: "/imgcebola/img-1.png" },
  ];

  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="text-3xl font-bold text-center mb-8">Sobre Nós</h1>
        
        <div className="flex justify-center mb-10">
          <img 
            src="./imgcebola/img-1.png" 
            alt="Team" 
            className="rounded-lg w-full max-w-[800px]" 
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="text-center">
              <div className="w-[100px] h-[100px] mx-auto rounded-2xl overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-2 font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
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
