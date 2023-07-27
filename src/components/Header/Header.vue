<template>
  <header class="header">
    <Transition name="transformX">
      <HeaderDropdown
        v-if="isShowDropdown"
        @hideDropdown="hideDropdown"
        @onClick="routerPush"
        :items="titles"
      />
    </Transition>
    <Transition name="transformY">
      <HeaderSearch v-if="isShowSearch" @hideSearch="hideSearch" />
    </Transition>
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
        <HeaderPanel :items="names" @showSearch="showSearch" />
      </nav>
      <HeaderCaterories
        v-if="isShowCategories"
        :categories="allCategories"
        @mouseenter="showCategories('catalog')"
        @mouseleave="hideCategories()"
      />
    </Container>
  </header>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss"></style>
