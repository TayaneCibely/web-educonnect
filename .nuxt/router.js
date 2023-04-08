import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _714c440e = () => interopDefault(import('../pages/discente.vue' /* webpackChunkName: "pages/discente" */))
const _247e86fc = () => interopDefault(import('../pages/discente/create.vue' /* webpackChunkName: "pages/discente/create" */))
const _4d8be2b8 = () => interopDefault(import('../pages/discente/list.vue' /* webpackChunkName: "pages/discente/list" */))
const _14b1ee8f = () => interopDefault(import('../pages/discente/edit/_discente.vue' /* webpackChunkName: "pages/discente/edit/_discente" */))
const _6c6654d4 = () => interopDefault(import('../pages/discente-dash.vue' /* webpackChunkName: "pages/discente-dash" */))
const _5286ae76 = () => interopDefault(import('../pages/disciplina.vue' /* webpackChunkName: "pages/disciplina" */))
const _667cd565 = () => interopDefault(import('../pages/disciplina/create.vue' /* webpackChunkName: "pages/disciplina/create" */))
const _2edd0447 = () => interopDefault(import('../pages/disciplina/list.vue' /* webpackChunkName: "pages/disciplina/list" */))
const _4134eaa2 = () => interopDefault(import('../pages/disciplina/edit/_disciplina.vue' /* webpackChunkName: "pages/disciplina/edit/_disciplina" */))
const _20880678 = () => interopDefault(import('../pages/docente.vue' /* webpackChunkName: "pages/docente" */))
const _3c8ad723 = () => interopDefault(import('../pages/docente/create.vue' /* webpackChunkName: "pages/docente/create" */))
const _275c5d85 = () => interopDefault(import('../pages/docente/list.vue' /* webpackChunkName: "pages/docente/list" */))
const _d13b2d3e = () => interopDefault(import('../pages/docente/edit/_docente.vue' /* webpackChunkName: "pages/docente/edit/_docente" */))
const _17ef2477 = () => interopDefault(import('../pages/docente-dash.vue' /* webpackChunkName: "pages/docente-dash" */))
const _29ad2e12 = () => interopDefault(import('../pages/turma/list.vue' /* webpackChunkName: "pages/turma/list" */))
const _4c504cc7 = () => interopDefault(import('../pages/turma/_disciplina.vue' /* webpackChunkName: "pages/turma/_disciplina" */))
const _c5852690 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/discente",
    component: _714c440e,
    name: "discente",
    children: [{
      path: "create",
      component: _247e86fc,
      name: "discente-create"
    }, {
      path: "list",
      component: _4d8be2b8,
      name: "discente-list"
    }, {
      path: "edit/:discente?",
      component: _14b1ee8f,
      name: "discente-edit-discente"
    }]
  }, {
    path: "/discente-dash",
    component: _6c6654d4,
    name: "discente-dash"
  }, {
    path: "/disciplina",
    component: _5286ae76,
    name: "disciplina",
    children: [{
      path: "create",
      component: _667cd565,
      name: "disciplina-create"
    }, {
      path: "list",
      component: _2edd0447,
      name: "disciplina-list"
    }, {
      path: "edit/:disciplina?",
      component: _4134eaa2,
      name: "disciplina-edit-disciplina"
    }]
  }, {
    path: "/docente",
    component: _20880678,
    name: "docente",
    children: [{
      path: "create",
      component: _3c8ad723,
      name: "docente-create"
    }, {
      path: "list",
      component: _275c5d85,
      name: "docente-list"
    }, {
      path: "edit/:docente?",
      component: _d13b2d3e,
      name: "docente-edit-docente"
    }]
  }, {
    path: "/docente-dash",
    component: _17ef2477,
    name: "docente-dash"
  }, {
    path: "/turma/list",
    component: _29ad2e12,
    name: "turma-list"
  }, {
    path: "/turma/:disciplina?",
    component: _4c504cc7,
    name: "turma-disciplina"
  }, {
    path: "/",
    component: _c5852690,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
