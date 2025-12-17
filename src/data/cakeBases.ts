// enkel lista över bottnar
export type CakeBase = {
  id: string;
  name: string;
  color: string;
  description?: string;
  image?: string;
};

export const cakeBases: CakeBase[] = [
  {
    id: "vanilj",
    name: "Vaniljbotten",
    color: "#F7E7B6",
    description: "Lätt och fluffig vaniljbotten",
  },
  {
    id: "chocolate",
    name: "Choklad",
    color: "#6B3F2E",
    description: "Rik choklad botten",
  },
  {
    id: "redvelvet",
    name: "Red Velvet",
    color: "#C84B5B",
    description: "Mjuk redvelvet",
  },
  {
    id: "carrot",
    name: "Morots kaka",
    color: "#E6A86A",
    description: "Kryddad morotskaka",
  },
  {
    id: "matcha",
    name: "Matcha",
    color: "#98C47A",
    description: "Smakrik matchasmak",
  },
];
