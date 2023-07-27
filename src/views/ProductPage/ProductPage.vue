<template>
  <div class="product-page">
    <Container>
      <ProductItem v-if="product" :product="product" />
      <Loader v-else />
    </Container>
  </div>
</template>

<script src="./ProductPage.js"></script>
<style lang="scss" src="./ProductPage.scss"></style>
