<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__column">
        <List :items="textItems.titles" @onClick="routeToPage" />
        <List :items="textItems.menu" @onClick="routeToPage" />
      </div>
      <div class="footer__copyright">
        <div class="footer__copyright-wrapper">
          <Icon name="logo" @click="$router.push('/')" />
          <div>{{ textItems.copyrightText }}</div>
          <div>{{ textItems.copyright }}</div>
        </div>
      </div>
    </div>
    <ul class="footer__icons">
      <li v-for="icon in iconName">
        <Button>
          <Icon :name="icon" />
        </Button>
      </li>
    </ul>
  </footer>
</template>

<script src="./Footer.js"></script>
<style lang="scsjss" src="./Footer.scss"></style>
