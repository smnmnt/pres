import { SPACING_VARS, type SpacingName } from "../types/tokens";

/**
 * Преобразует spacing в корректный CSS spacing-token или строку.
 * @param spacing — spacing name из пресета, число (множитель), либо строка (например, "24px")
 * @returns CSS‑значение для gap/padding/margin
 */
export function resolveSpacing(
  spacing: SpacingName | string | number | undefined,
  defaultSpacing: string = "var(--sp-m)"
) {
  if (!spacing) return defaultSpacing;
  if (spacing === "none") return "0px";
  if (typeof spacing === "number")
    return `calc(${spacing} * var(--base-spacing))`;
  if (SPACING_VARS.includes(spacing as SpacingName))
    return `var(--sp-${spacing})`;
  return spacing;
}
