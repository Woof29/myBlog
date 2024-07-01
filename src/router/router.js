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
  {
    path: "/portfolio/:id",
    component: {
      modal: () => import("@/pages/portfolio.vue"),
    },
    meta: {
      title: "portfolioDetail",
    },
    beforeEnter: [keepDefaultView],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function keepDefaultView(to, from) {
  if (from.matched.length) {
    console.log(from);
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = () => import("@/pages/portfolio.vue");
  }
}

// router.afterEach((to, from) => {
//   const toDepth = to.path.split("/").length;
//   const fromDepth = from.path.split("/").length;
//   to.meta.transition = toDepth < fromDepth ? "slide" : "fade";
// });

export default router;
