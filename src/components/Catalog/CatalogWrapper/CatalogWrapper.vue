<template>
  <div class="catalog-wrapper">
    <CategoryCard
      v-for="category in categories"
      :key="category.name.name"
      :name="category.name.name"
      :title="category.name.title"
      :src="category.src"
    />
  </div>
</template>

<script src="./CatalogWrapper.js"></script>
<style lang="scss" src="./CatalogWrapper.scss"></style>
