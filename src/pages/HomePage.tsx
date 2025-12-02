import "../assets/scss/HomePage.scss";
import { Link, useNavigate } from "react-router";
import { Search, Heart, Cookie, Cake, Wheat, ChefHat } from "lucide-react";
import { recipes } from "../data/recipes";
import { useAuth } from "../hooks/useAuth";
import logoIcon from "../assets/img/logobakely.png";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../components/Loading";

<div className="logo">
  <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
  Bakely
</div>;

const mostLoved = recipes.slice(0, 3);

function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true); // starta loading

    try {
      await signOut(); // logga ut

      await new Promise((resolve) => setTimeout(resolve, 2000));
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
    } catch (err: any) {
      toast.error(err?.message || "Något gick fel.");
    } finally {
      setLoading(false); // stoppa loading
      setTimeout(() => navigate("/logga-in"), 200);
    }
  };

  const { user, signOut } = useAuth();
  return (
    <div className="home-page">
      {loading && <Loading show={loading} />}
      {/* HEADER */}
      <header className="home-header">
        <div className="logo">
          <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
          Bakely
        </div>

        <div className="header-right">
          {/* LOGIN / LOGOUT BUTTON */}
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

      {/* SEARCH */}
      <div className="search-wrapper">
        <Search size={18} />
        <input type="text" placeholder="Sök recept..." />
      </div>
      {/* BUILD YOUR CAKE */}
      <div className="build-card">
        <h3>Bygg din Tårta</h3>
        <p>Mix & matcha smaker, fyllningar och frostings</p>
        <Link to="/bygg-tarta" className="btn-start">
          Börja Bygga
        </Link>
      </div>
      <div className="feature-card planning-card">
        <div className="content">
          <h3>Planera din bakning</h3>
          <p>Få hjälp med schema, tider och steg-för-steg planering</p>
          <Link to="/planera" className="btn-startPlan">
            Börja Planera
          </Link>
        </div>
        <img src="/img/plan-baking-icon.png" alt="" className="icon" />
      </div>
      {/* MOST LOVED */}
      <div className="section-header">
        <h3>Mest Gillade</h3>
        <Link to="/recept">Se Alla</Link>
      </div>
      <div className="recipe-list">
        {mostLoved.map((recipe) => (
          <Link
            to={`/recept/${recipe.id}`}
            key={recipe.id}
            className="recipe-card"
          >
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
            <p>{recipe.category}</p>
          </Link>
        ))}
      </div>
      {/* CATEGORIES */}
      <div className="section-header">
        <h3>Kategorier</h3>
      </div>
      <div className="categories">
        <div className="cat cat-cookies">
          <Cookie size={22} />
          <span>Kakor</span>
        </div>

        <div className="cat cat-cakes">
          <Cake size={22} />
          <span>Tårtor</span>
        </div>

        <div className="cat cat-breads">
          <Wheat size={22} />
          <span>Bröd</span>
        </div>

        <div className="cat cat-more">
          <ChefHat size={22} />
          <span>Mer</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
