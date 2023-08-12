<template>
  <div class="journal">
    <Container>
      <JournalWrapper
        v-if="posts"
        :posts="sortedAndSearchedPosts"
        :isPostsLoading="isPostsLoading"
        :page="page"
        :totalPages="totalPages"
        :sortOptions="sortOptions"
        :isPagination="isPagination"
        @changeOption="changeOption"
        @search="searchPosts"
        @changePage="changePage"
        @crossObserver="getMorePosts"
      />
      <Loader v-else />
    </Container>
  </div>
</template>

<script src="./JournalPage.js"></script>
