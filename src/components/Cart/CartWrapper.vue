<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__cards">
      <ProductCard
        v-for="product in cart.products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :discount="
          Math.round(
            product.price - (product.price * product.discountPercentage) / 100
          )
        "
        :image="product.thumbnail"
        @click="
          routerPush($router.push(`/catalog/${product.category}/${product.id}`))
        "
      >
        <CartProductFooter
          @click.stop
          :id="product.id"
          :quantity="product.quantity"
          :stock="product.stock"
          :price="product.price"
          :discount="product.discountPercentage"
          @deleteItem="deleteItem(product)"
          @updateValue="updateValue"
        />
      </ProductCard>
    </div>
    <CartTotal :cart="cart" />
  </div>
</template>

<script src="./CartWrapper.js"></script>
<style lang="scss" src="./CartWrapper.scss"></style>
