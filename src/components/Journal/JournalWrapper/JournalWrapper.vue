<template>
  <div class="journal-wrapper">
    <div class="journal-wrapper__head">
      <Button>Создать пост</Button>
      <Select @changeOption="changeOption" :options="sortOptions" />
    </div>
    <Field type="text" placeholder="Поиск..." v-model="search" />
    <div class="journal-wrapper__posts">
      <TransitionGroup name="post-list">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :page="page"
        />
      </TransitionGroup>
    </div>
    <div ref="observer"></div>
    <Loader v-if="isPostsLoading" />
    <Pagination
      v-if="isPagination"
      :totalPages="totalPages"
      :page="page"
      @changePage="changePage"
    />
  </div>
</template>

<script src="./JournalWrapper.js"></script>
<style lang="scss" src="./JournalWrapper.scss"></style>
