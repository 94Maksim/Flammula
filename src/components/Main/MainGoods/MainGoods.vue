<template>
  <div class="main__goods">
    <List :items="category" @onClick="onClick" />
    <MainProducts :products="dataGoods" />
  </div>
</template>

<script src="./MainGoods.js"></script>
<style lang="scss" src="./MainGoods.scss"></style>
