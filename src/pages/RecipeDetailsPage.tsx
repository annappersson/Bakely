import "../assets/scss/RecipeDetailsPage.scss";
import { useParams, useNavigate } from "react-router";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { Heart, Clock, Flame, Timer, Users, ArrowLeft } from "lucide-react";
import CollectionModal from "../components/CollectionModal";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { toastInfo } from "../utils/toastConfig";
import Loading from "../components/Loading";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth(); // ← loading från context
  const recipe = recipes.find((r) => r.id === id);
  const [showModal, setShowModal] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([]);

  // När sidan laddas, scrolla alltid till toppen
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]); // kör varje gång id ändras (nyt recept)

  if (!recipe) return <p>Receptet hittades inte.</p>;

  const handleLikeClick = () => {
    if (authLoading) {
      toastInfo("Laddar användarinformation…");
      return;
    }

    if (!user) {
      toastInfo("Du måste vara inloggad för att spara recept 💗");
      return;
    }

    setShowModal(true);
  };

  useEffect(() => {
    if (recipe) {
      setCompletedSteps(new Array(recipe.steps.length).fill(false));
    }
  }, [recipe]);

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => {
      const newSteps = [...prev];
      newSteps[index] = !newSteps[index];
      return newSteps;
    });
  };

  return (
    <>
      <Header />

      {/* Overlay loader medan auth laddar */}
      <Loading show={authLoading} />

      <div className="recipe-detail-page">
        {/* 📌 TOP IMAGE + BTN */}
        <div className="top-image-wrapper">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>

          <button
            className="like-btn"
            onClick={handleLikeClick}
            disabled={authLoading} // disable under loading
          >
            <Heart size={20} />
          </button>

          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        </div>

        {/* 📌 TITLE */}
        <div className="recipe-header">
          <h2>{recipe.title}</h2>
          {recipe.description && (
            <p className="recipe-desc">{recipe.description}</p>
          )}
        </div>

        {/* 📌 TIME INFO */}
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
              <li key={i} className={completedSteps[i] ? "completed-step" : ""}>
                <label>
                  <input
                    type="checkbox"
                    checked={completedSteps[i]}
                    onChange={() => toggleStep(i)}
                  />
                  <span>{step}</span>
                </label>
              </li>
            ))}
          </ol>
        </div>

        {/* 📌 SAVE MODAL */}
        <CollectionModal
          show={showModal}
          recipeId={recipe.id}
          onClose={() => setShowModal(false)}
          onAdded={() => console.log("Recept sparat!")}
        />
      </div>
    </>
  );
}
