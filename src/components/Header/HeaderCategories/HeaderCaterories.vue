<template>
  <div class="header__categories">
    <List :items="categories" @onClick="routerPush" />
  </div>
</template>

<script src="./HeaderCaterories.js"></script>
<style lang="scss" src="./HeaderCaterories.scss"></style>
