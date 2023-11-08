<template>
  <div class="product-page">
    <Container>
      <ProductItem
        v-if="product"
        :product="product"
        :quantity="productQuantity"
        @addToCart="addToCart"
        @deleteItem="deleteItem"
        :isProductInCart="isProductInCart"
      />
      <Loader v-else />
    </Container>
  </div>
</template>

<script src="./ProductPage.js"></script>
