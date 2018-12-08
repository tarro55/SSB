import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}


export default new Router({
    routes: [
       
        {
            path: '/',
            name: 'login',
            component: loadView('login')
        },
        {
            path: '/fogetPass',
            name: 'fogetPass',
            component: loadView('fogetPass')
        },
        {
            path: '/register',
            name: 'register',
            component: loadView('register')
        },
      
    ]
    
})
