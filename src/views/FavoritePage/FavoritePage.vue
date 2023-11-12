<template>
  <div class="favorite">
    <Container>
      <FavoriteWrapper
        v-if="favorite"
        :favorite="favorite"
        @deleteItem="deleteItem"
      />
      <EmptyComponent v-else />
    </Container>
  </div>
</template>

<script src="./FavoritePage.js"></script>
