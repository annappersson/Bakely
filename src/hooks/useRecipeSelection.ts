import { useState, useMemo } from "react";
import { recipes as allRecipes } from "../data/recipes";
import { usePlannerMulti, type Recipe } from "./usePlannerMulti";

export const useRecipeSelection = (ovenSlots = 1) => {
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);

  const toggleRecipe = (id: string) => {
    setSelectedRecipeIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelectedRecipeIds([]);

  const selectedRecipeObjects = useMemo(
    () => allRecipes.filter((r) => selectedRecipeIds.includes(r.id)),
    [selectedRecipeIds]
  );

  // Använd din planerings-hook här
  const { totalTime, plan } = usePlannerMulti(selectedRecipeObjects, ovenSlots);

  return {
    selectedRecipeIds,
    selectedRecipeObjects,
    toggleRecipe,
    clearSelection,
    totalTime,
    plan,
  };
};
