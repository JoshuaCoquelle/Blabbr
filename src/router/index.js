import Vue from 'vue'
import VueRouter from 'vue-router'
import AppScreen from '@/screens/AppScreen'
import AuthScreen from '@/screens/AuthScreen'
import auth from '@/api/auth'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppScreen',
      component: AppScreen,
      meta: { authGuard: true }
    },
    {
      path: '/login',
      name: 'AuthLoginScreen',
      component: AuthScreen
    },
    {
      path: '/register',
      name: 'AuthRegisterScreen',
      component: AuthScreen
    }
  ]
})

/**
 * Auth route handler.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authGuard)) {
    return auth.onAuthStateChanged(user => {
      if (user) {
        store.commit('setUser', user)
        next()
      } else {
        store.commit('setUser', null)
        next({ path: '/login' })
      }
    })
  }

  next()
})

export default router
