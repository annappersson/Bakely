import { Link } from "react-router";
import { SignInForm } from "../../components/SignInForm";
import "../../assets/scss/LoginPage.scss";
import Header from "../../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-card">
          <div className="logo-circle">
            <span className="cake-icon">🍰</span>
          </div>

          <h2 className="title">Bakely</h2>
          <p className="subtitle">Din mysiga kompanjon för bakäventyr</p>

          {/* Här ligger formuläret */}
          <SignInForm />

          <div className="bottom-links">
            <Link to="/reset-password" className="forgot">
              Glömt lösenord?
            </Link>

            <div className="divider">
              <span>eller fortsätt med</span>
            </div>

            <div className="oauth-row">
              <button className="oauth-btn">G</button>
              <button className="oauth-btn"></button>
              <button className="oauth-btn">f</button>
            </div>

            <div className="signup-text">
              Har du inget konto?
              <Link to="/skapa-konto" className="create-account">
                {" "}
                Skapa konto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
