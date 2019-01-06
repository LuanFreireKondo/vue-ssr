import Vue from 'vue'
import App from './app'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

export function createApp () {
  // create router and store instances
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store s
  sync(store, router)

  const app = new Vue({
    // inject router into root Vue instance
    router,
    store,
    render: h => h(App)
  })

  // return both the app and the router
  return { app, router, store }
}
