/* eslint-disable react/display-name */

import classNames from 'classnames';
import useWindowSize from './useWindowSize';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  ReactNode,
  useMemo,
} from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Rnd } from 'react-rnd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import CanvasBackground from './CanvasBackground';
import canvasBackgroundSelectorFamily from './canvasBackgroundSelectorFamily';
import WorkshopSelectors from './WorkshopSelectors';
import KeypressSelectors from './KeypressSelectors';
import CanvasSafeZone from './CanvasSafeZone';
import canvasPositionSelector from './canvasPositionSelector';
import canvasPanOffsetAtom from './canvasPanOffsetAtom';
import canvasZoomAtom, { MIN_ZOOM_LEVEL } from './canvasZoomAtom';
import canvasSizeSelector from './canvasSizeSelector';
import canvasSafeZoneSizeAtom from './canvasSafeZoneSizeAtom';

const CANVAS_HEIGHT = 1200;
const CANVAS_WIDTH = 1920;

export const RECOMMENDED_MIN_WIDTH = 844;
export const RECOMMENDED_MIN_HEIGHT =
  (RECOMMENDED_MIN_WIDTH * CANVAS_HEIGHT) / CANVAS_WIDTH;

type Props = {
  id?: string;
  roomId: string;
  children: ReactNode;
  canvasClassName?: string;
};

const InnerCanvas: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, Props>(
  ({ id, roomId, children, canvasClassName }: Props, ref) => {
    const {
      ref: resizeDetectorRef,
      width,
      height,
    } = useResizeDetector({
      targetRef: ref as MutableRefObject<HTMLDivElement>,
    });

    const background = useRecoilValue(canvasBackgroundSelectorFamily(roomId));
    const isEditMode = useRecoilValue(WorkshopSelectors.isEditMode);

    const windowSize = useWindowSize()!;

    const showExtendedBackground = useMemo(
      () =>
        width !== undefined &&
        height !== undefined &&
        3 * width > windowSize.width &&
        3 * height > windowSize.height,
      [height, width, windowSize.height, windowSize.width]
    );

    return (
      <div
        ref={resizeDetectorRef}
        id={id}
        className={classNames(
          'relative w-full h-full rounded-4 bg-surface',
          canvasClassName
        )}
      >
        {background && showExtendedBackground && (
          <CanvasBackground
            background={background}
            type="extended"
            className="absolute z-0 pointer-events-none"
            style={{
              // extended backgrounds are three times the size of the canvas.
              // 3x was chosen since it was the smallest integer number that worked with most reasonable aspect ratios.
              width: '300%',
              height: '300%',
              top: '-100%',
              left: '-100%',
              opacity: 1,
            }}
            role="img"
            aria-label={background}
          />
        )}
        {(isEditMode || (background && !showExtendedBackground)) && (
          <CanvasBackground
            background={
              showExtendedBackground ? undefined : background || undefined
            }
            className={classNames(
              'pointer-events-none absolute inset-0 w-full h-full rounded-4',
              {
                'shadow-2xl shadow-black/8 dark:shadow-black/30': isEditMode,
              }
            )}
          />
        )}
        {children}
      </div>
    );
  }
);

const Canvas: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { id = 'rnd-canvas', roomId, children, canvasClassName = '' }: Props,
  ref
) => {
  const isSpacebarPressed = useRecoilValue(KeypressSelectors.isSpacebarPressed);

  const canvasPosition = useRecoilValue(canvasPositionSelector);
  const setCanvasPanOffset = useSetRecoilState(canvasPanOffsetAtom);

  const zoom = useRecoilValue(canvasZoomAtom);
  const canvasSize = useRecoilValue(canvasSizeSelector);

  const isDraggingEnabled = zoom > MIN_ZOOM_LEVEL && isSpacebarPressed;
  const canvasSafeZoneSize = useRecoilValue(canvasSafeZoneSizeAtom);

  return (
    <>
      <CanvasSafeZone>
        {!!canvasSafeZoneSize && (
          <Rnd
            position={canvasPosition}
            size={canvasSize}
            lockAspectRatio={true}
            onDrag={(_, data) =>
              setCanvasPanOffset((offset) => ({
                x: offset.x + data.deltaX,
                y: offset.y + data.deltaY,
              }))
            }
            disableDragging={!isDraggingEnabled}
            enableResizing={false}
            className={isDraggingEnabled ? 'cursor-grab-override-all' : ''}
            data-testid="canvas"
          >
            <InnerCanvas
              id={id}
              roomId={roomId}
              canvasClassName={canvasClassName}
              ref={ref}
            >
              {children}
            </InnerCanvas>
          </Rnd>
        )}
      </CanvasSafeZone>
    </>
  );
};

export default forwardRef<HTMLDivElement, Props>(Canvas);
