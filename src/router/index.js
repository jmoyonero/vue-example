import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/sobre-nosotros',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/escaperoom/crear',
        name: 'NewEscapeRoom',
        component: () => import('../views/escaperoom/NewEscapeRoom.vue')
    },
    {
        path: '/error',
        name: 'Error',
        component: () => import('../views/Error.vue')
    },
    {
        path: '/*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
