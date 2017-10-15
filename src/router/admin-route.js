/**
 * Created by amarsoft on 2017/10/15.
 */
import Login from '../components/admin/login'
import Desktop from '../components/admin/desktop'

export default [
  {
    path: '/admin/',
    name: 'adminDesktop',
    component: Desktop
  }, {
    path: '/admin/login',
    name: 'adminLogin',
    component: Login
  }
]
