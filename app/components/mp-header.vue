<template>
  <header>
    <mp-logo />
    <div />
    <span class="page-num">{{ pageNum }}</span>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: var(--ts-headline);
  display: grid;
  grid-template-areas: "logo-img logo-text space page-num";
  grid-template-columns: auto 1fr auto;
  color: var(--clr-on-surface-variant);
}

.page-num {
  font-weight: 700;
  font-size: var(--ts-headline);
  line-height: 100%;
  text-align: right;
  grid-area: page-num;
  font-family: "Roboto", sans-serif;
  align-self: center;
}
</style>

<script lang="ts" setup>
const route = useRoute();
const pageNum = computed(() => {
  const slug = route.params.slug;
  return typeof slug === "string" ? parseInt(slug, 10) : 1;
});
</script>
