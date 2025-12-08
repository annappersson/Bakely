// src/pages/RecipeDetailPage.tsx
import "../assets/scss/RecipeDetailsPage.scss";
import { useParams, useNavigate } from "react-router";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import { Heart, Clock, Flame, Timer, Users, ArrowLeft } from "lucide-react";
import CollectionModal from "../components/CollectionModal";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);

  const [userId, setUserId] = useState<string | null>(null);
  const [collections, setCollections] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>("");

  // ⭐ 1. Hämta inloggad användare
  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id || null);
    }
    fetchUser();
  }, []);

  // ⭐ 2. Hämta användarens samlingar när userId är laddat
  useEffect(() => {
    if (!userId) return;

    async function fetchCollections() {
      const { data } = await supabase
        .from("user_collections")
        .select("*")
        .eq("user_id", userId);

      setCollections(data || []);
    }

    fetchCollections();
  }, [userId]);

  async function likeRecipe() {
    if (!selectedCollection || !userId) return;

    await supabase.from("user_collection_items").insert({
      user_id: userId,
      collection_id: selectedCollection,
      recipe_id: id,
      type: "recipe",
    });

    setShowModal(false);
  }

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

        <CollectionModal
          show={showModal}
          recipeId={recipe.id}
          onClose={() => setShowModal(false)}
          onAdded={(collectionId) => {
            console.log("Recept sparat i samling", collectionId);
          }}
        />
      </div>
    </>
  );
}
