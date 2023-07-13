import API from "../../api/index.js";
import MainImage from "../../components/Main/MainImage/MainImage.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import MainGoods from "../../components/Main/MainGoods/MainGoods.vue";
import MainSign from "../../components/Main/MainSign/MainSign.vue";

export default {
  name: "MainPage",
  components: {
    MainImage,
    Loader,
    MainGoods,
    MainSign,
  },
  data() {
    return {
      isLoading: false,
      mainImages: null,
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
      dataGoods: null,
    };
  },
  methods: {
    getDataGoods(category) {
      API.products
        .getProductsByCategory(category)
        .then((data) => (this.dataGoods = data));
    },
    addClass(name) {
      this.category.forEach((el) => {
        if (el.className) {
          delete el.className;
        }
        if (el.name === name) {
          el.className = "--black";
        }
      });
    },
  },
  mounted() {
    this.category[0].className = "--black";
    API.images.getMainImages().then((images) => (this.mainImages = images));
    this.getDataGoods("newArrivals");
  },
  watch: {
    mainImages() {
      if (this.mainImages !== null) {
        this.isLoading = true;
      }
    },
  },
};
