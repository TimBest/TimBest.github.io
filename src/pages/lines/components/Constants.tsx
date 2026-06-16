export const cyan = '230';
export const mint = '152';
export const gold = '69';
export const pink = '353';
export const purple = '301';

export const HUES = [cyan, mint, gold, pink, purple];
export const defaultColor = (hue: string) => `oklch(70% 0.13 ${hue})`;
export const lightColor = (hue: string) => `oklch(80% 0.13 ${hue})`;
export const disabledColor = (hue: string) => `oklch(40% 0.04 ${hue})`;

