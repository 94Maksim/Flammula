import Container from "../../components/shared/Container/Container.vue";
import UserProfile from "../../components/Profile/UserProfile.vue";
import Loader from "../../components/shared/Loader/Loader.vue";

export default {
  name: "ProfilePage",
  components: {
    Container,
    UserProfile,
    Loader,
  },
  methods: {
    logout() {
      this.$store.dispatch("authModule/logout");
      this.$router.push("/");
    },
  },
  computed: {
    user() {
      return this.$store.state.authModule.user;
    },
  },
};
