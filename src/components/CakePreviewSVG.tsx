import React, { useMemo } from "react";
import "../assets/scss/CakePreviewSVG.scss";

export type LayerKind = "base" | "filling" | "frosting" | "decoration";

export type SVGLayer = {
  id: string;
  label: string;
  color: string;
  kind: LayerKind;
};

interface Props {
  layers: SVGLayer[];
  width?: number;
  showLabels?: boolean;
}

const CakePreviewSVG: React.FC<Props> = ({
  layers,
  width = 320,
  showLabels = false,
}) => {
  const stack = [...layers]; // bottom-first

  const layerHeights = useMemo(() => {
    return stack.map((l) => {
      switch (l.kind) {
        case "base":
          return 34;
        case "filling":
          return 18;
        case "frosting":
          return 26;
        case "decoration":
          return 12;
        default:
          return 20;
      }
    });
  }, [stack]);

  const totalLayerHeight = layerHeights.reduce((s, h) => s + h, 0);
  const topPadding = 18;
  const bottomPadding = 18;
  const svgHeight = totalLayerHeight + topPadding + bottomPadding;

  const maxWidth = width;

  const uniformWidth = Math.round(maxWidth * 0.88);
  const widths = stack.map(() => uniformWidth);

  let currentY = topPadding;
  const positions = layerHeights.map((h) => {
    const y = currentY;
    currentY += h;
    return y;
  });

  // FIX: JSX.Element → React.ReactNode
  const renderDecorations = (layer: SVGLayer, layerIndex: number) => {
    const decorations: React.ReactNode[] = [];
    const w = widths[layerIndex];
    const xOffset = (maxWidth - w) / 2;
    const y = positions[layerIndex];

    const seed = Array.from(layer.id).reduce(
      (s, ch) => s + ch.charCodeAt(0),
      0
    );

    for (let i = 0; i < 6; i++) {
      const rx = ((seed * (i + 7)) % (w - 24)) + 12;
      const ry = y + layerHeights[layerIndex] / 2 + (i % 2 === 0 ? -4 : 4);
      const cx = Math.round(xOffset + rx);
      const cy = Math.round(ry);
      const size = i % 3 === 0 ? 6 : 4;

      if ((seed + i) % 4 === 0) {
        const heartColor = lighten(layer.color, i * -6);
        decorations.push(
          <g
            key={`heart-${layer.id}-${i}`}
            transform={`translate(${cx - size}, ${cy - size}) scale(${
              size / 10
            })`}
          >
            <path
              d="M5 3 C5 1.5 3.8 0.6 2.5 1 C1.2 0.6 0 1.5 0 3 C0 5.2 5 8.3 5 8.3 C5 8.3 10 5.2 10 3 C10 1.5 8.8 0.6 7.5 1 C6.2 0.6 5 1.5 5 3 Z"
              fill={heartColor}
            />
          </g>
        );
      } else {
        const dotColor = darken(layer.color, i * 6);
        decorations.push(
          <circle
            key={`dot-${layer.id}-${i}`}
            cx={cx}
            cy={cy}
            r={size / 2}
            fill={dotColor}
            opacity={0.95}
          />
        );
      }
    }

    return decorations;
  };

  function hexToRgb(hex: string) {
    const v = hex.replace("#", "");
    const bigint = parseInt(
      v.length === 3
        ? v
            .split("")
            .map((c) => c + c)
            .join("")
        : v,
      16
    );
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  }
  function rgbToHex(r: number, g: number, b: number) {
    return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
  }
  function lighten(hex: string, amt = 10) {
    try {
      const { r, g, b } = hexToRgb(hex);
      return rgbToHex(
        Math.min(255, r + amt),
        Math.min(255, g + amt),
        Math.min(255, b + amt)
      );
    } catch {
      return hex;
    }
  }
  function darken(hex: string, amt = 10) {
    try {
      const { r, g, b } = hexToRgb(hex);
      return rgbToHex(
        Math.max(0, r - amt),
        Math.max(0, g - amt),
        Math.max(0, b - amt)
      );
    } catch {
      return hex;
    }
  }

  if (stack.length === 0) {
    return (
      <div className="cake-preview-svg no-selection" style={{ width }}>
        <svg viewBox={`0 0 ${width} 80`} width="100%" height="120">
          <rect
            x="10"
            y="14"
            width={width - 20}
            height="44"
            rx="10"
            fill="#fff8f5"
            stroke="#ffe9dc"
          />
          <text x="50%" y="46" textAnchor="middle" fill="#b0b0b0" fontSize="14">
            Välj en botten för att börja
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="cake-preview-svg" style={{ width }}>
      <svg viewBox={`0 0 ${width} ${svgHeight}`} width="100%" height="100%">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="10"
              floodColor="#000"
              floodOpacity="0.08"
            />
          </filter>
          <linearGradient id="gloss" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ellipse
          cx={width / 2}
          cy={svgHeight - 12}
          rx={Math.round(width * 0.38)}
          ry={8}
          fill="#000"
          opacity={0.06}
        />

        {stack.map((layer, idx) => {
          const w = widths[idx];
          const h = layerHeights[idx];
          const x = (maxWidth - w) / 2;
          const y = positions[idx];
          const rx = Math.max(8, Math.round(h / 2));
          const border = darken(layer.color, 18);

          return (
            <g
              key={layer.id + "-" + idx}
              filter={idx === 0 ? "url(#shadow)" : undefined}
            >
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx={rx}
                ry={rx}
                fill={layer.color}
                stroke={border}
              />
              <rect
                x={x}
                y={y}
                width={w}
                height={Math.round(h * 0.5)}
                rx={rx}
                ry={rx}
                fill="url(#gloss)"
                opacity={0.42}
              />
              <rect
                x={x + 1}
                y={y + h - 6}
                width={w - 2}
                height={4}
                rx={rx}
                ry={rx}
                fill="rgba(0,0,0,0.04)"
              />

              {showLabels && (
                <text
                  x={x + w + 8}
                  y={y + h / 2 + 4}
                  fontSize={12}
                  fill="#444"
                  style={{ fontWeight: 600 }}
                >
                  {layer.label}
                </text>
              )}

              {(layer.kind === "decoration" || layer.kind === "frosting") &&
                renderDecorations(layer, idx)}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CakePreviewSVG;
