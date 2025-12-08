// src/pages/RecipeDetailPage.tsx
import "../assets/scss/RecipeDetailsPage.scss";
import { useParams, useNavigate } from "react-router";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import { Heart, Clock, Flame, Timer, Users, ArrowLeft } from "lucide-react";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === id);

  const [collections, setCollections] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>("");

  async function fetchCollections() {
    const { data: userCollections, error } = await supabase
      .from("user_collections")
      .select("*");

    if (!error) setCollections(userCollections || []);
  }

  async function likeRecipe() {
    if (!selectedCollection) return;

    await supabase.from("user_collection_items").insert({
      collection_id: selectedCollection,
      recipe_id: recipe?.id,
      type: "recipe",
    });

    setShowModal(false);
  }

  useEffect(() => {
    fetchCollections();
  }, []);

  if (!recipe) return <p>Receptet hittades inte.</p>;

  return (
    <>
      <Header />

      <div className="recipe-detail-page">
        {/* 📌 TOP IMAGE + LIKE BUTTON + BACK BUTTON */}
        <div className="top-image-wrapper">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>

          <button className="like-btn" onClick={() => setShowModal(true)}>
            <Heart size={20} />
          </button>

          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        </div>

        {/* 📌 TITLE + DESCRIPTION */}
        <div className="recipe-header">
          <h2>{recipe.title}</h2>
          {recipe.description && (
            <p className="recipe-desc">{recipe.description}</p>
          )}
        </div>

        {/* 📌 TIME INFO BOXES */}
        <div className="info-row">
          <div className="info-box">
            <Clock size={20} />
            <p>{recipe.time.prep} min</p>
            <span>Förbered</span>
          </div>

          <div className="info-box">
            <Flame size={20} />
            <p>{recipe.time.bake} min</p>
            <span>Grädda</span>
          </div>

          {recipe.time.rise && (
            <div className="info-box">
              <Timer size={20} />
              <p>{recipe.time.rise} min</p>
              <span>Jäsning</span>
            </div>
          )}

          <div className="info-box">
            <Users size={20} />
            <p>{recipe.servings}</p>
            <span>Portioner</span>
          </div>
        </div>

        {/* 📌 INGREDIENTS */}
        <div className="content-box">
          <h4>Ingredienser</h4>

          <ul>
            {Array.isArray(recipe.ingredients)
              ? recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)
              : Object.entries(recipe.ingredients).map(([section, items]) => (
                  <li key={section}>
                    <strong>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </strong>
                    <ul>
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
          </ul>
        </div>

        {/* 📌 STEPS */}
        <div className="content-box">
          <h4>Gör så här</h4>

          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* 📌 LIKE MODAL */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Lägg till i samling 💗</h3>

              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
              >
                <option value="">Välj samling</option>
                {collections.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              <button className="confirm-btn" onClick={likeRecipe}>
                Lägg till
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Avbryt
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
