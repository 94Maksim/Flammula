<template>
  <div class="header__search" @click="hideSearch($event.target.className)">
    <div class="header__search-wrapper">
      <div class="search">
        <Field type="text" placeholder="Поиск...">
          <Icon name="search"
        /></Field>
        <Button @click="hideSearch('header__search')">Отмена</Button>
      </div>
    </div>
  </div>
</template>

<script src="./HeaderSearch.js"></script>
<style src="./HeaderSearch.scss" lang="scss"></style>
