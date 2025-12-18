import { cakeBases } from "../data/cakeBases";
import { fillings } from "../data/fillings";
import type { SVGLayer } from "../components/CakePreviewSVG";
import type { BuiltCake } from "../pages/ProfilePage";

export function buildPreviewLayers(cake: BuiltCake): SVGLayer[] {
  const res: SVGLayer[] = [];
  if (!cake.base) return res;

  const baseObj = cakeBases.find((b) => b.id === cake.base)!;
  if (!baseObj) return res;
  const selectedFillings = cake.fillings || [];

  for (let i = 0; i < cake.layers; i++) {
    res.push({
      id: `${cake.base}-${i}`,
      label: baseObj.name,
      color: baseObj.color,
      kind: "base",
    });

    if (selectedFillings.length > 0) {
      const fId = selectedFillings[i % selectedFillings.length];
      const fObj = fillings.find((f) => f.id === fId)!;
      if (!fObj) continue;
      res.push({
        id: `${fId}-${i}`,
        label: fObj.name,
        color: fObj.color,
        kind: "filling",
      });
    }
  }

  if (cake.frosting) {
    res.push({
      id: `frosting-${cake.frosting}`,
      label: cake.frosting,
      color: "#FFF4F0",
      kind: "frosting",
    });
  }

  return res;
}
