<template>
  <div class="field">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateInput"
    />
    <slot />
  </div>
</template>

<script src="./Field.js"></script>
<style src="./Field.scss" lang="scss"></style>
