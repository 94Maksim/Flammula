<template>
  <div class="pagination">
    <Button
      class="pagination__page"
      :class="{ 'pagination__page-current': page === pageNumber }"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
	  @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </Button>
  </div>
</template>

<script src="./Pagination.js"></script>
<style lang="scss" src="./Pagination.scss"></style>
