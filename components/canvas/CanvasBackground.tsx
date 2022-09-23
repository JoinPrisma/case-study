import classNames from 'classnames';
import { FC, HTMLProps } from 'react';

type Props = HTMLProps<HTMLDivElement> & {
  background?: string;
  type?: 'normal' | 'square_thumbnails' | 'extended';
};

export type SolidCanvasBackground =
  | 'default'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'magenta'
  | 'pink';

export const SOLID_CANVAS_BACKGROUND_BG_CLASS: Record<
  SolidCanvasBackground,
  string
> = {
  default: 'bg-background',
  red: 'bg-red-container',
  orange: 'bg-orange-container',
  yellow: 'bg-yellow-container',
  green: 'bg-green-container',
  teal: 'bg-teal-container',
  blue: 'bg-blue-container',
  violet: 'bg-violet-container',
  purple: 'bg-purple-container',
  magenta: 'bg-magenta-container',
  pink: 'bg-pink-container',
};

const CanvasBackground: FC<Props> = ({
  background,
  type = 'normal',
  className,
  style,
  ...props
}: Props) => {
  const hasBackground = !!background;
  const isLegacy = hasBackground && background.startsWith('#');
  const isSolid =
    hasBackground &&
    !!SOLID_CANVAS_BACKGROUND_BG_CLASS[background as SolidCanvasBackground];
  const isImage = hasBackground && !isSolid;

  return (
    <div
      {...props}
      className={classNames(className, {
        'bg-cover': isImage,
        [SOLID_CANVAS_BACKGROUND_BG_CLASS[background as SolidCanvasBackground]]:
          isSolid,
      })}
      style={
        isLegacy || isImage
          ? isLegacy
            ? { ...style, backgroundColor: background }
            : {
                ...style,
                backgroundImage: `url(/assets/backgrounds/${type}/${background}.svg)`,
              }
          : style
      }
    />
  );
};

export default CanvasBackground;

// TODO remove legacy hex backgrounds after they're likely not many left
