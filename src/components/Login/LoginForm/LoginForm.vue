<template>
  <form class="login-form">
    <h1>Логин</h1>
    <Field
      type="text"
      placeholder="Введите логин..."
      v-model.trim="dataFields.login"
    />
    <div class="login-form__login-error">{{ errorsFields?.login }}</div>
    <Field
      type="password"
      placeholder="Введите пароль..."
      v-model.trim="dataFields.passwordLogIn"
    />
    <div class="login-form__password-error">
      {{ errorsFields?.passwordLogIn }}
    </div>
    <div class="login-form__btns">
      <Button
        class="login-form__btns-auth"
        @click="getAuth"
        :disabled="isDisabled"
        >Войти</Button
      >
      <Button class="login-form__btns-register" @click="showRegisterForm"
        >Регистрация</Button
      >
    </div>
    <div v-if="isLoading" class="login-form__loading">
      <Loader />
    </div>
    <div v-if="error" class="login-form__errors">{{ error }}</div>
  </form>
</template>

<script src="./LoginForm.js"></script>
<style lang="scss" src="./LoginForm.scss"></style>
