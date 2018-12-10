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
            path: '/newPass',
            name: 'newPass',
            component: loadView('newPass')
        },
        {
            path: '/type',
            name: 'type',
            component: loadView('type')
        },
        {
            path: '/registerDriver',
            name: 'registerDriver',
            component: loadView('registerDriver')
        },
        {
            path: '/test',
            name: 'test',
            component: loadView('test')
         },
         {
            path: '/index',
            name: 'index',
            component: loadView('index')
             },
      
    ]
    
})
