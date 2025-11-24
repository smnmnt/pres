<template>
  <picture>
    <nuxt-img
      preload
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      class="mp-image"
    />
  </picture>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  zoom?: number;
}>();
</script>

<style scoped>
.mp-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-fit: v-bind(fit);
  transform: scale(v-bind(zoom));
  aspect-ratio: v-bind(aspectRatio);
}
picture {
  overflow: hidden;
  outline-offset: -2px;
  max-height: 100cqh;
  max-width: 100cqw;
  height: 100%;
  width: 100%;
  aspect-ratio: v-bind(aspectRatio);
  outline: 2px dashed transparent;
  transition: outline-color 0.15s ease-in-out;
  &:hover {
    outline: 2px dashed var(--clr-outline);
  }
}
</style>
