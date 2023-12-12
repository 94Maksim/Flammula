<template>
  <div class="header__categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        @click="routerPush(category.path)"
      >
        <Image :src="category.img" :alt="category.img" />
        <span>{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./HeaderCategories.js"></script>
<style lang="scss" src="./HeaderCategories.scss"></style>
