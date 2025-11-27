import "../assets/scss/RecipeSelector.scss";

interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface Props {
  recipes: Recipe[];
  selectedRecipeIds: string[];
  onToggle: (id: string) => void;
}

export default function RecipeSelector({
  recipes,
  selectedRecipeIds,
  onToggle,
}: Props) {
  return (
    <div className="recipe-selector">
      {recipes.map((recipe) => {
        const selected = selectedRecipeIds.includes(recipe.id);
        return (
          <div
            key={recipe.id}
            className={`recipe-card ${selected ? "selected" : ""}`}
            onClick={() => onToggle(recipe.id)}
          >
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <h4>{recipe.title}</h4>
              <p className="category">{recipe.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
