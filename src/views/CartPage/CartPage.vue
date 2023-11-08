<template>
  <div class="cart">
    <Container>
      <cartWrapper
        v-if="cart"
        :cart="cart"
        @deleteItem="deleteItem"
        @updateValue="addToCart"
      />
      <EmptyComponent v-else />
    </Container>
  </div>
</template>

<script src="./CartPage.js"></script>
