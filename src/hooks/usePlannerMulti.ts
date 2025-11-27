import { useMemo } from "react";
import { recipes as allRecipes } from "../data/recipes";

export type Recipe = (typeof allRecipes)[number];

interface PlannerResult {
  totalTime: number; // total planerad tid i minuter
  plan: RecipePlan[];
}

interface RecipePlan {
  recipe: Recipe;
  startTime: number; // starttid i minuter
  endTime: number; // sluttid i minuter
}

/**
 * Hook för att planera flera recept samtidigt.
 * Tar hänsyn till ugnskapacitet (antal samtidiga plåtar).
 */
export const usePlannerMulti = (
  selectedRecipes: Recipe[],
  ovenSlots = 1
): PlannerResult => {
  return useMemo(() => {
    if (!selectedRecipes || selectedRecipes.length === 0) {
      return { totalTime: 0, plan: [] };
    }

    // Räkna total tid per recept
    const recipesWithTime = selectedRecipes.map((r) => ({
      recipe: r,
      totalTime: (r.time.prep || 0) + (r.time.bake || 0) + (r.time.rise || 0),
    }));

    // Sortera efter total tid, kortaste först (för enkel heuristik)
    recipesWithTime.sort((a, b) => a.totalTime - b.totalTime);

    // Planera med ugnskapacitet
    const plan: RecipePlan[] = [];
    let currentTime = 0;
    let ongoing: RecipePlan[] = [];

    recipesWithTime.forEach(({ recipe, totalTime }) => {
      // Ta bort färdiga recept från ongoing
      ongoing = ongoing.filter((r) => r.endTime > currentTime);

      // Om ugnslot finns ledig
      if (ongoing.length < ovenSlots) {
        const startTime = currentTime;
        const endTime = startTime + totalTime;
        plan.push({ recipe, startTime, endTime });
        ongoing.push({ recipe, startTime, endTime });
      } else {
        // Vänta tills en plats blir ledig
        const nextAvailable = Math.min(...ongoing.map((r) => r.endTime));
        const startTime = nextAvailable;
        const endTime = startTime + totalTime;
        plan.push({ recipe, startTime, endTime });
        ongoing.push({ recipe, startTime, endTime });
        currentTime = nextAvailable;
      }
    });

    const totalTime = Math.max(...plan.map((p) => p.endTime));

    return { totalTime, plan };
  }, [selectedRecipes, ovenSlots]);
};
