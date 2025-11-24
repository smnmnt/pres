<template>
  <div id="page">
    <mp-header hero />
    <main>
      <slot />
    </main>
    <mp-footer />
  </div>
</template>

<style scoped>
#page {
  width: 1920px;
  height: 1080px;
  background-color: var(--clr-background);
  color: var(--clr-on-surface);
  outline: 1px solid var(--clr-outline);
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
}
</style>
