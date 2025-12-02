// AllaReceptPage.jsx
import "../assets/scss/AllRecipesPage.scss";
import { Link } from "react-router";
import { recipes } from "../data/recipes";

import logoIcon from "../assets/img/logobakely.png";

function AllRecipesPage() {
  return (
    <div className="alla-recept-page">
      {/* HEADER */}
      <header className="home-header">
        <div className="logo">
          <img src={logoIcon} alt="Bakely Logo" className="logo-img" />
          Bakely
        </div>

        <div className="header-right">
          <Link to="/" className="auth-btn">
            Hem
          </Link>
        </div>
      </header>

      <div className="page-title">
        <h2>Alla Recept</h2>
      </div>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Link
            to={`/recept/${recipe.id}`}
            key={recipe.id}
            className="recipe-card"
          >
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <h4>{recipe.title}</h4>
              <p>{recipe.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllRecipesPage;
