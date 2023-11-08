<template>
  <div class="cart__product-footer">
    <div class="product-footer__info">
      <div class="product-footer__info-availability">В наличии {{ stock }}</div>
      <div class="product-footer__info-total">
        {{ quantity }} х ${{ price }} = ${{ quantity * price }}
      </div>
    </div>
    <div class="product-footer__discount">Ваша скидка: {{ discount }}%</div>
    <div class="product-footer__discount-total">
      Итого:
      {{ Math.round(quantity * price - (quantity * price * discount) / 100) }}
    </div>

    <div class="product-footer__btns">
      <QuantityButtons
        :quantity="quantity"
        :stock="stock"
        @deleteItem="$emit('deleteItem')"
        @updateValue="updateValue"
      />
      <Button class="product-footer__delete" @click="$emit('deleteItem')"
        >Удалить</Button
      >
    </div>
  </div>
</template>

<script src="./CartProductFooter.js"></script>
<style lang="scss" src="./CartProductFooter.scss"></style>
