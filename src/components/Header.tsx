import { Link, useNavigate } from "react-router";
import { Heart } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Loading from "./Loading";
import logoIcon from "../assets/img/logobakely.png";
import { toastError, toastSuccess } from "../utils/toastConfig";
import "../assets/scss/Header.scss";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      await signOut();

      await new Promise((res) => setTimeout(res, 1000));

      toastSuccess("Du är nu utloggad 👋");

      navigate("/logga-in");
    } catch (err: any) {
      toastError(err?.message || "Ett fel uppstod.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading show={loading} />}

      <header className="home-header">
        <Link to="/" className="logo">
          <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
          Bakely
        </Link>

        <div className="header-right">
          {!user ? (
            <Link to="/logga-in" className="auth-btn">
              Logga in
            </Link>
          ) : (
            <button className="auth-btn" onClick={handleLogout}>
              Logga ut
            </button>
          )}

          <Link to="/sparade" className="profile-btn">
            <Heart size={22} />
          </Link>
        </div>
      </header>
    </>
  );
}
