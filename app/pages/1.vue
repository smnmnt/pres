<template>
  <div class="title-page">
    <div class="title">
      <h1>Teamly - трекер задач для каждого</h1>
      <h3>Архитектура MVP, реализация Kanban-доски и технические решения.</h3>
    </div>
    <div class="credits">
      <p class="credits-text">Команда проекта</p>
      <ul>
        <li><span>Lead Engineer:</span> <b>Ларин Александр</b></li>
        <li><span>Frontend:</span> <b>Асеева Александра</b></li>
        <li><span>DevOps:</span> <b>Цейгалов Андрей</b></li>
        <li><span>Backend:</span> <b>Кособреев Олег</b></li>
        <li><span>Дизайн:</span> <b>Князевская Анастасия</b></li>
        <li><span>Документация:</span> <b>Бурчанинова Дарья</b></li>
      </ul>
    </div>
    <div class="image">
      <mp-image src="img/family.png" alt="Teamly" fit="contain" :zoom="1.5" />
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
  grid-template-columns: 2fr 1fr;
  gap: var(--sp-m);
  margin: 3rem 2rem;
}

.title {
  text-align: left;
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
  grid-row: 1 / 3;
  display: grid;
  margin: 0;
  & picture {
    border-radius: var(--sp-l, 1rem);
  }
}
</style>
