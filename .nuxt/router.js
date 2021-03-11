import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b54592f = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _d6c0f74c = () => interopDefault(import('..\\pages\\archive\\index.vue' /* webpackChunkName: "pages/archive/index" */))
const _3180cbd3 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _7a3de0ec = () => interopDefault(import('..\\pages\\messages\\index.vue' /* webpackChunkName: "pages/messages/index" */))
const _5aedd53e = () => interopDefault(import('..\\pages\\mood\\index.vue' /* webpackChunkName: "pages/mood/index" */))
const _6d405af2 = () => interopDefault(import('..\\pages\\sitemap\\index.vue' /* webpackChunkName: "pages/sitemap/index" */))
const _b5964952 = () => interopDefault(import('..\\pages\\about\\_id.vue' /* webpackChunkName: "pages/about/_id" */))
const _838938e4 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _7000f26a = () => interopDefault(import('..\\pages\\tag\\_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _73e40eb8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _47023fc3 = () => interopDefault(import('..\\pages\\_category.vue' /* webpackChunkName: "pages/_category" */))
const _80bf3942 = () => interopDefault(import('..\\pages\\_category\\index.vue' /* webpackChunkName: "pages/_category/index" */))
const _58c49025 = () => interopDefault(import('..\\pages\\_category\\_categoryId.vue' /* webpackChunkName: "pages/_category/_categoryId" */))
const _5c9a70fb = () => interopDefault(import('..\\pages\\_category\\_categoryId\\_tagId.vue' /* webpackChunkName: "pages/_category/_categoryId/_tagId" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5b54592f,
    name: "about"
  }, {
    path: "/archive",
    component: _d6c0f74c,
    name: "archive"
  }, {
    path: "/login",
    component: _3180cbd3,
    name: "login"
  }, {
    path: "/messages",
    component: _7a3de0ec,
    name: "messages"
  }, {
    path: "/mood",
    component: _5aedd53e,
    name: "mood"
  }, {
    path: "/sitemap",
    component: _6d405af2,
    name: "sitemap"
  }, {
    path: "/about/:id",
    component: _b5964952,
    name: "about-id"
  }, {
    path: "/article/:id?",
    component: _838938e4,
    name: "article-id"
  }, {
    path: "/tag/:id?",
    component: _7000f26a,
    name: "tag-id"
  }, {
    path: "/",
    component: _73e40eb8,
    name: "index"
  }, {
    path: "/:category",
    component: _47023fc3,
    children: [{
      path: "",
      component: _80bf3942,
      name: "category"
    }, {
      path: ":categoryId",
      component: _58c49025,
      name: "category-categoryId",
      children: [{
        path: ":tagId?",
        component: _5c9a70fb,
        name: "category-categoryId-tagId"
      }]
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
