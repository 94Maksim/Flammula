<template>
  <header class="header">
    <Transition name="transformX">
      <HeaderDropdown
        v-if="isShowDropdown"
        @hideDropdown="hideDropdown"
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
          <Icon name="logo" />
        </div>
        <List class="header__titles" :items="titles" />
        <HeaderPanel :items="names" @showSearch="showSearch" />
      </nav>
    </Container>
  </header>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss"></style>
