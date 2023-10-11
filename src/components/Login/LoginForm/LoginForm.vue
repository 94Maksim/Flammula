<template>
  <form class="login-form">
    <h1>Логин</h1>
    <Field
      type="email"
      placeholder="Введите e-mail..."
      v-model.trim="dataFields.email"
    />
    <div class="login-form__email-error">{{ errorsFields?.email }}</div>
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
        @click="console.log(this.dataFields)"
        :disabled="isDisabled"
        >Войти</Button
      >
      <Button class="login-form__btns-register" @click="showRegisterForm"
        >Регистрация</Button
      >
    </div>
  </form>
</template>

<script src="./LoginForm.js"></script>
<style lang="scss" src="./LoginForm.scss"></style>
