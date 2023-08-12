import Container from "../../components/shared/Container/Container.vue";
import JournalWrapper from "../../components/Journal/JournalWrapper/JournalWrapper.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import API from "../../api/index.js";
export default {
  name: "JournalPage",
  components: {
    Container,
    JournalWrapper,
    Loader,
  },
  data() {
    return {
      posts: null,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {
          value: "id",
          name: "По номеру",
        },
        {
          value: "title",
          name: "По названию",
        },
        {
          value: "body",
          name: "По описанию",
        },
      ],
      search: "",
      page: 1,
      limit: 10,
      totalPages: null,
      isPagination: false,
    };
  },
  methods: {
    getPosts(page, limit) {
      API.posts.getPosts(page, limit).then((response) => {
        this.posts = response.posts;
        this.posts = this.posts.map((post) => {
          API.users.getUserById(post.userId).then(
            (response) =>
              (post.userName = {
                firstName: response.firstName,
                lastName: response.lastName,
              })
          );
          return post;
        });
        this.totalPages = response.totalPages;
      });
    },
    getMorePosts() {
      this.page += 1;
      this.isPostsLoading = true;
      API.posts.getPosts(this.page, this.limit).then((response) => {
        const userPromises = response.posts.map((post) => {
          return API.users.getUserById(post.userId).then((response) => {
            return {
              ...post,
              userName: {
                firstName: response.firstName,
                lastName: response.lastName,
              },
            };
          });
        });
        Promise.all(userPromises).then((postsWithUser) => {
          this.posts = [...this.posts, ...postsWithUser];
		  this.isPostsLoading = false;
        });
      });
    },
    changeOption(target) {
      this.selectedSort = target;
    },
    searchPosts(target) {
      this.search = target;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.posts = null;
      this.users = null;
      this.selectedSort = "";
      this.search = "";
      this.getPosts(this.page, this.limit);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.getPosts(this.page, this.limit);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        if (this.selectedSort === "id") {
          return post1[this.selectedSort] - post2[this.selectedSort];
        } else {
          return post1[this.selectedSort]?.localeCompare(
            post2[this.selectedSort]
          );
        }
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
