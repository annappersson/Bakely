import "../assets/scss/HomePage.scss";
import { Link, useNavigate } from "react-router";
import { Search, Cookie, Cake, Wheat, ChefHat } from "lucide-react";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { useState } from "react";

function HomePage() {
  const mostLoved = recipes.slice(0, 3);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function goToCategory(category: string) {
    navigate(`/recept?category=${encodeURIComponent(category)}`);
  }

  return (
    <div className="home-page">
      {/* HEADER */}
      <Header />

      {/* SEARCH */}
      <div className="search-wrapper">
        <Search size={18} />
        <input
          type="text"
          placeholder="Sök recept..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              navigate(`/sok?q=${encodeURIComponent(query)}`);
            }
          }}
        />
      </div>

      {/* BUILD YOUR CAKE */}
      <div className="build-card">
        <h3>Bygg din Tårta</h3>
        <p>Mix & matcha smaker, fyllningar och frostings</p>
        <Link to="/bygg-tarta" className="btn-start">
          Börja Bygga
        </Link>
      </div>

      {/* PLANERING */}
      <div className="feature-card planning-card">
        <div className="content">
          <h3>Planera din bakning</h3>
          <p>Få hjälp med schema, tider och steg-för-steg planering</p>
          <Link to="/planera" className="btn-startPlan">
            Börja Planera
          </Link>
        </div>
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
        <div className="cat cat-cookies" onClick={() => goToCategory("Kakor")}>
          <Cookie size={22} />
          <span>Kakor</span>
        </div>

        <div className="cat cat-cakes" onClick={() => goToCategory("Tårtor")}>
          <Cake size={22} />
          <span>Tårtor</span>
        </div>

        <div className="cat cat-breads" onClick={() => goToCategory("Bröd")}>
          <Wheat size={22} />
          <span>Bröd</span>
        </div>

        <div
          className="cat cat-muffins"
          onClick={() => goToCategory("Muffins")}
        >
          <ChefHat size={22} />
          <span>Muffins</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
