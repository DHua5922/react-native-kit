import type { RefObject } from "react";

interface MeasurableNode {
  measure?: (
    callback: (
      x: number,
      y: number,
      width: number,
      height: number,
      pageX: number,
      pageY: number
    ) => void
  ) => void;
}

interface PopupPosition {
  top: string;
  left: string;
  width: string;
}

interface MeasurePopupPositionOptions {
  includeWidth?: boolean;
  offsetTop?: number;
  offsetLeft?: number;
}

export function measurePopupPosition(
  ref: RefObject<MeasurableNode | null>,
  setPosition: (position: PopupPosition) => void,
  {
    includeWidth = false,
    offsetTop = 0,
    offsetLeft = 0,
  }: MeasurePopupPositionOptions = {}
) {
  ref.current?.measure?.(
    (
      _x: number,
      _y: number,
      width: number,
      height: number,
      pageX: number,
      pageY: number
    ) =>
      setPosition({
        top: `${pageY + height + offsetTop}px`,
        left: `${pageX + offsetLeft}px`,
        width: includeWidth ? `${width}px` : "auto",
      })
  );
}
