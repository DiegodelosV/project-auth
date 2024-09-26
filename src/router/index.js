import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistroView from "../views/RegistroView.vue";
import LoginView from "../views/LoginView.vue";

import { getAuth } from "firebase/auth"; //importar firebase "auth" para uso del la const auth

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      meta: { requiresAuth: true }, //permite el acceso solo para usuarios autenticados
      component: () => import("../views/AboutView.vue"),
      
    },
    {
      path: "/registro",
      name: "registro",
      component: RegistroView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => { //"guardian beforeEach" para el acceso solo para usuarios autenticados
  const auth = getAuth();
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
