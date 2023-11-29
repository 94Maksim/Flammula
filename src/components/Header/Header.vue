<template>
  <header class="header">
    <Transition name="transformX">
      <HeaderDropdown
        v-if="isShowDropdown"
        @hideDropdown="hideDropdown"
        @onClick="routerPush"
        :items="titles"
        :name="names[1].name"
      />
    </Transition>
    <Transition name="transformY" mode="out-in">
      <div v-if="isShowSearch" class="header-wrapper">
        <Container>
          <HeaderSearch
            :isShowSearch="isShowSearch"
            @hideSearch="hideSearch"
            @getQueryProducts="getQueryProducts"
            :products="allProducts"
          />
        </Container>
      </div>
      <div v-else class="header-wrapper">
        <Container>
          <nav class="header__nav">
            <div class="header__menu" @click="showDropdown">
              <Icon name="menu" />
            </div>
            <div class="header__logo">
              <Icon name="logo" @click="$router.push('/')" />
            </div>
            <List
              class="header__titles"
              :items="titles"
              @onClick="routerPush"
              @onMouseEnter="showCategories"
              @onMouseLeave="hideCategories"
            >
              <Icon name="down" :class="{ active: isShowCategories }" />
            </List>
            <HeaderPanel
              v-if="names"
              :items="names"
              @showSearch="showSearch"
              @getTopProducts="getTopProducts"
            />
          </nav>
        </Container>
      </div>
    </Transition>
    <Transition name="transformDropdown">
      <HeaderCategories
        v-show="isShowCategories"
        :categories="allCategories"
        @mouseenter="showCategories('catalog')"
        @mouseleave="hideCategories()"
      />
    </Transition>
  </header>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss"></style>
