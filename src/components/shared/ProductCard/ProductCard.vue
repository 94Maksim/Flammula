<template>
  <div class="product-card">
    <div class="product-card__image">
      <Image :src="image" :alt="title" />
    </div>
    <div class="product-card__info">
      <div class="product-card__title">{{ title }}</div>
      <div class="product-card__price">
        <span class="product-card__price-tag">${{ price }}</span>
        <span class="product-card__price-discount">${{ discount }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./ProductCard.js"></script>
<style lang="scss" src="./ProductCard.scss"></style>
