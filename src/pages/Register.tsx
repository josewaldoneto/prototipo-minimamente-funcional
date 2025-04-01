
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";

const Register = () => {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="page-title">Registrar Usuário</h1>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[600px]">
            <label htmlFor="email" className="input-label">E-mail</label>
            <input type="email" id="email" />
          </div>
          
          <div className="w-full max-w-[600px]">
            <label htmlFor="username" className="input-label">Usuário</label>
            <input type="text" id="username" />
          </div>
          
          <div className="w-full max-w-[600px]">
            <label htmlFor="password" className="input-label">Senha</label>
            <input type="password" id="password" />
          </div>
          
          <div className="w-full max-w-[600px]">
            <label htmlFor="confirm-password" className="input-label">Confirmar senha</label>
            <input type="password" id="confirm-password" />
          </div>
          
          <div className="captcha w-full max-w-[600px] text-center">
            <div className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" />
              <div>I'm not a robot</div>
            </div>
            <div className="flex justify-end">
              <img src="/lovable-uploads/b2b18185-53dc-485c-87d9-6e06070becb2.png" alt="reCAPTCHA" className="h-10" />
            </div>
          </div>
          
          <button className="submit-button">Registrar</button>
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton />
    </div>
  );
};

export default Register;
