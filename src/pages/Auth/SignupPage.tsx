import { Link } from "react-router";
import "../../assets/scss/SignupPage.scss";
import { SignUpForm } from "../../components/AuthForms";
import Header from "../../components/Header";

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-card">
          <div className="logo-circle">
            <span className="cake-icon">🍰</span>
          </div>

          <h2 className="title">Skapa konto</h2>
          <p className="subtitle">
            Bli en del av Bakely – det tar bara några sekunder!
          </p>

          {/* Formulär */}
          <SignUpForm />

          <div className="bottom-links">
            <div className="divider"></div>

            <div className="signup-text">
              Har du redan ett konto?
              <Link to="/logga-in" className="create-account">
                {" "}
                Logga in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
