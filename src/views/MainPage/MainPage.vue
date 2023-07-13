<template>
  <main class="main">
    <Transition name="fade" mode="out-in">
      <div v-if="isLoading" class="main-wrapper">
        <MainImage
          v-if="this.mainImages"
          :src="this.mainImages[0]"
          alt="main image"
        />
        <MainGoods
          v-if="category"
          :category="category"
          @getDataGoods="getDataGoods"
          @addClass="addClass"
          :dataGoods="dataGoods"
        />
        <MainImage
          v-if="this.mainImages"
          :src="this.mainImages[1]"
          alt="main image"
        />
        <MainImage
          v-if="this.mainImages"
          :src="this.mainImages[2]"
          alt="main image"
        />
        <MainSign />
      </div>
      <Loader v-else />
    </Transition>
  </main>
</template>

<script src="./MainPage.js"></script>
