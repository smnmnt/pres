export const SPACING_VARS = [
  "xxs",
  "xs",
  "s",
  "m",
  "hl",
  "l",
  "hxl",
  "xl",
  "hxxl",
  "xxl",
  "hxxxl",
] as const;

export type SpacingName = (typeof SPACING_VARS)[number];

export const COLOR_VARS = [
  "surface",
  "primary",
  "secondary",
  "tertiary",
] as const;

export type ColorName = (typeof COLOR_VARS)[number];

export const VARIANT_VARS = ["filled", "outlined", "tonal"] as const;

export type VariantName = (typeof VARIANT_VARS)[number];
