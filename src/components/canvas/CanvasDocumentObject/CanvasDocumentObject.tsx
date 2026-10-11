"use client";

import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import type { Label } from "konva/lib/shapes/Label";
import type { Rect } from "konva/lib/shapes/Rect";
import type { Text } from "konva/lib/shapes/Text";
import type { Transformer } from "konva/lib/shapes/Transformer";
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../../../hooks/useApp.js";
import { useAuth } from "../../../hooks/useAuth.js";
import { useDocumentObject } from "../../../hooks/useDocumentObject.js";
import { Box } from "../Box/Box.js";
import { Card } from "../Card/Card.js";
import { Scene } from "../Scene/Scene.js";

export type CanvasDocumentObjectProps = {
  documentId: string;
  id: string;
  draggable?: boolean;
};

export const CanvasDocumentObject: FC<CanvasDocumentObjectProps> = ({
  documentId,
  id,
  draggable = true,
}) => {
  const { workerRef } = useApp();
  const { user } = useAuth();
  const documentObject = useDocumentObject(id, documentId);
  const [selected, setSelected] = useState<boolean>(false);
  const rectRef = useRef<Rect>(null);
  const transformerRef = useRef<Transformer>(null);
  const labelRef = useRef<Label>(null);
  const textRef = useRef<Text>(null);

  const [orientationDataState, setOrientationDataState] = useState<{
    x: number | null;
    y: number | null;
    width: number | null;
    height: number | null;
  }>({
    height: null,
    width: null,
    x: null,
    y: null,
  });

  const draggableEnabled = useMemo(() => {
    if (!user) return false;
    if (!draggable) return false;
    if (!documentObject) return false;
    if (documentObject.editingBy !== undefined && documentObject.editingBy !== null) {
      if (documentObject.editingBy !== user.username) return false;
    }
    return true;
  }, [user, draggable, documentObject]);

  const onDragStartHandler = useCallback(
    async (_e: KonvaEventObject<DragEvent, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      workerRef.current.postMessage({
        payload: {
          documentId,
          editingBy: user?.username,
          id,
        },
        type: "updateDocumentObject",
      });
    },
    [documentId, id, user, workerRef],
  );

  const onDragEndHandler = useCallback(
    async (_e: KonvaEventObject<DragEvent, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      const position = rectRef?.current?.getPosition();
      if (position) {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: user?.username,
            id,
            positionX: position.x,
            positionY: position.y,
          },
          type: "updateDocumentObject",
        });
      } else {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: user?.username,
            id,
          },
          type: "updateDocumentObject",
        });
      }
    },
    [user, documentId, id, workerRef],
  );

  const onDragMoveHandler = useCallback(
    (_e: KonvaEventObject<DragEvent, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      const position = rectRef?.current?.getPosition();
      if (position) {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: user?.username,
            id,
            positionX: position.x,
            positionY: position.y,
          },
          type: "updateDocumentObject",
        });
      } else {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: user?.username,
            id,
          },
          type: "updateDocumentObject",
        });
      }
    },
    [documentId, id, user, workerRef],
  );

  const onTransformHandler = useCallback(
    (_e: KonvaEventObject<Event, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      if (!(draggable || rectRef?.current)) return;
      const position = rectRef?.current?.getPosition();
      const clientRect = rectRef?.current?.getClientRect({
        relativeTo: rectRef.current.getStage() ?? undefined,
        skipShadow: true,
        skipStroke: true,
      });
      if (position && clientRect) {
        workerRef.current.postMessage({
          payload: {
            dimensionHeight: clientRect.height,
            dimensionWidth: clientRect.width,
            documentId,
            editingBy: user?.username,
            id,
            positionX: position.x,
            positionY: position.y,
          },
          type: "updateDocumentObject",
        });
      } else {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: user?.username,
            id,
          },
          type: "updateDocumentObject",
        });
      }
    },
    [documentId, id, user, workerRef, draggable],
  );

  const onTransformStartHandler = useCallback(
    async (_e: KonvaEventObject<Event, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      workerRef.current.postMessage({
        payload: {
          documentId,
          editingBy: user?.username,
          id,
        },
        type: "updateDocumentObject",
      });
    },
    [documentId, id, user, workerRef],
  );

  const onTransformEndHandler = useCallback(
    async (_e: KonvaEventObject<Event, Stage>) => {
      if (!(user?.username && documentId && workerRef?.current)) return;
      const position = rectRef?.current?.getPosition();
      const clientRect = rectRef?.current?.getClientRect({
        relativeTo: rectRef?.current.getStage() ?? undefined,
        skipShadow: true,
        skipStroke: true,
      });
      if (position && clientRect) {
        workerRef.current.postMessage({
          payload: {
            dimensionHeight: clientRect.height,
            dimensionWidth: clientRect.width,
            documentId,
            editingBy: null,
            id,
            positionX: position.x,
            positionY: position.y,
          },
          type: "updateDocumentObject",
        });
      } else {
        workerRef.current.postMessage({
          payload: {
            documentId,
            editingBy: null,
            id,
          },
          type: "updateDocumentObject",
        });
      }
    },
    [id, documentId, user, workerRef],
  );

  const onRectClickHandler = useCallback(
    (e: KonvaEventObject<PointerEvent, Stage>) => {
      e.cancelBubble = true;
      console.log("DEBUG: onRectClickHandler", e.target, rectRef.current, textRef.current);
      if (draggable) {
        console.log("DEBUG: onRectClickHandler - draggable is true");
        if (e.target === rectRef.current || e.target === textRef.current) {
          console.log("DEBUG: onRectClickHandler - target is rectRef or textRef");
          setSelected((prev) => !prev);
        } else {
          console.log("DEBUG: onRectClickHandler - target is not rectRef or textRef");
          setSelected(false);
        }
      }
    },
    [draggable],
  );

  useEffect(() => {
    if (
      documentObject?.dimensionHeight !== undefined &&
      documentObject?.dimensionWidth !== undefined &&
      documentObject?.positionX !== undefined &&
      documentObject?.positionY !== undefined
    ) {
      if (
        orientationDataState.x === null ||
        orientationDataState.y === null ||
        orientationDataState.width === null ||
        orientationDataState === null
      ) {
        setOrientationDataState(({ x, y, width, height }) => ({
          height: height !== null ? height : documentObject.dimensionHeight,
          width: width !== null ? width : documentObject.dimensionWidth,
          x: x !== null ? x : documentObject.positionX,
          y: y !== null ? y : documentObject.positionY,
        }));
      }
    }
    if (draggable) {
      if (rectRef.current) {
        const stage = rectRef.current.getStage();
        if (stage) {
          stage.on("click", onRectClickHandler);

          return () => {
            stage.off("click", onRectClickHandler);
          };
        }
      }
    }
    return () => {
      if (rectRef.current) {
        const stage = rectRef.current.getStage();
        if (stage) {
          stage.off("click", onRectClickHandler);
        }
      }
    };
  }, [
    draggable,
    onRectClickHandler,
    documentObject?.dimensionHeight,
    documentObject?.dimensionWidth,
    documentObject?.positionX,
    documentObject?.positionY,
    orientationDataState,
  ]);

  useEffect(() => {
    if (draggable) {
      if (selected && transformerRef.current && rectRef?.current) {
        transformerRef.current.nodes([rectRef.current]);
      } else if (!selected && transformerRef.current) {
        transformerRef.current.nodes([]);
      }
    } else if (transformerRef?.current) {
      transformerRef.current.nodes([]);
    }
  }, [draggable, selected]);

  if (!documentObject) return null;
  if (orientationDataState.x === null || orientationDataState.y === null) return null;
  if (orientationDataState.width === null || orientationDataState.height === null) return null;

  switch (documentObject.type) {
    case "scene3d":
      return (
        <Box
          draggable={draggableEnabled}
          height={orientationDataState.height}
          id={documentObject.id}
          label={documentObject.name ?? documentObject.modelSample ?? "Scene 3D"}
          labelRef={labelRef}
          onDragEnd={onDragEndHandler}
          onDragMove={onDragMoveHandler}
          onDragStart={onDragStartHandler}
          onTransform={onTransformHandler}
          onTransformEnd={onTransformEndHandler}
          onTransformStart={onTransformStartHandler}
          rectRef={rectRef}
          selected={selected}
          setSelected={setSelected}
          textRef={textRef}
          transformerRef={transformerRef}
          width={orientationDataState.width}
          x={orientationDataState.x}
          y={orientationDataState.y}
        >
          <Scene modelSample={documentObject.modelSample} />
        </Box>
      );
    case "card":
      return (
        <Card
          draggable={draggableEnabled}
          height={orientationDataState.height}
          id={documentObject.id}
          label={documentObject.name ?? "Card"}
          labelRef={labelRef}
          onDragEnd={onDragEndHandler}
          onDragMove={onDragMoveHandler}
          onDragStart={onDragStartHandler}
          onTransform={onTransformHandler}
          onTransformEnd={onTransformEndHandler}
          onTransformStart={onTransformStartHandler}
          rectRef={rectRef}
          selected={selected}
          setSelected={setSelected}
          textRef={textRef}
          transformerRef={transformerRef}
          width={orientationDataState.width}
          x={orientationDataState.x}
          y={orientationDataState.y}
        />
      );
    default:
      return null;
  }
};

CanvasDocumentObject.displayName = "CanvasDocumentObject";
