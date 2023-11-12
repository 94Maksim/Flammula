<template>
  <form class="register-form">
    <h1>Регистрация</h1>
    <Field
      type="text"
      placeholder="Введите имя..."
      v-model.trim="dataFields.firstName"
    />
    <div class="register-form__error">{{ errorsFields?.firstName }}</div>
    <Field
      type="text"
      placeholder="Введите фамилию..."
      v-model.trim="dataFields.lastName"
    />
    <div class="register-form__error">{{ errorsFields?.lastName }}</div>
    <Field
      type="text"
      placeholder="Введите логин..."
      v-model.trim="dataFields.username"
    />
    <div class="register-form__error">{{ errorsFields?.username }}</div>
    <Field
      :class="[dataFields.birthDate ? 'date-checked' : 'date']"
      type="date"
      v-model="dataFields.birthDate"
    />
    <div class="register-form__error">{{ errorsFields?.birthDate }}</div>
    <fieldset>
      <legend>Пол:</legend>
      <Radio
        id="man"
        name="gender"
        label="Мужской"
        v-model="dataFields.gender"
      />
      <Radio
        id="woman"
        name="gender"
        label="Женский"
        v-model="dataFields.gender"
      />
      <Radio
        id="other"
        name="gender"
        label="Другой"
        v-model="dataFields.gender"
      />
    </fieldset>
    <div class="register-form__error">{{ errorsFields?.gender }}</div>
    <Field
      type="email"
      placeholder="Введите e-mail..."
      v-model.trim="dataFields.email"
    />
    <div class="register-form__error">{{ errorsFields?.email }}</div>
    <Field
      type="password"
      placeholder="Введите пароль..."
      v-model.trim="dataFields.password"
    />
    <div class="register-form__error">
      {{ errorsFields?.password }}
    </div>
    <div class="register-form__btns">
      <Button
        class="register-form__btns-register"
        :disabled="isDisabled"
        @click="register"
        >Зарегистрироваться</Button
      >
      <Button class="register-form__btns-auth" @click="showLoginForm"
        >Есть аккаунт</Button
      >
    </div>
  </form>
</template>

<script src="./RegisterForm"></script>
<style lang="scss" src="./RegisterForm.scss"></style>
