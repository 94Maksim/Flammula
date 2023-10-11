<template>
  <div class="search-card" @click="routerPush">
    <div class="search-card__img">
      <Image :src="product.thumbnail" alt="image" />
    </div>
    <div class="search-card__title">
      {{ product.title }}
    </div>
    <div class="search-card__price">
      <span>${{ product.price }}</span> <span class="search-card__price-discount">${{ getDiscount() }}</span>
    </div>
  </div>
</template>

<script src="./SearchCard.js"></script>
<style lang="scss" src="./SearchCard.scss"></style>
