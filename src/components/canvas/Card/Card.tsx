"use client";

import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import type { Label } from "konva/lib/shapes/Label";
import type { Rect } from "konva/lib/shapes/Rect";
import type { Text } from "konva/lib/shapes/Text";
import type { Transformer } from "konva/lib/shapes/Transformer";
import type { ComponentProps, Dispatch, FC, RefObject, SetStateAction } from "react";
import { useCallback } from "react";
import {
  Label as LabelElement,
  Rect as RectElement,
  Text as TextElement,
  Transformer as TransformerElement,
} from "react-konva";
import { useCurrentId } from "../../../hooks/useCurrentId.js";

export type CardProps = ComponentProps<typeof RectElement> & {
  label?: string;
  transformerRef?: RefObject<Transformer | null>;
  rectRef?: RefObject<Rect | null>;
  selected?: boolean;
  setSelected?: Dispatch<SetStateAction<boolean>>;
  labelRef?: RefObject<Label | null>;
  textRef?: RefObject<Text | null>;
};

export const Card: FC<CardProps> = ({
  id,
  documentId,
  draggable = true,
  width,
  height,
  x,
  y,
  label,
  editingBy,
  user,
  transformerRef,
  onDragStart,
  onDragMove,
  onDragEnd,
  onTransform,
  onTransformStart,
  onTransformEnd,
  rectRef,
  selected = false,
  setSelected,
  labelRef,
  textRef,
  ...props
}) => {
  const currentId = useCurrentId(id);

  const onRectDragMoveHandler = useCallback(
    (e: KonvaEventObject<DragEvent, Stage>) => {
      if (!(draggable || rectRef)) return;

      const label = labelRef?.current;
      const position = rectRef?.current?.getPosition();

      if (label && position) {
        label.setPosition(position);
      }
      onDragMove?.(e);
    },
    [draggable, onDragMove, rectRef, labelRef],
  );

  const onRectDragEndHandler = useCallback(
    (e: KonvaEventObject<DragEvent, Stage>) => {
      const label = labelRef?.current;
      const position = rectRef?.current?.getPosition();

      if (label && position) {
        label.setPosition(position);
      }
      onDragEnd?.(e);
    },
    [onDragEnd, rectRef, labelRef],
  );

  const onRectTransformHandler = useCallback(
    (e: KonvaEventObject<Event, Stage>) => {
      if (!(draggable || rectRef?.current)) return;
      const position = rectRef?.current?.getPosition();
      const clientRect = rectRef?.current?.getClientRect({
        relativeTo: rectRef.current.getStage() ?? undefined,
        skipShadow: true,
        skipStroke: true,
      });
      if (position && clientRect) {
        const label = labelRef?.current;
        if (label) {
          label.setSize({
            height: clientRect.height,
            width: clientRect.width,
          });
          label.setPosition(position);
        }
      }
      onTransform?.(e);
    },
    [draggable, onTransform, rectRef, labelRef],
  );

  const onRectTransformEndHandler = useCallback(
    (e: KonvaEventObject<Event, Stage>) => {
      const position = rectRef?.current?.getPosition();
      const clientRect = rectRef?.current?.getClientRect({
        relativeTo: rectRef?.current.getStage() ?? undefined,
        skipShadow: true,
        skipStroke: true,
      });
      if (position && clientRect) {
        labelRef?.current?.setSize({
          height: clientRect.height,
          width: clientRect.width,
        });
        labelRef?.current?.setPosition(position);
      }
      onTransformEnd?.(e);
    },
    [onTransformEnd, rectRef, labelRef],
  );

  return (
    <>
      <RectElement
        {...props}
        draggable={draggable}
        fill="#EEE"
        height={height}
        id={currentId}
        onDragEnd={onRectDragEndHandler}
        onDragMove={onRectDragMoveHandler}
        onDragStart={onDragStart}
        onTransform={onRectTransformHandler}
        onTransformEnd={onRectTransformEndHandler}
        onTransformStart={onTransformStart}
        ref={rectRef}
        stroke="#DDD"
        strokeScaleEnabled={false}
        width={width}
        x={x}
        y={y}
      />
      <LabelElement height={height} ref={labelRef} width={width} x={x} y={y}>
        <TextElement ref={textRef} text={label} />
      </LabelElement>
      <TransformerElement
        anchorCornerRadius={50}
        anchorFill="#fff"
        anchorSize={10}
        anchorStroke="#000"
        anchorStrokeWidth={1}
        borderStroke="#000"
        borderStrokeWidth={1}
        ignoreStroke={true}
        ref={transformerRef}
        rotateEnabled={false}
      />
    </>
  );
};

Card.displayName = "CanvasCard";
