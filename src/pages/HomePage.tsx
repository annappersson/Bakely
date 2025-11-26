import "../assets/scss/HomePage.scss";
import { Link } from "react-router";
import { Search, Heart, Cookie, Cake, Wheat, ChefHat } from "lucide-react";

function HomePage() {
  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="home-header">
        <div className="logo">Bakely</div>
        <button className="profile-btn">
          <Heart size={22} />
        </button>
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
        <Link to="/cake-builder" className="btn-start">
          Börja Bygga
        </Link>
      </div>

      <div className="feature-card planning-card">
        <div className="content">
          <h3>Planera din bakning</h3>
          <p>Få hjälp med schema, tider och steg-för-steg planering</p>
          <Link to="/planner" className="btn-startPlan">
            Börja Planera
          </Link>
        </div>
        <img src="/img/plan-baking-icon.png" alt="" className="icon" />
      </div>

      {/* MOST LOVED */}
      <div className="section-header">
        <h3>Mest Gillade</h3>
        <Link to="/recipes">Se Alla</Link>
      </div>

      {/* Placeholder – här kommer dina riktiga mockdata sen */}
      <div className="recipe-list">
        <div className="recipe-card">Recipe 1</div>
        <div className="recipe-card">Recipe 2</div>
        <div className="recipe-card">Recipe 3</div>
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
