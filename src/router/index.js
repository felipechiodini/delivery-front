import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import ProductPreview from '../Layout/ProductPreview.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
    ]
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/product/:product_id',
    name: 'product.preview',
    component: ProductPreview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
