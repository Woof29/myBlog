import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "Index",
    },
  },
  {
    path: "/about",
    component: () => import("@/pages/about.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/blog",
    component: () => import("@/pages/blog.vue"),
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/portfolio",
    component: () => import("@/pages/portfolio.vue"),
    meta: {
      title: "Portfolio",
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
//   to.meta.transition = toDepth < fromDepth ? "slide" : "fade";
// });

export default router;
