<template>
  <ul class="list">
	<slot/>
    <li v-for="item in items" :key="item" class="list-item">
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script src="./List.js"></script>
<style src="./List.scss" lang="scss"></style>
