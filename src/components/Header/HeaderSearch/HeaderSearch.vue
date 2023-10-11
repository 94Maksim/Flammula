<template>
  <div class="header__search" @click="hideSearch($event.target.className)">
    <div class="header__search-wrapper">
      <div class="search">
        <Field type="text" placeholder="Поиск товаров..." v-model="searchQuery">
          <Icon name="search"
        /></Field>
        <Button @click="hideSearch('header__search')">Отмена</Button>
      </div>
    </div>
    <div class="header__search-result">
      <div class="result">
        <div v-if="products" class="result-wrapper">
          <div class="result-top" v-if="!searchQuery.length">
            <h3>Популярное</h3>
            <SearchCard
              v-for="product in products"
              :key="product.id"
              :product="product"
              @closeSearch="hideSearch('header__search')"
            />
          </div>
          <div class="result-query" v-else>
            <h3>Результат:</h3>
            <div v-if="products.length">
              <SearchCard
                v-for="product in products"
                :key="product.id"
                :product="product"
                @closeSearch="hideSearch('header__search')"
              />
            </div>
			<div v-else>Ничего не найдено!</div>
          </div>
        </div>
        <div v-else><Loader/></div>
      </div>
    </div>
  </div>
</template>

<script src="./HeaderSearch.js"></script>
<style src="./HeaderSearch.scss" lang="scss"></style>
