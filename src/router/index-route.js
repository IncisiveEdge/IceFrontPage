import Home from '../components/index/Home'
import Login from '../components/index/Login'
import Register from '../components/index/Register'
import Logout from '../components/index/Logout'
import User from '../components/index/User'
import Error from '../components/index/Error'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/reg',
    name: 'Register',
    component: Register
  }, {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }, {
    path: '/u/:user',
    name: 'User',
    component: User
  }, {
    path: '*',
    name: 'Error',
    component: Error
  }
]
