// src/pages/PlannerPage.tsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { recipes } from "../data/recipes";
import { useRecipeSelection } from "../hooks/useRecipeSelection";
import RecipeSelector from "../components/RecipeSelector";
import Timeline from "../components/Timeline";
import "../assets/scss/PlannerPage.scss";
import "../assets/scss/RecipeSelector.scss";
import "../assets/scss/Timeline.scss";
import Header from "../components/Header";

const PlannerPage: React.FC = () => {
  const {
    selectedRecipeIds,
    selectedRecipeObjects,
    toggleRecipe,
    clearSelection,
    plan,
  } = useRecipeSelection(2);

  // -----------------------------
  // Helper: summera ingredienser
  // -----------------------------
  const aggregateIngredients = (recipes: typeof selectedRecipeObjects) => {
    const map: Record<string, { total: number; unit: string }> = {};

    const parseIngredient = (str: string) => {
      // Matchar mängd + enhet i början, resten blir namnet
      // t.ex. "4 dl vetemjöl" → {num: 4, unit: "dl", name: "vetemjöl"}
      // t.ex. "100 g smält smör eller margarin" → {num: 100, unit: "g", name: "smält smör eller margarin"}
      const regex = /^([\d,.\/\s]+)\s*([a-zA-ZåäöÅÄÖ%]+)?\s+(.*)$/;
      const match = str.match(regex);
      if (match) {
        let numStr = match[1].trim().replace(",", ".");
        // Hantera bråktal, t.ex. "1/2" → 0.5
        if (numStr.includes("/")) {
          const parts = numStr.split("/").map((p) => parseFloat(p));
          if (parts.length === 2) numStr = (parts[0] / parts[1]).toString();
        }
        const num = parseFloat(numStr) || 1;
        const unit = match[2] || "";
        const name = match[3].trim();
        return { num, unit, name };
      }
      return { num: 1, unit: "", name: str }; // fallback
    };

    recipes.forEach((r) => {
      const ingredients = Array.isArray(r.ingredients)
        ? r.ingredients
        : Object.values(r.ingredients).flat();

      ingredients.forEach((ing) => {
        const { num, unit, name } = parseIngredient(ing);
        if (map[name]) {
          map[name].total += num;
        } else {
          map[name] = { total: num, unit };
        }
      });
    });

    return map;
  };

  const ingredientsList = aggregateIngredients(selectedRecipeObjects);

  // -----------------------------
  // Deduplicera tips
  // -----------------------------
  const tipsList = Array.from(
    new Set(selectedRecipeObjects.flatMap((r) => r.tips || []))
  );

  // -----------------------------
  // Total tid
  // -----------------------------
  const totalTime = selectedRecipeObjects.reduce(
    (sum, r) => sum + r.time.prep + r.time.bake + (r.time.rise || 0),
    0
  );

  return (
    <>
      <Header />
      <Container className="planner-page">
        <header>
          <h2>Baka och Planera</h2>
          <p>Välj dina recept och planera din bakning</p>
        </header>

        {/* Receptväljaren */}
        <RecipeSelector
          recipes={recipes}
          selectedRecipeIds={selectedRecipeIds}
          onToggle={toggleRecipe}
        />

        {selectedRecipeObjects.length > 0 && (
          <div className="planner-details mt-4">
            {/* -----------------------------
          Totals & Summary
      ----------------------------- */}
            <div className="card summary-card">
              <p>
                <strong>Totalt valda recept:</strong>{" "}
                {selectedRecipeObjects.length} | <strong>Total tid:</strong>{" "}
                {totalTime} min
              </p>
            </div>

            {/* -----------------------------
          Valda recept
      ----------------------------- */}
            <div className="card selected-recipes-card">
              <h3>Valda recept</h3>
              <ul>
                {selectedRecipeObjects.map((r) => (
                  <li key={r.id}>
                    {r.title} ({r.category})
                  </li>
                ))}
              </ul>
            </div>

            {/* -----------------------------
          Timeline
      ----------------------------- */}
            <div className="card timeline-card">
              <h3>Tidslinje</h3>
              <Timeline
                timeline={plan.map((p) => ({
                  step: p.recipe.title,
                  duration: p.endTime - p.startTime,
                }))}
              />
            </div>

            {/* -----------------------------
          Rensa val
      ----------------------------- */}
            <Button variant="danger" onClick={clearSelection}>
              Rensa val
            </Button>

            {/* -----------------------------
          Totala ingredienser
      ----------------------------- */}
            <div className="card ingredients-card mt-4">
              <h3>Totala ingredienser</h3>
              <ul>
                {Object.entries(ingredientsList).map(([name, data]) => (
                  <li key={name}>
                    {name}: {data.total}
                    {data.unit}
                  </li>
                ))}
              </ul>
            </div>

            {/* -----------------------------
          Tips & Förberedelser
      ----------------------------- */}
            {tipsList.length > 0 && (
              <div className="card tips-card mt-4">
                <h3>Tips & Förberedelser</h3>
                {selectedRecipeObjects.map(
                  (r) =>
                    r.tips.length > 0 && (
                      <div key={r.id} className="recipe-tips mb-3">
                        <strong>{r.title}:</strong>
                        <ul>
                          {r.tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default PlannerPage;
