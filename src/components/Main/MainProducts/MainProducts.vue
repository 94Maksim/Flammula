<template>
  <div class="main__products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :discount="
         Math.round(product.price - (product.price * product.discountPercentage) / 100) 
      "
      :image="product.images[0]"
    />
  </div>
</template>

<script src="./MainProducts.js"></script>
<style lang="scss" src="./MainProducts.scss"></style>
