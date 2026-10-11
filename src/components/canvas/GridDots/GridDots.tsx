import type { FC } from "react";
import { Circle } from "react-konva";

export type GridDotsProps = {
  dotsName?: string;
  dotsFill?: string | CanvasGradient;
};

// Pre-generate grid dots
const gridDots: { x: number; y: number }[] = [];
const spacing = 40;
const range = 2000;
for (let gx = -range; gx <= range; gx += spacing) {
  for (let gy = -range; gy <= range; gy += spacing) {
    gridDots.push({ x: gx, y: gy });
  }
}

export const GridDots: FC<GridDotsProps> = ({ dotsName = "grid-dots", dotsFill = "#CCCCCC" }) => {
  return (
    <>
      {gridDots.map((d, i) => (
        <Circle
          fill={dotsFill}
          key={`${dotsName}-${i}`}
          listening={false}
          radius={1}
          x={d.x}
          y={d.y}
        />
      ))}
    </>
  );
};

GridDots.displayName = "GridDots";
