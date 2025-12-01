export type Filling = {
  id: string;
  name: string;
  color: string;
  description?: string;

  recommendedWith?: string[];
};

export const fillings: Filling[] = [
  {
    id: "strawberry",
    name: "Jordgubb",
    color: "#F7B3C0",
    recommendedWith: ["vanilla", "redvelvet"],
  },
  {
    id: "blueberry",
    name: "Blåbär",
    color: "#A6C3FF",
    recommendedWith: ["vanilla", "matcha"],
  },
  {
    id: "lemon",
    name: "Citron",
    color: "#FFF1A8",
    recommendedWith: ["vanilla", "carrot"],
  },
  {
    id: "cream",
    name: "Grädde",
    color: "#FFF9F0",
    recommendedWith: ["vanilla", "chocolate"],
  },
  {
    id: "caramel",
    name: "Karamell",
    color: "#F3C47B",
    recommendedWith: ["chocolate", "carrot"],
  },
  {
    id: "creamcheese",
    name: "Cream Cheese",
    color: "#FFF4EA",
    recommendedWith: ["carrot", "redvelvet"],
  },
];
