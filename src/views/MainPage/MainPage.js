import axios from "axios";
import MainImage from "../../components/Main/MainImage/MainImage.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import MainGoods from "../../components/Main/MainGoods/MainGoods.vue";

export default {
  name: "MainPage",
  components: {
    MainImage,
    Loader,
    MainGoods,
  },
  data() {
    return {
      isLoading: false,
      mainImage: null,
      category: [
        {
          name: "newArrivals",
          title: "Новинки",
        },
        {
          name: "tops",
          title: "Лучшее",
        },
        {
          name: "home-decoration",
          title: "Для дома",
        },
        {
          name: "lighting",
          title: "Освещение",
        },
        {
          name: "smartphones",
          title: "Смартфоны",
        },
        {
          name: "laptops",
          title: "Ноутбуки",
        },
      ],
    };
  },
  methods: {
    async fetchImage() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos/8"
      );
      this.mainImage = response.data;
    },
  },
  mounted() {
    this.fetchImage();
  },
  watch: {
    mainImage() {
      if (this.mainImage !== null) {
        this.isLoading = true;
      }
    },
  },
};
