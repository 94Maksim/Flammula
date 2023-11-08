<template>
  <div class="cart-total">
    <h2>Итого:</h2>
    <div>Всего товаров: {{ cart.totalProducts }}</div>
    <div>Стоимость: ${{ cart.total }}</div>
    <div class="cart-total__discount">
      Скидка: ${{ cart.total - cart.discountedTotal }}
    </div>
    <div class="cart-total__total">
      Всего к оплате: ${{ cart.discountedTotal }}
    </div>
  </div>
</template>

<script src="./CartTotal.js"></script>
<style lang="scss" src="./CartTotal.scss"></style>
