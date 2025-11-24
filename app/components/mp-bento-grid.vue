<script setup lang="ts">
import { defineProps } from "vue";
import type { SpacingName } from "../types/tokens";
import { resolveSpacing } from "../utils/spacing";

const props = defineProps<{
  cols?: number; // Количество колонок (по умолчанию 1)
  rows?: number; // Количество рядов (по умолчанию 1)
  gap?: SpacingName | (string & {}) | number; // Можно передать spacing-токен, например "m", "l"
  as?: "div" | "section" | "article"; // div/section и т.д.
}>();
</script>

<template>
  <component
    :is="props.as ?? 'div'"
    class="teamly-bento-grid"
    :style="{
      '--bento-cols': props.cols ?? 1,
      '--bento-rows': props.rows ?? 1,
      gap: resolveSpacing(props.gap),
    }"
  >
    <slot />
  </component>
</template>

<style>
.teamly-bento-grid {
  display: grid;
  grid-template-columns: repeat(var(--bento-cols, 1), 1fr);
  grid-template-rows: repeat(var(--bento-rows, 1), 1fr);
  gap: var(--sp-m, 1rem);
  height: auto;
}
</style>
