export interface Recipe {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;

  time: {
    prep: number;
    bake: number;
    rise?: number;
  };

  difficulty: string;
  servings: number;

  ingredients: string[] | { [key: string]: string[] };

  steps: string[];

  plannerInfo?: {
    canMakeAhead?: boolean;
    freezerFriendly?: boolean;
    restTime?: number;
  };
}
