<template>
  <mp-slide>
    <template #header>
      <h1>Сравнение Teamly с Jira</h1>
    </template>
    <mp-bento-grid :cols="6" :rows="4">
      <mp-bento-tile variant="outlined" :row-span="2" :col-span="3">
        <template #title>
          <h3>Сравнение Teamly с Jira</h3>
        </template>
        <template #image>
          <mp-image src="img/jira-logo.svg" alt="Jira" fit="contain" />
        </template>
      </mp-bento-tile>
    </mp-bento-grid>
  </mp-slide>
</template>
