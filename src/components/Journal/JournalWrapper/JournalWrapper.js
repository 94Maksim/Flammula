import PostCard from "../../shared/PostCard/PostCard.vue";
import Pagination from "../../shared/Pagination/Pagination.vue";
import Button from "../../shared/Button/Button.vue";
import Select from "../../shared/Select/Select.vue";
import Field from "../../shared/Field/Field.vue";
import Loader from "../../shared/Loader/Loader.vue";
export default {
  name: "JournalWrapper",
  components: {
    PostCard,
    Pagination,
    Button,
    Select,
    Field,
    Loader,
  },
  props: {
    posts: {
      type: Array,
      require: true,
    },
    isPostsLoading: {
      type: Boolean,
      require: true,
    },
    page: {
      type: Number,
      require: true,
    },
    totalPages: {
      type: Number,
      require: true,
    },
    sortOptions: {
      type: Array,
      require: true,
    },
    isPagination: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    changeOption(target) {
      this.$emit("changeOption", target);
    },
    changePage(pageNumber) {
      this.$emit("changePage", pageNumber);
    },
  },
  watch: {
    search() {
      this.$emit("search", this.search);
    },
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 0.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.posts) {
        this.$emit("crossObserver");
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs["observer"]);
  },
};
