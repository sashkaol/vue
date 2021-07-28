import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../views/DashBoard.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import App from '../../src/App_.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            name: 'app'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard'
        },
        {
            path: '/dashboard/:page',
            component: Dashboard,
            name: 'dashboard:page'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/about*',
            component: About,
            name: 'about*'
        },
        {
            path: '/add/pay/?category=Food?cost=200',
            name: 'Food'
        },
        {
            path: '/add/pay/?category=Clothes?cost=1000',
            name: 'Clothes'
        },
        {
            path: '/add/pay/?category=Education?cost=8000',
            name: 'Education'
        },
        {
            path: '*',
            component: NotFound,
            name: 'NotFound'
        }
    ]
})