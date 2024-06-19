import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "Index",
      transition: null,
    },
  },
  {
    path: "/about",
    component: () => import("@/pages/about.vue"),
    meta: {
      title: "About",
      transition: "slide",
    },
  },
  {
    path: "/blog",
    component: () => import("@/pages/blog.vue"),
    meta: {
      title: "Blog",
      transition: "slide",
    },
  },
  {
    path: "/portfolio",
    component: () => import("@/pages/portfolio.vue"),
    meta: {
      title: "Portfolio",
      transition: "slide",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.afterEach((to, from) => {
//   const toDepth = to.path.split("/").length;
//   const fromDepth = from.path.split("/").length;
//   to.meta.transition = toDepth < fromDepth ? "slide" : "slide";
// });

export default router;
