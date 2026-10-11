import type { Group } from "konva/lib/Group";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import type { Label } from "konva/lib/shapes/Label";
import type { Rect } from "konva/lib/shapes/Rect";
import type { Text } from "konva/lib/shapes/Text";
import type { Transformer } from "konva/lib/shapes/Transformer";
import {
  type ComponentProps,
  type Dispatch,
  type FC,
  type RefObject,
  type SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  Group as GroupElement,
  Label as LabelElement,
  Rect as RectElement,
  Text as TextElement,
  Transformer as TransformerElement,
} from "react-konva";
import { Html } from "react-konva-utils";
import type { AuthUserProps } from "../../../contexts/AuthContext.js";
import { useCurrentId } from "../../../hooks/useCurrentId.js";

export type BoxProps = Omit<ComponentProps<"div">, "onDragStart" | "onDragEnd" | "onDragMove"> & {
  x?: number;
  y?: number;
  padding?: number;
  width?: number;
  height?: number;
  draggable?: boolean;
  label?: string;
  labelPadding?: number;
  labelHeight?: number;
  editingBy?: string | undefined | null;
  user?: AuthUserProps;
  documentId?: string;
  transformerRef?: RefObject<Transformer | null>;
  onDragStart?: ComponentProps<typeof RectElement>["onDragStart"];
  onDragMove?: ComponentProps<typeof RectElement>["onDragMove"];
  onDragEnd?: ComponentProps<typeof RectElement>["onDragEnd"];
  onTransformStart?: ComponentProps<typeof RectElement>["onTransformStart"];
  onTransform?: ComponentProps<typeof RectElement>["onTransform"];
  onTransformEnd?: ComponentProps<typeof RectElement>["onTransformEnd"];
  rectRef?: RefObject<Rect | null>;
  selected?: boolean;
  setSelected?: Dispatch<SetStateAction<boolean>>;
  labelRef?: RefObject<Label | null>;
  textRef?: RefObject<Text | null>;
};

export const Box: FC<BoxProps> = ({
  id,
  x = 10,
  y = 10,
  width = 100,
  height = 100,
  padding = 3,
  draggable = true,
  label,
  labelPadding = 2,
  labelHeight = 16,
  editingBy,
  documentId,
  user,
  transformerRef,
  onTransformStart,
  onTransform,
  onTransformEnd,
  onDragStart,
  onDragMove,
  onDragEnd,
  rectRef,
  selected = false,
  setSelected,
  labelRef,
  textRef,
  ...props
}) => {
  const currentId = useCurrentId(id);
  const groupRef = useRef<Group>(null);

  const [divDimensions, setDivDimensions] = useState({
    height: height + padding / 2 - (labelHeight + labelPadding) - 2,
    width: width + padding / 2 - 1,
  });

  const onRectTransformHandler = useCallback(
    (e: KonvaEventObject<Event, Stage>) => {
      if (groupRef.current && rectRef?.current) {
        const { x, y, width, height } = rectRef.current.getClientRect({
          relativeTo: rectRef.current.getStage() ?? undefined,
          skipTransform: false,
        });

        setDivDimensions({
          height: height - (labelHeight + labelPadding) - 2,
          width: width - 1,
        });

        groupRef.current.setAttrs({
          x,
          y,
        });
      }
      onTransform?.(e);
    },
    [labelHeight, labelPadding, rectRef, onTransform],
  );

  const onRectDragMoveHandler = useCallback(
    (e: KonvaEventObject<DragEvent, Stage>) => {
      if (rectRef?.current && groupRef.current) {
        const { x, y } = rectRef.current.position();
        groupRef.current.position({ x, y });
      }
      onDragMove?.(e);
    },
    [rectRef, onDragMove],
  );
  const onGroupDragMoveHandler = useCallback(
    (_e: KonvaEventObject<DragEvent, Stage>) => {
      if (groupRef.current && rectRef?.current) {
        const { x, y } = groupRef.current.position();
        rectRef.current.position({ x, y });
      }
    },
    [rectRef],
  );

  return (
    <>
      <RectElement
        draggable={draggable}
        fill="#EEE"
        height={height}
        id={currentId}
        onDragEnd={onDragEnd}
        onDragMove={onRectDragMoveHandler}
        onDragStart={onDragStart}
        onTransform={onRectTransformHandler}
        onTransformEnd={onTransformEnd}
        onTransformStart={onTransformStart}
        ref={rectRef}
        stroke="#DDD"
        strokeScaleEnabled={false}
        width={width}
        x={x}
        y={y}
      />
      <GroupElement
        draggable={draggable}
        onDragMove={onGroupDragMoveHandler}
        ref={groupRef}
        x={x}
        y={y}
      >
        <LabelElement opacity={0.75} ref={labelRef} x={2} y={2}>
          <TextElement
            ellipsis
            fill="gray"
            fontSize={labelHeight - 2}
            padding={labelPadding}
            ref={textRef}
            text={label}
            width={width - padding}
            wrap="none"
          />
        </LabelElement>
        <Html
          deriveVisibility
          divProps={{
            style: {
              pointerEvents: "none",
            },
          }}
          groupProps={{
            y: labelHeight + labelPadding + padding / 2,
          }}
        >
          <div
            {...props}
            style={{
              height: `${divDimensions.height}px`,
              pointerEvents: "auto",
              width: `${divDimensions.width}px`,
            }}
          />
        </Html>
      </GroupElement>
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

Box.displayName = "CanvasBox";
