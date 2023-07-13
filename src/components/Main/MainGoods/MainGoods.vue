<template>
  <div class="main__goods">
    <Container>
      <List :items="category" @onClick="onClick" />
      <MainProducts :products="dataGoods" />
    </Container>
  </div>
</template>

<script src="./MainGoods.js"></script>
<style lang="scss" src="./MainGoods.scss"></style>
