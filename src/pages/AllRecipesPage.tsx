import "../assets/scss/AllRecipesPage.scss";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { recipes } from "../data/recipes";

import Pagination from "../components/Pagination";
import Header from "../components/Header";

// Ikoner
import {
  Cookie,
  Cake,
  Wheat,
  Croissant,
  Dessert,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Alla", icon: <Sparkles size={18} /> },
  { name: "Tårtor", icon: <Cake size={18} /> },
  { name: "Kakor", icon: <Cookie size={18} /> },
  { name: "Bröd", icon: <Wheat size={18} /> },
  { name: "Muffins", icon: <Dessert size={18} /> },
  { name: "Bullar", icon: <Croissant size={18} /> },
];

function AllRecipesPage() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Alla");

  const recipesPerPage = 5;

  // ⭐ Filter recipes by category
  const filteredRecipes =
    activeCategory === "Alla"
      ? recipes
      : recipes.filter((r) => r.category === activeCategory);

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const startIndex = (page - 1) * recipesPerPage;
  const visibleRecipes = filteredRecipes.slice(
    startIndex,
    startIndex + recipesPerPage
  );

  // ⭐ Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // ⭐ Reset to page 1 when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="alla-recept-page">
      {/* HEADER */}
      <Header />

      <div className="page-title">
        <h2>Alla Recept</h2>
      </div>

      {/* ⭐ CATEGORY FILTER BAR */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`cat-btn ${activeCategory === cat.name ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.name)}
          >
            <span className="icon">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* RECIPE LIST */}
      <div className="recipe-list fade-in">
        {visibleRecipes.map((recipe) => (
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

      {/* PAGINATION */}
      {filteredRecipes.length > recipesPerPage && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPreviousPage={() => setPage((p) => p - 1)}
          onNextPage={() => setPage((p) => p + 1)}
        />
      )}
    </div>
  );
}

export default AllRecipesPage;
