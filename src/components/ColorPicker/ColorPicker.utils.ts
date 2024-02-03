import { RGBColorType } from './ColorPicker.model';

export const convertRGBAToText = (color: RGBColorType) =>
  `rgba(${color.r},${color.g},${color.b},${color.a})`;

export const convertTextToRGBA = (text: string): RGBColorType | null => {
  const matched = text.match(/^rgba\((.*)\)/)?.[1];
  if (!matched) return null;
  const [r, g, b, a] = matched.split(',');
  return {
    r: Number(r),
    g: Number(g),
    b: Number(b),
    a: Number(a),
  };
};

export const hexToRGBA = (hex: string, alpha = 100) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rgbaToHex = (color: string) => {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  return `#${(
    (1 << 24) +
    (parseInt(rgba[0], 10) << 16) +
    (parseInt(rgba[1], 10) << 8) +
    parseInt(rgba[2], 10)
  )
    .toString(16)
    .slice(1)}`;
};
