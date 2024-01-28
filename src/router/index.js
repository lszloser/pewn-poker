import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TableView from "../views/TableView.vue";
import JoinTableView from "../views/JoinTableView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tables/:id",
    component: TableView,
  },
  {
    path: "/tables/:id/join",
    component: JoinTableView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
