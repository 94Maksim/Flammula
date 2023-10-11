<template>
  <div class="login-wrapper">
    <Transition name="Y">
      <LoginForm v-if="!isRegister" @showRegisterForm="switchForm" />
      <RegisterForm v-else @showLoginForm="switchForm" />
    </Transition>
  </div>
</template>

<script src="./LoginWrapper.js"></script>
<style lang="scss" src="./LoginWrapper.scss"></style>
