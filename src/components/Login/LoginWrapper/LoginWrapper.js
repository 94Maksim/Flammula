import LoginForm from "../LoginForm/LoginForm.vue";
import RegisterForm from "../RegisterForm/RegisterForm.vue";

export default {
  name: "LoginWrapper",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      isRegister: false,
    };
  },
  methods: {
    switchForm(isSwitcher) {
      this.isRegister = isSwitcher;
    },
    registerUser(userData) {
      this.$emit("registerUser", userData);
    },
  },
};
