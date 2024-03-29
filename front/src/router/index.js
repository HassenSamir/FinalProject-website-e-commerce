import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Livraison from '../components/Livraison.vue'
import Search from '../components/Search.vue'
import Article from '../components/Article.vue'
import Contact from '../components/Contact.vue'
import Favoris from '../components/Favoris.vue'
import Paiement from '../components/Paiement.vue'
import Success from '../components/Success.vue'
import Cancel from '../components/Cancel.vue'
import Profil from '../components/Profil/Profil.vue'
import Commandes from '../components/Profil/Commandes.vue'
import Informations from '../components/Profil/Informations.vue'
import MotDePasse from '../components/Profil/MotDePasse.vue'
import CartesPaiement from '../components/Profil/CartesPaiement.vue'
import Admin from '../components/Profil/Admin.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/commande',
      name: 'cart',
      component: Cart
    },
    {
      path: '/commande/livraison',
      name: 'livraison',
      component: Livraison,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: Favoris
    },
    {
      path: '/commande/paiement',
      name: 'paiement',
      component: Paiement,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: Cancel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profil/commandes',
      name: 'commandes',
      component: Commandes
    },
    {
      path: '/profil/informations',
      name: 'informations',
      component: Informations
    },
    {
      path: '/profil/cartesdepaiement',
      name: 'cartesdepaiement',
      component: CartesPaiement
    },
    {
      path: '/profil/motdepasse',
      name: 'MotDePasse',
      component: MotDePasse
    },
    {
      path: '/profil/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
