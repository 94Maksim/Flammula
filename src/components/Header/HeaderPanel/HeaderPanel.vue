<template>
  <ul class="header__panel">
    <li v-for="item in items" :key="item.name" :class="item.class">
      <Button :title="item.name" @click="routerPush(item.icon)">
        <Icon :name="item.icon" @click="showSearch(item.icon)" />
      </Button>
    </li>
  </ul>
</template>

<script src="./HeaderPanel.js"></script>
<style src="./HeaderPanel.scss" lang="scss"></style>
