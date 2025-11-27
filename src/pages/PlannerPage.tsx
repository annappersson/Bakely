import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { recipes } from "../data/recipes";
import { useRecipeSelection } from "../hooks/useRecipeSelection";
import RecipeSelector from "../components/RecipeSelector";
import Timeline from "../components/TimeLine";
import "../assets/scss/plannerpage.scss";
import "../assets/scss/recipeselector.scss";
import "../assets/scss/timeline.scss";

const PlannerPage: React.FC = () => {
  const {
    selectedRecipeIds,
    selectedRecipeObjects,
    toggleRecipe,
    clearSelection,
    plan,
  } = useRecipeSelection(2);

  return (
    <Container
      className="planner-page pt-4"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)" }}
    >
      <header>
        <h2>Baka och Planera</h2>
        <p>Välj dina recept och planera din bakning</p>
      </header>

      <RecipeSelector
        recipes={recipes}
        selectedRecipeIds={selectedRecipeIds}
        onToggle={toggleRecipe}
      />

      {selectedRecipeObjects.length > 0 && (
        <div className="planner-details">
          <h3>Valda recept</h3>
          <ul className="list-disc ml-6 space-y-2">
            {selectedRecipeObjects.map((r) => (
              <li key={r.id}>
                {r.title} ({r.category})
              </li>
            ))}
          </ul>

          <Timeline
            timeline={plan.map((p) => ({
              step: p.recipe.title,
              duration: p.endTime - p.startTime,
            }))}
          />

          <Button variant="danger" className="mt-3" onClick={clearSelection}>
            Rensa val
          </Button>
        </div>
      )}
    </Container>
  );
};

export default PlannerPage;
