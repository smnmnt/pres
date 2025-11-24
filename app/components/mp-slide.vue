<template>
  <section>
    <slot name="header" />
    <slot />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--sp-m);
  margin: 1rem 0;

  & > :first-child:is(h1) {
    margin: 0;
  }
}
</style>
