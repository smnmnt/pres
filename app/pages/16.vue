<template>
  <div class="title-page">
    <div class="title">
      <h1>Спасибо за внимание✨</h1>
    </div>
    <div class="credits"></div>
    <div class="image">
      <mp-image
        src="img/family-2.png"
        alt="Teamly"
        fit="contain"
        :zoom="1.125"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "hero",
});
</script>

<style scoped>
.title-page {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 3fr 1fr;
  gap: var(--sp-m);
  margin: 3rem 2rem;
}

.title {
  text-align: center;
  align-self: center;
  grid-column: 1 / 2;
}

.credits {
  display: grid;
  justify-self: start;
  grid-column: 1 / 2;
  & > p {
    font-size: var(--ts-headline);
    color: var(--clr-on-surface-variant);
    line-height: 100%;
  }

  & > ul {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-m);
    padding: 0;
    margin: 0;
    & > li {
      font-size: var(--ts-title);
      line-height: 100%;
      display: contents;
      & > span {
        color: var(--clr-on-surface-variant);
      }
      & > b {
        font-weight: 700;
      }
    }
  }
}
.image {
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  display: grid;
  margin: 0;
  & picture {
    border-radius: var(--sp-l, 1rem);
  }
}
</style>
