import { createRouter, createWebHashHistory } from 'vue-router';

function keepDefaultView(to, from) {
  if (from.matched.length) {
    // console.log('From:', from);
    // console.log('To:', to);
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = () => import('@/pages/portfolio.vue');
  }
}

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
    path: '/portfolio/:id',
    name: 'PortfolioDetail',
    components: {
      default: () => import('@/pages/portfolio.vue'),
      modal: () => import('@/pages/portfolioDetail.vue'),
    },
    meta: {
      title: 'PortfolioDetail',
      showModal: true,
      scrollPos: {
        top: 0,
      },
    },
    beforeEnter: [keepDefaultView],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
