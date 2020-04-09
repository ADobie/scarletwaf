import Vue from 'vue'
import VueRouter from 'vue-router'
import WafDetails from '../views/WafDetails'
import RuleConfig from '../views/RuleConfig'
import ScarletPot from '../views/ScarletPot'
import Message from '../views/Message'
import Login from '../views/Login'
import Register from '../views/Register'
import Test from '../views/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WafDetails',
    component: WafDetails
  },
  {
    path: '/RuleConfig',
    name: 'RuleConfig',
    component: RuleConfig
  },
  {
    path: '/ScarletPot',
    name: 'ScarletPot',
    component: ScarletPot
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
