<template>
  <div class="radio">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="id"
      @input="updateInput(id)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script src="./Radio.js"></script>
<style lang="scss" src="./Radio.scss"></style>
