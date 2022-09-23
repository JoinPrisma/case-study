import { FC, ReactNode, useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useSetRecoilState } from 'recoil';

export const CANVAS_SAFE_ZONE_ID = 'canvas-safe-zone';

type Props = {
  children: ReactNode;
};

const CanvasSafeZone: FC<Props> = ({ children }: Props) => {
  const {
    ref: safeZoneRef,
    width: safeZoneWidth,
    height: safeZoneHeight,
  } = useResizeDetector();

  const setCanvasSafeZoneSize = useSetRecoilState(canvasSafeZoneSizeAtom);
  useEffect(() => {
    if (safeZoneWidth && safeZoneHeight) {
      setCanvasSafeZoneSize({ width: safeZoneWidth, height: safeZoneHeight });
    } else {
      setCanvasSafeZoneSize(undefined);
    }
  }, [safeZoneWidth, safeZoneHeight]);

  useEffect(() => () => setCanvasSafeZoneSize(undefined), []);

  return (
    <div
      id={CANVAS_SAFE_ZONE_ID}
      className="relative w-full h-full"
      ref={safeZoneRef}
    >
      {children}
    </div>
  );
};

export default CanvasSafeZone;
