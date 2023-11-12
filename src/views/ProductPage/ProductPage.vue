<template>
  <div class="product-page">
    <Container>
      <ProductItem
        v-if="product"
        :product="product"
        :quantity="productQuantity"
        @addToCart="addToCart"
        @deleteItem="deleteItem"
        @addToFavorite="addToFavorite"
        @deleteFromFavorite="deleteFromFavorite"
        :isProductInCart="isProductInCart"
        :isProductInFavorite="isProductInFavorite"
      />
      <Loader v-else />
    </Container>
  </div>
</template>

<script src="./ProductPage.js"></script>
