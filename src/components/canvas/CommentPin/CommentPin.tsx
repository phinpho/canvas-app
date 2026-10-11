"use client";

import { Animation } from "konva/lib/Animation";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Stage } from "konva/lib/Stage";
import type { Circle } from "konva/lib/shapes/Circle";
import {
  type ComponentPropsWithoutRef,
  type FC,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Circle as CircleElement } from "react-konva";
import { useComments } from "../../../hooks/useComments.js";
import type {
  DocumentComment,
  DocumentCommentFields,
} from "../../../resources/database/DocumentComment.js";

export type CommentPinProps = Omit<
  ComponentPropsWithoutRef<typeof CircleElement>,
  "draggable" | "onMouseOver" | "onMouseOut"
> & {
  documentComment: DocumentComment | DocumentCommentFields;
  expandedRadius?: number;
};

export const CommentPin: FC<CommentPinProps> = ({
  x,
  y,
  radius = 5,
  expandedRadius = 10,
  fill = "green",
  stroke = "black",
  strokeWidth = 1,
  documentComment,
  ...props
}) => {
  const { commentRefs, showCommentPopover, hideCommentPopover } = useComments();
  const commentRef = useMemo(() => {
    return commentRefs[documentComment.id];
  }, [commentRefs, documentComment.id]);

  const circleRef = useRef<Circle>(null);
  const animationExpandRef = useRef<Animation | null>(null);
  const animationShrinkRef = useRef<Animation | null>(null);

  useLayoutEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      animationExpandRef.current = new Animation((frame) => {
        animationShrinkRef.current?.stop();
        const time = frame.time;
        if (circle) {
          const currentRadius = circle.radius();
          const newRadius = currentRadius + Math.sin(time / 1000) * 2;
          if (newRadius < expandedRadius) {
            circle.radius(newRadius);
          } else {
            circle.radius(expandedRadius);
            animationExpandRef.current?.stop();
          }
        }
      }, circle.getLayer());

      animationShrinkRef.current = new Animation((frame) => {
        animationExpandRef.current?.stop();
        const time = frame.time;
        if (circle) {
          const currentRadius = circle.radius();
          const newRadius = currentRadius - Math.sin(time / 1000) * 2;
          if (newRadius > radius) {
            circle.radius(newRadius);
          } else {
            circle.radius(radius);
            animationShrinkRef.current?.stop();
          }
        }
      }, circle.getLayer());
    }
    return () => {
      animationExpandRef.current?.stop();
      animationShrinkRef.current?.stop();

      circleRef.current?.radius(radius);

      animationExpandRef.current = null;
      animationShrinkRef.current = null;
    };
  }, [expandedRadius, radius]);

  const updateCommentBoxPosition = useCallback(
    (e: KonvaEventObject<WheelEvent | DragEvent, Stage>) => {
      const circle = circleRef.current;
      if (!circle) return;

      const stage = circle.getStage();

      if (!stage) return;
      if (e.target !== stage) return;

      const position = circle.getAbsolutePosition();
      if (commentRef?.current) {
        commentRef.current.style.setProperty("top", `${position.y}px`);
        commentRef.current.style.setProperty("left", `${position.x}px`);
      }
    },
    [commentRef],
  );

  useLayoutEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const stage = circle.getStage();
      if (stage) {
        stage.on("wheel", updateCommentBoxPosition);
        stage.on("dragmove", updateCommentBoxPosition);
        return () => {
          stage.off("wheel", updateCommentBoxPosition);
          stage.off("dragmove", updateCommentBoxPosition);
        };
      }
    }
    return () => {};
  }, [updateCommentBoxPosition]);

  const handleMouseOver = useCallback((e: KonvaEventObject<MouseEvent, Stage>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "pointer";
    }
    animationShrinkRef.current?.stop();
    animationExpandRef.current?.start();
  }, []);

  const handleMouseOut = useCallback((e: KonvaEventObject<MouseEvent, Stage>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "default";
    }
    animationExpandRef.current?.stop();
    animationShrinkRef.current?.start();
  }, []);

  const onClickHandler = useCallback(() => {
    if (circleRef.current) {
      const commentBoxElement = commentRef?.current;
      const position = circleRef.current.getAbsolutePosition();
      if (commentBoxElement) {
        if (commentBoxElement.checkVisibility()) {
          hideCommentPopover(documentComment.id);
        } else {
          showCommentPopover(documentComment.id);
          commentBoxElement.style.setProperty("top", `${position.y}px`);
          commentBoxElement.style.setProperty("left", `${position.x}px`);
        }
      }
    }
  }, [commentRef, hideCommentPopover, showCommentPopover, documentComment]);

  if (!commentRef) return null;

  return (
    <CircleElement
      {...props}
      draggable={false}
      fill={fill}
      onClick={onClickHandler}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      radius={radius}
      ref={circleRef}
      stroke={stroke}
      strokeWidth={strokeWidth}
      x={x}
      y={x}
    />
  );
};

CommentPin.displayName = "CommentPin";
