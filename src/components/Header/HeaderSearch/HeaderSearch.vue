<template>
  <div class="header__search" @click="hideSearch($event.target.className)">
    <div class="header__search-field">
      <Button
        class="header__search-field-back"
        @click="hideSearch('header__search')"
        ><Icon name="back"
      /></Button>
      <Field
        name="search"
        type="text"
        placeholder="Поиск товаров..."
        v-model="searchQuery"
        :focus="focus"
      >
        <Icon name="search"
      /></Field>
    </div>
    <HeaderSearchResult
      :products="products"
      :searchQuery="searchQuery"
      @hideSearch="hideSearch"
    />
  </div>
</template>

<script src="./HeaderSearch.js"></script>
<style src="./HeaderSearch.scss" lang="scss"></style>
