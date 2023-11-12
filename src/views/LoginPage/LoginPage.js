import LoginWrapper from "../../components/Login/LoginWrapper/LoginWrapper.vue";
import Container from "../../components/shared/Container/Container.vue";
export default {
  name: "LoginPage",
  components: {
    LoginWrapper,
    Container,
  },
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    registerUser(userData) {
      this.$store.dispatch("authModule/registerUser", userData);
    },
  },
  computed: {
    user() {
      return this.$store.state.authModule.user;
    },
  },
  watch: {
    user() {
      this.currentUser = this.user;
      if (this.user) {
        this.$router.push("/");
      }
    },
  },
};
