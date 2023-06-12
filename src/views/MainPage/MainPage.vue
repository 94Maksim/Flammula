<template>
  <main class="main">
    <Transition name="fade" mode="out-in">
      <div v-if="isLoading" class="main-wrapper">
        <MainImage
          v-if="this.mainImage"
          :src="this.mainImage.url"
          alt="main image"
        />
        <MainGoods v-if="category" :category="category" />
      </div>
      <Loader v-else />
    </Transition>
  </main>
</template>

<script src="./MainPage.js"></script>
