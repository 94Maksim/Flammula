<template>
  <div
    class="header__search-result"
    @click="$emit('hideSearch', $event.target.className)"
  >
    <Transition name="transformY">
      <div class="result" v-if="isAnimated">
        <div v-if="products" class="result-wrapper">
          <div class="result-top" v-if="!searchQuery.length">
            <h3>Популярное</h3>
            <SearchCard
              v-for="product in products"
              :key="product.id"
              :product="product"
              @click="routerPush(product)"
            />
          </div>
          <div class="result-query" v-else>
            <h3>Результат:</h3>
            <div v-if="products.length">
              <SearchCard
                v-for="product in products"
                :key="product.id"
                :product="product"
                @closeSearch="$emit('hideSearch', 'header__search-result')"
              />
            </div>
            <div v-else>Ничего не найдено!</div>
          </div>
        </div>
        <div v-else><Loader /></div>
      </div>
    </Transition>
  </div>
</template>

<script src="./HeaderSearchResult.js"></script>
<style lang="scss" src="./HeaderSearchResult.scss"></style>
