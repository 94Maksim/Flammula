<template>
  <div class="post-card">
    <div class="post-card__title">
      <h2>
        <span>{{ post.id }}. {{ post.title }}</span>
      </h2>
      <span class="post-card__title-user"
        >{{ post.userName?.firstName }} {{ post.userName?.lastName }}</span
      >
    </div>
    <p>{{ post.body }}</p>
    <div class="post-card__footer">
      <div class="post-card__footer-favorite">
        <Button>
          <Icon name="favorite" />
        </Button>
        <span class="post-card__footer-text">{{ post.reactions }}</span>
      </div>
      <div class="post-card__footer-tags">
        <span class="post-card__footer-text">tags:</span>
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="post-card__footer-tag"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script src="./PostCard.js"></script>
<style lang="scss" src="./PostCard.scss"></style>
