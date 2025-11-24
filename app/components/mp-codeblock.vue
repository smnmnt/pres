<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
}>();

const copied = ref(false);

const codeLines = computed(() => {
  return props.code.trim().split("\n");
});

function copyToClipboard() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });
}

function isHighlighted(lineNumber: number): boolean {
  return props.highlightLines?.includes(lineNumber) ?? false;
}
</script>

<template>
  <div class="mp-codeblock">
    <!-- Header -->
    <div
      class="mp-codeblock-header"
      v-if="filename || language || $slots.header"
    >
      <div class="mp-codeblock-title">
        <span v-if="filename" class="filename">{{ filename }}</span>
        <slot name="header" />
      </div>
      <div class="mp-codeblock-actions">
        <span v-if="language" class="language">{{ language }}</span>
      </div>
    </div>

    <!-- Code Content -->
    <div
      class="mp-codeblock-content"
      :class="{ 'has-line-numbers': showLineNumbers }"
    >
      <div class="lines" v-if="showLineNumbers">
        <span
          v-for="(_, index) in codeLines"
          :key="index"
          class="line-number"
          :class="{ 'line-number--highlighted': isHighlighted(index + 1) }"
        >
          {{ index + 1 }}
        </span>
      </div>
      <pre class="code-scroll"><code class="code-inner"><div
          v-for="(line, index) in codeLines"
          :key="index"
          class="code-line"
          :class="{ 'code-line--highlighted': isHighlighted(index + 1) }"
        >{{ line || ' ' }}</div></code></pre>
    </div>
  </div>
</template>

<style scoped>
.mp-codeblock {
  background-color: var(--clr-surface);
  color: var(--clr-surface);
  border-radius: var(--sp-m);
  overflow: hidden;
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  border: 1px solid var(--clr-outline);
  overflow: hidden;
  height: fit-content;
}

/* Header */
.mp-codeblock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sp-s) var(--sp-m);
  background-color: var(--clr-surface-variant);
  border-bottom: 1px solid var(--clr-outline);
  font-size: var(--ts-label);
  color: var(--clr-surface-variant);
}

.filename {
  font-weight: 700;
  color: var(--clr-surface);
}

.mp-codeblock-actions {
  display: flex;
  align-items: center;
  gap: var(--sp-s);
}

.language {
  text-transform: uppercase;
  opacity: 0.7;
  font-size: 0.75rem;
}

.copy-btn {
  background: transparent;
  border: 1px solid var(--clr-surface-variant);
  color: var(--clr-surface);
  border-radius: var(--sp-xs);
  padding: 2px 8px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.copy-btn:hover {
  background-color: color-mix(in srgb, var(--clr-surface), transparent 90%);
}

.copy-btn--copied {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

/* Content */
.mp-codeblock-content {
  display: flex;
  overflow: hidden;
  position: relative;
}

.lines {
  display: flex;
  flex-direction: column;
  padding: var(--sp-m) 0;
  background-color: var(--clr-surface-variant);
  border-right: 1px solid var(--clr-outline);
  user-select: none;
  text-align: right;
  min-width: 2.5rem;
  height: 100%;
}

.line-number {
  padding: 0 var(--sp-s);
  color: var(--clr-surface-variant);
  opacity: 0.5;
  font-size: var(--ts-body);
  line-height: 1.5;
}

.code-scroll {
  margin: 0;
  padding: var(--sp-m);
  overflow-x: auto;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--clr-surface-variant) transparent;
}

.code-inner {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  width: max-content;
}

.code-line {
  line-height: 1.5;
  min-height: 1.5em; /* For empty lines */
  white-space: pre;
  font-size: var(--ts-body); /* Ensure same font size as line numbers */
}

/* Highlighting */
.code-line--highlighted {
  background-color: color-mix(in srgb, var(--clr-secondary), transparent 85%);
  width: 100%; /* Highlight full width */
  /* Negative margins to stretch highlight across padding if needed,
     but simpler to just highlight the text line area for now or rely on container structure */
  display: inline-block; /* Allow width to work */
  border-radius: 2px;
}

.line-number--highlighted {
  color: var(--clr-secondary);
  opacity: 1;
  font-weight: bold;
}
</style>
