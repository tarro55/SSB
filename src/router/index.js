import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}


export default new Router({
    routes: [
       
        {
            path: '/login',
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
            path: '/registerMember',
            name: 'registerMember',
            component: loadView('registerMember')
        },

        {
            path: '/test',
            name: 'test',
            component: loadView('test')
         },
        {
            path: '/indexDrive',
            name: 'indexDrive',
            component: loadView('indexDrive')
        },
        {
            path: '/paidlist',
            name: 'paidlist',
            component: loadView('paidlist')
        }, 
        {
            path: '/profile',
            name: 'profile',
            component: loadView('profile')
        }, 
        {
            path: '/profileDrive',
            name: 'profileDrive',
            component: loadView('profileDrive')
        }, 
        {
            path: '/profileStd',
            name: 'profileStd',
            component: loadView('profileStd')
        }, 
        {
            path: '/status',
            name: 'status',
            component: loadView('status')
        }, 
        {
            path: '/lookprofileStd',
            name: 'lookprofileStd',
            component: loadView('lookprofileStd')
        }, 
        {
            path: '/indexMember',
            name: 'indexMember',
            component: loadView('indexMember')
        },
        {
            path: '/map',
            name: 'map',
            component: loadView('map')
        },
        {
            path: '/map-test',
            name: 'map-test',
            component: loadView('map-test')
        },
    ]
    
})
