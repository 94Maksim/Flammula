<template>
  <div class="favorite-wrapper">
    <div class="favorite-wrapper__cards">
      <ProductCard
        v-for="product in favorite.products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :discount="
          Math.round(
            product.price - (product.price * product.discountPercentage) / 100
          )
        "
        :image="product.thumbnail"
        @click="$router.push(`/catalog/${product.category}/${product.id}`)"
      >
        <Button @click.stop="$emit('deleteItem', product)"
          >Удалить из избранного
        </Button>
      </ProductCard>
    </div>
  </div>
</template>

<script src="./FavoriteWrapper.js"></script>
<style lang="scss" src="./FavoriteWrapper.scss"></style>
