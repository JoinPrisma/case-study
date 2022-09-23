type Size = { width: number; height: number };
type Position = { x: number; y: number };

enum Keys {
  SHIFT = 'Shift',
  SPACEBAR = ' ',
  ENTER = 'Enter',
  TAB = 'Tab',
  BACKSPACE = 'Backspace',
  DOT = '.',
  HYPHEN = '-',
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_RIGHT = 'ArrowRight',
  ESCAPE = 'Escape',
}

export { Keys };
export type { Size, Position };
