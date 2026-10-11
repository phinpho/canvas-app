import { cn } from "cn";
import { type ComponentPropsWithoutRef, type FC, useEffect, useRef } from "react";
import type { MODEL_SAMPLES } from "../../../constants/modelSamples.js";
import { useCurrentId } from "../../../hooks/useCurrentId.js";
import { createScene } from "../../../utils/createScene.js";

export type SceneProps = ComponentPropsWithoutRef<"canvas"> & {
  modelSample?: (typeof MODEL_SAMPLES)[number]["value"];
};

export const Scene: FC<SceneProps> = ({ id, className, modelSample = "sphere", ...props }) => {
  const currentId = useCurrentId(id);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      return createScene(canvasRef.current, modelSample);
    }
    return () => {};
  }, [modelSample]);

  return (
    <canvas
      className={cn("w-full h-full bg-background touch-none", className)}
      id={currentId}
      {...props}
      ref={canvasRef}
    ></canvas>
  );
};

Scene.displayName = "Scene";
