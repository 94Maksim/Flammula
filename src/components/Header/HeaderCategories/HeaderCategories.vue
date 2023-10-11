<template>
  <div class="header__categories">
    <List :items="categories" @onClick="routerPush" />
  </div>
</template>

<script src="./HeaderCategories.js"></script>
<style lang="scss" src="./HeaderCategories.scss"></style>
