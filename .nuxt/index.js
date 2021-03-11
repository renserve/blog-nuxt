import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_59f1d7ae from 'nuxt_plugin_workbox_59f1d7ae' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_meta_8b6e6f82 from 'nuxt_plugin_meta_8b6e6f82' // Source: .\\pwa\\meta.js (mode: 'all')
import nuxt_plugin_marked_38210f95 from 'nuxt_plugin_marked_38210f95' // Source: ..\\plugins\\marked.js (mode: 'all')
import nuxt_plugin_highlight_54dd1b39 from 'nuxt_plugin_highlight_54dd1b39' // Source: ..\\plugins\\highlight.js (mode: 'all')
import nuxt_plugin_gravatar_5847583d from 'nuxt_plugin_gravatar_5847583d' // Source: ..\\plugins\\gravatar.js (mode: 'all')
import nuxt_plugin_filter_3b4804c9 from 'nuxt_plugin_filter_3b4804c9' // Source: ..\\plugins\\filter.js (mode: 'all')
import nuxt_plugin_globalcomponent_c8df52e4 from 'nuxt_plugin_globalcomponent_c8df52e4' // Source: ..\\plugins\\global-component.js (mode: 'all')
import nuxt_plugin_copy_1fa40e2c from 'nuxt_plugin_copy_1fa40e2c' // Source: ..\\plugins\\copy.js (mode: 'client')
import nuxt_plugin_vuexpersist_25bdab30 from 'nuxt_plugin_vuexpersist_25bdab30' // Source: ..\\plugins\\vuex-persist.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"点滴人生","titleTemplate":"%s","meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"Cache-Control"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"前端，JavaScript，博客，Node，Vue"},{"name":"author","content":"1249485588@qq.com"},{"hid":"description","name":"description","content":"博客，随笔，文章"}],"link":[{"rel":"shortcut icon","type":"image\u002Fx-icon","href":"\u002F\u002Frenserve.com\u002Ffavicon.png"},{"rel":"stylesheet","href":"\u002F\u002Fat.alicdn.com\u002Ft\u002Ffont_2079289_r2fige13dde.css"},{"rel":"dns-prefetch","href":"\u002F\u002Frenserve.com"},{"rel":"dns-prefetch","href":"\u002F\u002Fblog.renserve.com"}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjs-cookie\u002F1.5.0\u002Fjs.cookie.min.js"},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmarked\u002F0.7.0\u002Fmarked.min.js"}],"noscript":[{"innerHTML":"This website requires JavaScript."}],"__dangerouslyDisableSanitizers":["script"],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_59f1d7ae === 'function') {
    await nuxt_plugin_workbox_59f1d7ae(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_8b6e6f82 === 'function') {
    await nuxt_plugin_meta_8b6e6f82(app.context, inject)
  }

  if (typeof nuxt_plugin_marked_38210f95 === 'function') {
    await nuxt_plugin_marked_38210f95(app.context, inject)
  }

  if (typeof nuxt_plugin_highlight_54dd1b39 === 'function') {
    await nuxt_plugin_highlight_54dd1b39(app.context, inject)
  }

  if (typeof nuxt_plugin_gravatar_5847583d === 'function') {
    await nuxt_plugin_gravatar_5847583d(app.context, inject)
  }

  if (typeof nuxt_plugin_filter_3b4804c9 === 'function') {
    await nuxt_plugin_filter_3b4804c9(app.context, inject)
  }

  if (typeof nuxt_plugin_globalcomponent_c8df52e4 === 'function') {
    await nuxt_plugin_globalcomponent_c8df52e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_copy_1fa40e2c === 'function') {
    await nuxt_plugin_copy_1fa40e2c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuexpersist_25bdab30 === 'function') {
    await nuxt_plugin_vuexpersist_25bdab30(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
