import { useState, useMemo } from "react";
import { cakeBases } from "../data/cakeBases";
import { fillings } from "../data/fillings";

export type BaseId = string;
export type FillingId = string;
export type FrostingId = string;

export function useCakeBuilder() {
  const [base, setBase] = useState<BaseId | null>(null);
  const [fillingsSelected, setFillings] = useState<FillingId[]>([]);
  const [frosting, setFrosting] = useState<FrostingId | null>(null);
  const [layers, setLayers] = useState<number>(1);
  const [decorations, setDecorations] = useState<string[]>([]);

  const toggleFilling = (id: string) => {
    setFillings((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const previewLayers = useMemo(() => {
    const res: {
      id: string;
      label: string;
      color: string;
      kind: "base" | "filling" | "frosting" | "decoration";
    }[] = [];
    if (!base) return res;

    // For simplicity: for N layers place base, then filling (cyclic through selected fillings) repeating
    const baseObj = cakeBases.find((b) => b.id === base)!;
    const selectedFillings =
      fillingsSelected.length > 0 ? fillingsSelected : [];

    for (let i = 0; i < layers; i++) {
      res.push({
        id: `${base}-${i}`,
        label: baseObj.name,
        color: baseObj.color,
        kind: "base",
      });
      if (selectedFillings.length > 0) {
        const fId = selectedFillings[i % selectedFillings.length];
        const fObj = fillings.find((f) => f.id === fId)!;
        res.push({
          id: `${fId}-${i}`,
          label: fObj.name,
          color: fObj.color,
          kind: "filling",
        });
      }
    }

    if (frosting) {
      // treat frosting as a top layer (use some simple mapping)
      const frostLabel = frosting;
      const frostColor = "#FFF4F0";
      res.push({
        id: `frosting-${frosting}`,
        label: frostLabel,
        color: frostColor,
        kind: "frosting",
      });
    }

    // decorations ignored for preview here (could be icons)
    return res;
  }, [base, fillingsSelected, frosting, layers]);

  // save combos to localStorage
  const saveCombo = (name: string) => {
    const combos = JSON.parse(localStorage.getItem("saved_cakes") || "[]");
    combos.push({
      id: Date.now(),
      name,
      base,
      fillingsSelected,
      frosting,
      layers,
      decorations,
    });
    localStorage.setItem("saved_cakes", JSON.stringify(combos));
  };

  const clear = () => {
    setBase(null);
    setFillings([]);
    setFrosting(null);
    setLayers(1);
    setDecorations([]);
  };

  const loadSaved = () => {
    return JSON.parse(localStorage.getItem("saved_cakes") || "[]");
  };

  return {
    base,
    setBase,
    fillingsSelected,
    toggleFilling,
    setFillings,
    frosting,
    setFrosting,
    layers,
    setLayers,
    decorations,
    setDecorations,
    previewLayers,
    saveCombo,
    clear,
    loadSaved,
  };
}
