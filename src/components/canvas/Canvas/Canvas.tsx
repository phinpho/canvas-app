import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage as KonvaStage } from "konva/lib/Stage";
import { type ComponentProps, type FC, useCallback, useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import { GridDots } from "../GridDots/GridDots.js";

export type CanvasProps = ComponentProps<typeof Stage> & {
  scaleBy?: number;
};

export const Canvas: FC<CanvasProps> = ({ children, scaleBy = 1.05, ...props }) => {
  const stageRef = useRef<KonvaStage>(null);
  const [dimention, setDimention] = useState<{ width: number; height: number }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleWheel = useCallback(
    (e: KonvaEventObject<WheelEvent>) => {
      e.evt.preventDefault();
      const stage = stageRef.current;
      if (!stage) return;
      const oldScale = stage.scaleX();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;
      const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };
      let direction = e.evt.deltaY > 0 ? -1 : 1;
      if (e.evt.ctrlKey) {
        direction = -direction;
      }
      let newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      newScale = Math.max(0.1, Math.min(10, newScale));
      stage.scale({ x: newScale, y: newScale });
      stage.position({
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      });
    },
    [scaleBy],
  );

  const onResizeHandler = useCallback(() => {
    setDimention({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  useEffect(() => {
    globalThis.addEventListener("resize", onResizeHandler);

    return () => {
      globalThis.removeEventListener("resize", onResizeHandler);
    };
  }, [onResizeHandler]);

  return (
    <Stage
      {...props}
      draggable
      height={dimention.height}
      onWheel={handleWheel}
      ref={stageRef}
      width={dimention.width}
    >
      <Layer>
        <GridDots />
        {children}
      </Layer>
    </Stage>
  );
};

Canvas.displayName = "Canvas";
