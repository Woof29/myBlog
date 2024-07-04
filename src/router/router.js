import { createRouter, createWebHashHistory } from "vue-router";

function keepDefaultView(to, from) {
  if (from.matched.length) {
    console.log("From:", from);
    console.log("To:", to);
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = () => import("@/pages/portfolio.vue");
  }
}

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
    path: "/portfolio/portfolioDetail",
    components: {
      default: () => import("@/pages/portfolio.vue"),
      modal: () => import("@/pages/portfolioDetail.vue"),
    },
    meta: {
      title: "portfolioDetail",
      showModal: true,
    },
    beforeEnter: [keepDefaultView],
  },
  {
    path: "/createPost",
    component: () => import("@/pages/createPost.vue"),
    meta: {
      title: "createPost",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
