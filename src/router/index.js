import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ImagesIndex from "../views/ImagesIndex.vue";
import ImagesShow from "../views/ImagesShow.vue";
import GalleriesIndex from "../views/GalleriesIndex.vue";
import GalleriesShow from "../views/GalleriesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/images", name: "images-index", component: ImagesIndex },
  { path: "/images/:id", name: "images-show", component: ImagesShow },
  { path: "/galleries", name: "galleries-index", component: GalleriesIndex },
  { path: "/galleries/:id", name: "galleries-show", component: GalleriesShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
