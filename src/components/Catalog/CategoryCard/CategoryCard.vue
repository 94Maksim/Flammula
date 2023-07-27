<template>
  <div class="category-card">
    <div
      class="category-card__wrapper"
      @click="$router.push(`/catalog/${name}`)"
    >
      <h2>{{ title }}</h2>
      <Image :src="src" alt="image" />
    </div>
  </div>
</template>

<script src="./CategoryCard.js"></script>
<style lang="scss" src="./CategoryCard.scss"></style>
