<template>
  <mp-slide>
    <template #header>
      <h1>Технический стек (Frontend)</h1>
    </template>
    <mp-bento-grid :cols="6" :rows="4">
      <mp-bento-tile variant="outlined" :row-span="2" :col-span="2">
        <template #title>
          <h3>Язык программирования TypeScript</h3>
        </template>
        <template #image>
          <mp-image
            src="img/typescript-logo.svg"
            alt="TypeScript"
            fit="contain"
            :zoom="0.8"
          />
        </template>
        <span>
          Позволяет писать код типобезопасно и уменьшает количество ошибок
        </span>
      </mp-bento-tile>

      <mp-bento-tile variant="outlined" :row-span="2">
        <template #title>
          <h3>Веб-фреймворк Nuxt</h3>
        </template>
        <template #image>
          <mp-image src="img/nuxt-logo.svg" alt="Nuxt.js" fit="contain" />
        </template>
        <p>
          Удобный фреймворк для разработки веб-приложений
          <br />
          использование Composition API
        </p>
      </mp-bento-tile>

      <mp-bento-tile variant="outlined" :row-span="2">
        <template #title>
          <h3>UI-фреймворк Vue</h3>
        </template>
        <template #image>
          <mp-image
            :width="1001"
            :height="1001"
            src="img/vue-logo.svg"
            alt="Vue.js"
            fit="contain"
            aspectRatio="1/1"
          />
        </template>
        <p>Vue 3.5</p>
        <small>использование Composition API</small>
      </mp-bento-tile>

      <mp-bento-tile variant="outlined" :row-span="2">
        <template #title>
          <h3>Управление состоянием Pinia</h3>
        </template>
        <template #image>
          <mp-image
            src="img/pinia-logo.svg"
            alt="Pinia"
            fit="contain"
            aspectRatio="1/1"
          />
        </template>
      </mp-bento-tile>

      <mp-bento-tile variant="outlined" :row-span="2">
        <template #title>
          <h3>Работа с API через Pinia Colada</h3>
        </template>
        <template #image>
          <mp-image
            src="img/colada-logo.svg"
            alt="Pinia Colada"
            fit="fill"
            aspectRatio="1/1"
          />
        </template>
      </mp-bento-tile>

      <mp-bento-tile variant="outlined" :col-span="2" :row-span="2">
        <template #title>
          <h3>Drag-and-Drop</h3>
        </template>
        <template #image>
          <mp-image
            src="img/typescript-logo.svg"
            alt="TypeScript"
            fit="contain"
            :zoom="0.6"
          />
        </template>
        <p>@formkit/drag-and-drop</p>
        <small>минимальный вес бандла</small>
      </mp-bento-tile>
    </mp-bento-grid>
  </mp-slide>
</template>
