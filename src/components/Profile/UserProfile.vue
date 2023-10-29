<template>
  <div class="user-profile">
    <table>
      <thead>
        <tr>
          <th colspan="2">
            Данные пользователя {{ user.firstName }} {{ user.lastName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Имя</td>
          <td>{{ user.firstName }}</td>
        </tr>
        <tr>
          <td>Фамилия</td>
          <td>{{ user.lastName }}</td>
        </tr>
        <tr>
          <td>Никнейм</td>
          <td>{{ user.username }}</td>
        </tr>
        <tr>
          <td>Дата рождения</td>
          <td>{{ user.birthDate }}</td>
        </tr>
        <tr>
          <td>Возраст</td>
          <td>{{ user.age }}</td>
        </tr>
        <tr>
          <td>Пол</td>
          <td>{{ user.gender }}</td>
        </tr>
        <tr>
          <td>Почта</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <Button title="Выйти из аккаунта" @click="logout">Выйти</Button>
  </div>
</template>

<script src="./UserProfile.js"></script>
<style lang="scss" src="./UserProfile.scss"></style>
