<template>
  <div class="catalog-items">
    <Container>
      <div class="catalog-items__wrapper">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :discount="
            Math.round(
              product.price - (product.price * product.discountPercentage) / 100
            )
          "
          :image="product.images[0]"
		  @click="$router.push(`/catalog/${product.category}/${product.id}`)"
        />
      </div>
    </Container>
  </div>
</template>

<script src="./CatalogItems.js"></script>
<style lang="scss" src="./CatalogItems.scss"></style>
