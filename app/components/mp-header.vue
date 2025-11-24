<template>
  <header :class="{ hero: props.hero }">
    <mp-logo />
    <div />
    <span v-if="!hero" class="page-num">{{ pageNum }}</span>
    <span v-if="hero" class="hero-title">mospolytech.ru</span>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: var(--ts-headline);
  display: grid;
  grid-template-areas: "logo-img logo-text space text";
  grid-template-columns: auto 1fr auto;
  color: var(--clr-on-surface-variant);
  &.hero {
    height: var(--ts-display);
  }
}

.page-num {
  font-weight: 700;
  font-size: var(--ts-headline);
  line-height: 100%;
  text-align: right;
  grid-area: text;
  font-family: "Roboto", sans-serif;
  align-self: center;
}

.hero-title {
  font-weight: 500;
  font-size: var(--ts-headline);
  line-height: 100%;
  text-align: right;
  grid-area: text;
  font-family: "Roboto Mono", monospace;
  align-self: center;
}
</style>

<script lang="ts" setup>
const route = useRoute();
const pageNum = computed(() => {
  const slug = route.params.slug;
  return typeof slug === "string" ? parseInt(slug, 10) : 1;
});
const props = defineProps<{
  hero?: boolean;
}>();
</script>
