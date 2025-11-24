<template>
  <div class="mp-logos">
    <picture
      v-for="(logo, index) in logos"
      :key="index"
      class="mp-logo-item"
      :class="{
        'mp-logo-item--colored': props.applyColor && props.applyColor > 0,
      }"
      :style="{
        '--color-overlay-opacity': props.applyColor || 0,
      }"
    >
      <nuxt-img
        preload
        :src="typeof logo === 'string' ? logo : logo.src"
        :alt="
          typeof logo === 'string'
            ? `Logo ${index + 1}`
            : logo.alt || `Logo ${index + 1}`
        "
        :width="props.width"
        :height="props.height"
        class="mp-logo-image"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  logos: Array<string | { src: string; alt?: string; zoom?: number }>;
  width?: number;
  height?: number;
  aspectRatio?: string;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  applyColor?: number;
}>();
</script>

<style scoped>
.mp-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--sp-m);
  align-items: center;
  justify-items: center;
  overflow: clip;
  max-height: 100cqh;
  max-width: 100cqw;
}

.mp-logo-item {
  display: grid;
  outline-offset: -1px;
  aspect-ratio: 1;
  border-radius: var(--sp-s);
  background: var(--clr-surface);
  padding: var(--sp-s);
}

.mp-logo-item--colored {
  position: relative;
}

.mp-logo-item--colored::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--clr-primary);
  mix-blend-mode: hue;
  border-radius: var(--sp-s);
  pointer-events: none;
  opacity: var(--color-overlay-opacity);
  transform: var(--logo-transform);
}

.mp-logo-image {
  object-fit: cover;
  aspect-ratio: v-bind(aspectRatio);
  object-fit: v-bind(fit);
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  max-height: 100cqh;
  max-width: 100cqw;
}
</style>
