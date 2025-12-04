import { Link, useNavigate } from "react-router";
import { Heart } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "./Loading";
import logoIcon from "../assets/img/logobakely.png";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      await signOut();

      await new Promise((res) => setTimeout(res, 1000));

      toast("Du är nu utloggad 👋", {
        icon: <span>🍰</span>,
        style: {
          background: "#ffeaf1",
          color: "#8a5a6a",
          borderRadius: "12px",
          padding: "14px 16px",
          fontSize: "15px",
          boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
        },
      });

      navigate("/logga-in");
    } catch (err: any) {
      toast.error(err?.message || "Ett fel uppstod.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading show={loading} />}

      <header className="home-header">
        <div className="logo">
          <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
          Bakely
        </div>

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

          <button className="profile-btn">
            <Heart size={22} />
          </button>
        </div>
      </header>
    </>
  );
}
