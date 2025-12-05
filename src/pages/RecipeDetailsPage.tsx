import "../assets/scss/RecipeDetailsPage.scss";
import { useParams } from "react-router";
import { recipes } from "../data/recipes";
import Header from "../components/Header";

function RecipeDetailPage() {
  const { id } = useParams();

  // Hitta recept baserat på ID
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <p>Receptet hittades inte.</p>;
  }

  return (
    <>
      <Header />
      <div className="recipe-detail-page">
        <div className="header-image">
          <img src={recipe.image} alt={recipe.title} />
        </div>

        <div className="detail-content">
          <h2>{recipe.title}</h2>

          <div className="meta-info">
            <p>⏱ Förberedelsetid: {recipe.time.prep} min</p>
            <p>🔥 Gräddningstid: {recipe.time.bake} min</p>
            {recipe.time.rise && <p>⏳ Jäsningstid: {recipe.time.rise} min</p>}
            <p>🍽 Portioner: {recipe.servings}</p>
          </div>

          <h3>Ingredienser</h3>
          <ul className="ingredients-list">
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

          <h3>Gör så här</h3>
          <ol className="instructions-list">
            {recipe.steps.map((step: string, i: number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipeDetailPage;
