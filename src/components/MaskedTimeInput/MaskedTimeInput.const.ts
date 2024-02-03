export const TIME_MASK = [/\d/, /\d/, ':', /\d/, /\d/];

export const COLORS_MASK = {
  hex: [
    '#',
    /[0-9A-Fa-f]/,
    /[0-9A-Fa-f]/,
    /[0-9A-Fa-f]/,
    /[0-9A-Fa-f]/,
    /[0-9A-Fa-f]/,
    /[0-9A-Fa-f]/,
  ],
  rgba: [
    'r',
    'g',
    'b',
    'a',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ',',
    /\d/,
    /\d/,
    /\d/,
    ',',
    /\d/,
    /\d/,
    /\d/,
    ',',
    /\d/,
    ')',
  ],
};
