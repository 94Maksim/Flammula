import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage/MainPage.vue";
import LoginPage from "../views/LoginPage/LoginPage.vue";
import FavoritePage from "../views/FavoritePage/FavoritePage.vue";
import BasketPage from "../views/BasketPage/BasketPage.vue";
import CatalogPage from "../views/CatalogPage/CatalogPage.vue";
import JournalPage from "../views/JournalPage/JournalPage.vue";
import PaymentPage from "../views/PaymentPage/PaymentPage.vue";
import AboutPage from "../views/AboutPage/AboutPage.vue";
import CatalogItems from "../components/Catalog/CatalogItems/CatalogItems.vue";
import ProductPage from "../views/ProductPage/ProductPage.vue";
import ProfilePage from "../views/ProfilePage/ProfilePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/profile/:user",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: FavoritePage,
    },
    {
      path: "/basket",
      name: "basket",
      component: BasketPage,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogPage,
    },
    {
      path: "/catalog/:items",
      name: "catalogItems",
      component: CatalogItems,
    },
    {
      path: "/catalog/:items/:id",
      name: "catalogItemsId",
      component: ProductPage,
      props: (route) => ({ id: route.params.id, key: route.params.id }),
    },
    {
      path: "/journal",
      name: "journal",
      component: JournalPage,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
  ],
});

export default router;
