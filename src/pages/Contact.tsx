
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="page-title">Entre em contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="name" className="input-label">Nome</label>
              <input type="text" id="name" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" id="email" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="input-label">Assunto</label>
              <input type="text" id="subject" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="input-label">Mensagem</label>
              <input type="text" id="message" />
            </div>
            
            <button className="submit-button">Enviar</button>
          </div>
          
          <div>
            <div className="flex justify-center">
              <img src="./imgcebola/img-1.png" alt="Logo" className="w-[300px] h-[300px]" />
            </div>
            
            <div className="contact-info">
              <h2 className="address-title">Endereço</h2>
              <p>Lá onde não tem sol</p>
              <p>Rua Boa</p>
              <p>Loja 24</p>
            </div>
          </div>
        </div>
        
        <div className="map-container">
          <img 
            src="./imgcebola/img-1.png"
            alt="Mapa com localização" 
            className="map-image" 
          />
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton />
    </div>
  );
};

export default Contact;
