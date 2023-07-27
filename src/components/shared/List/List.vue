<template>
  <ul class="list">
    <slot />
    <li
      v-for="item in items"
      :key="item.name"
      class="list-item"
      @click="onClick(item.name)"
    >
      <span
        :class="item.className"
        @mouseenter="onMouseEnter(item.name)"
        @mouseleave="onMouseLeave(item.name)"
        >{{ item.title }}</span
      >
    </li>
  </ul>
</template>

<script src="./List.js"></script>
<style src="./List.scss" lang="scss"></style>
