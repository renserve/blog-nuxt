import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d882776 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _adce463e = () => interopDefault(import('..\\pages\\archive\\index.vue' /* webpackChunkName: "pages/archive/index" */))
const _03b49a1a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _1620cd76 = () => interopDefault(import('..\\pages\\messages\\index.vue' /* webpackChunkName: "pages/messages/index" */))
const _5de23b8c = () => interopDefault(import('..\\pages\\mood\\index.vue' /* webpackChunkName: "pages/mood/index" */))
const _444da9e4 = () => interopDefault(import('..\\pages\\sitemap\\index.vue' /* webpackChunkName: "pages/sitemap/index" */))
const _18c58f5e = () => interopDefault(import('..\\pages\\about\\_id.vue' /* webpackChunkName: "pages/about/_id" */))
const _df219c56 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _6326079e = () => interopDefault(import('..\\pages\\tag\\_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _ead29b5e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _93d12248 = () => interopDefault(import('..\\pages\\_category.vue' /* webpackChunkName: "pages/_category" */))
const _c9b493b4 = () => interopDefault(import('..\\pages\\_category\\index.vue' /* webpackChunkName: "pages/_category/index" */))
const _cb071ca8 = () => interopDefault(import('..\\pages\\_category\\_categoryId.vue' /* webpackChunkName: "pages/_category/_categoryId" */))
const _4cf7db82 = () => interopDefault(import('..\\pages\\_category\\_categoryId\\_tagId.vue' /* webpackChunkName: "pages/_category/_categoryId/_tagId" */))

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
    component: _2d882776,
    name: "about"
  }, {
    path: "/archive",
    component: _adce463e,
    name: "archive"
  }, {
    path: "/login",
    component: _03b49a1a,
    name: "login"
  }, {
    path: "/messages",
    component: _1620cd76,
    name: "messages"
  }, {
    path: "/mood",
    component: _5de23b8c,
    name: "mood"
  }, {
    path: "/sitemap",
    component: _444da9e4,
    name: "sitemap"
  }, {
    path: "/about/:id",
    component: _18c58f5e,
    name: "about-id"
  }, {
    path: "/article/:id?",
    component: _df219c56,
    name: "article-id"
  }, {
    path: "/tag/:id?",
    component: _6326079e,
    name: "tag-id"
  }, {
    path: "/",
    component: _ead29b5e,
    name: "index"
  }, {
    path: "/:category",
    component: _93d12248,
    children: [{
      path: "",
      component: _c9b493b4,
      name: "category"
    }, {
      path: ":categoryId",
      component: _cb071ca8,
      name: "category-categoryId",
      children: [{
        path: ":tagId?",
        component: _4cf7db82,
        name: "category-categoryId-tagId"
      }]
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
