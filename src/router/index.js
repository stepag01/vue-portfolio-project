import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/graphicdesign',
      name: 'graphicdesign',
      component: () => import('../views/GraphicDesignView.vue')
    },
    {
      path: '/web',
      name: 'web',
      component: () => import('../views/WebView.vue')
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('../views/PhotographyView.vue')
    },
    {
      path: '/portraits',
      name: 'portraits',
      component: () => import('../views/PortraitsView.vue')
    },
    {
      path: '/nature',
      name: 'nature',
      component: () => import('../views/NatureView.vue')
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: () => import('../views/ArchitectureView.vue')
    },
    {
      path: '/labels',
      name: 'labels',
      component: () => import('../views/LabelsView.vue')
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('../views/ArtView.vue')
    },
    {
      path: '/websites',
      name: 'websites',
      component: () => import('../views/WebsitesView.vue')
    },
    {
      path: '/webdesign',
      name: 'webdesign',
      component: () => import('../views/WebdesignView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
