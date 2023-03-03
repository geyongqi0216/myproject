import Router from 'vue-router'
import Vue from 'vue'
import Home from '../components/home.vue'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home
                }
            ]
        }
    ]
})

export default router