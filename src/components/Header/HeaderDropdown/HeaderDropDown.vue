<template>
  <div class="header__dropdown" @click="hideDropdown($event.target.className)">
    <div class="dropdown-menu">
      <div class="dropdown-menu__header">
        <Button @click="$router.push('/login')">
          <div>Вход/Регистрация</div>
        </Button>
        <Icon name="x" @click="hideDropdown('header__dropdown')" />
      </div>
      <List class="dropdown-menu__main" :items="items" @onClick="onClick">
        <li @click="$router.push('/favorite')">Избранное</li>
      </List>
      <div class="dropdown-menu__footer">
        <Icon name="logo" />
      </div>
    </div>
  </div>
</template>

<script src="./HeaderDropdown.js"></script>
<style src="./HeaderDropdown.scss" lang="scss"></style>
