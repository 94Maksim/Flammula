<template>
  <div class="field">
    <input :type="type" :placeholder="placeholder" v-focus />
	<slot/>
  </div>
</template>

<script src="./Field.js"></script>
<style src="./Field.scss" lang="scss"></style>
