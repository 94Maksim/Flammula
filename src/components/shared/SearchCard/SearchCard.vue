<template>
  <div class="search-card">
    <div class="search-card__img">
      <Image :src="product.mainImage" alt="image" />
    </div>
    <div class="search-card__title">
      {{ product.name }}
    </div>
    <div class="search-card__price">
      <span>₽{{ product.price }} </span>
      <span class="search-card__price-discount">₽{{ product.oldPrice }}</span>
    </div>
  </div>
</template>

<script src="./SearchCard.js"></script>
<style lang="scss" src="./SearchCard.scss"></style>
