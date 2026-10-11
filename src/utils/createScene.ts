import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import type { MODEL_SAMPLES } from "../constants/modelSamples.js";

export const createScene = (
  canvas: HTMLCanvasElement,
  modelSample: (typeof MODEL_SAMPLES)[number]["value"] = "sphere",
) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  const camera = new ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new Vector3(0, 0, 0),
  );
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0));

  const mesh =
    modelSample === "sphere"
      ? MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene)
      : modelSample === "cube"
        ? MeshBuilder.CreateBox("box", { size: 2 }, scene)
        : MeshBuilder.CreateCylinder(
            "cylinder",
            { diameter: 2, height: 2, tessellation: 32 },
            scene,
          );

  engine.runRenderLoop(() => {
    scene.render();
  });

  const onResizeHandler = () => {
    engine.resize();
  };

  const resizeObserver = new ResizeObserver(() => {
    onResizeHandler();
  });

  if (canvas.parentElement) {
    resizeObserver.observe(canvas.parentElement);
  }

  return () => {
    engine.stopRenderLoop();
    camera.dispose();
    light.dispose();
    mesh.dispose();
    scene.dispose();
    engine.dispose();
    resizeObserver.disconnect();
  };
};
