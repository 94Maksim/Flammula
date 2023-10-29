<template>
  <div class="profile">
    <Container>
      <UserProfile v-if="user" :user="user" @logout="logout" />
      <Loader v-else-if="user === null" />
    </Container>
  </div>
</template>

<script src="./ProfilePage.js"></script>
