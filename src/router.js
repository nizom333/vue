import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Vacancy from './views/Vacancy'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'Главная',
            path: '/',
            component: Home
        },
        {
            name: 'Вакансии',
            path: '/vacancy',
            component: Vacancy
        },
        {
            name: 'О Приложение',
            path: '/about',
            component: About
        },
    ]
})
