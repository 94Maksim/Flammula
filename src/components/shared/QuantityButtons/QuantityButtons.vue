<template>
  <div class="quantity-btns">
    <Button class="quantity-btns__btn" @click="plusValue">+</Button>
    <Field class="quantity-btns__quantity" type="number" v-model="value" />
    <Button class="quantity-btns__btn" @click="minusValue">-</Button>
  </div>
</template>

<script src="./QuantityButtons.js"></script>
<style lang="scss" src="./QuantityButtons.scss"></style>
