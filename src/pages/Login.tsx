
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityButtons from "../components/AccessibilityButtons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1 className="page-title">Login</h1>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[600px]">
            <label htmlFor="username" className="input-label">Usuário</label>
            <input type="text" id="username" />
          </div>
          
          <div className="w-full max-w-[600px]">
            <label htmlFor="password" className="input-label">Senha</label>
            <input type="password" id="password" />
          </div>
          
          <button className="submit-button">Login</button>
          
          <p className="mt-10">
            <Link to="/esqueci-senha" className="text-white underline">
              Esqueceu a senha?
            </Link>
          </p>
        </div>
      </main>
      <AccessibilityButtons />
      <Footer showBackButton />
    </div>
  );
};

export default Login;
