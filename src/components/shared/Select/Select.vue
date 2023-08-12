<template>
  <select class="select" @change="changeOption">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script src="./Select.js"></script>

<style lang="scss" src="./Select.scss"></style>
