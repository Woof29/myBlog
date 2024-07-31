import { createRouter, createWebHistory } from 'vue-router';

const keepDefaultView = (to, from) => {
  if (from.matched.length) {
    // console.log('From:', from);
    // console.log('To:', to);
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = () => import('@/pages/portfolio.vue');
  }
};

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: 'Index',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/pages/blog.vue'),
    meta: {
      title: 'Blog',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/pages/portfolio.vue'),
    meta: {
      title: 'Portfolio',
    },
  },
  {
    path: '/blog/:id',
    name: 'blogDetail',
    components: {
      default: () => import('@/pages/blog.vue'),
      modal: () => import('@/pages/_detail.vue'),
    },
    meta: {
      title: 'blogDetail',
      showModal: true,
      scrollPos: {
        top: 0,
      },
    },
    beforeEnter: [keepDefaultView],
  },
  {
    path: '/portfolio/:id',
    name: 'portfolioDetail',
    components: {
      default: () => import('@/pages/portfolio.vue'),
      modal: () => import('@/pages/_detail.vue'),
    },
    meta: {
      title: 'portfolioDetail',
      showModal: true,
      scrollPos: {
        top: 0,
      },
    },
    beforeEnter: [keepDefaultView],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
