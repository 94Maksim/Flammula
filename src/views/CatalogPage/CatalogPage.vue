<template>
  <div class="catalog">
    <Container>
      <CatalogWrapper v-if="categoriesList" :categories="categoriesList" />
      <Loader v-else />
    </Container>
  </div>
</template>

<script src="./CatalogPage.js"></script>
