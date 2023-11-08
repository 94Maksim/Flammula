<template>
  <div class="product__item-card">
    <Button class="item-card__link" @click="$router.push('/cart')"
      >Перейти в корзину</Button
    >
    <QuantityButtons
      :quantity="quantity"
      :stock="stock"
      @updateValue="updateValue"
      @deleteItem="$emit('deleteItem')"
    />
  </div>
</template>

<script src="./ProductInCart.js"></script>
<style lang="scss" src="./ProductInCart.scss"></style>
