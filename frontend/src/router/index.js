import VueRouter from "vue-router"
import Vue from "vue"

import SignUp from '@/components/SignUp'
import FrontPage from '@/components/FrontPage'
import HomePage from '@/components/HomePage'
import RequestPage from '@/components/RequestPage'
import DriverPage from '@/components/DriverPage'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'FrontPage',
        component: FrontPage,
      },
      
      {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
      },
  
      {
        path: '/Homepage',
        name: 'Homepage',
        component: HomePage,
        meta: {requiresAuth: true},

  
      },

      {
        path: '/Homepage/Requestpage',
        name: 'Requestpage',
        component: RequestPage,
  
      },
      {
        path: '/Homepage/Driverpage',
        name: 'Driverpage',
        component: DriverPage,
  
      }
    ]
  })

router.beforeEach( (to, from, next) => {
    if (to.meta.requiresAuth){
      //check authurization
      const auth = false
      if(auth){
        next({name:"FrontPage"})
      }else{
        next()
      }
    }else{
      next();
    }
  })

export default router