import "../assets/scss/HomePage.scss";
import { Link } from "react-router";
import { Search, Cookie, Cake, Wheat, ChefHat } from "lucide-react";
import { recipes } from "../data/recipes";
import logoIcon from "../assets/img/logobakely.png";
import Header from "../components/Header";

<div className="logo">
  <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
  Bakely
</div>;

const mostLoved = recipes.slice(0, 3);

function HomePage() {
  return (
    <div className="home-page">
      {/* HEADER */}
      <Header />

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
