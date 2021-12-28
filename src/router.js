import {createRouter, createWebHistory} from "vue-router"
import { defineAsyncComponent } from "vue"


const homePage = defineAsyncComponent(() => import('./pages/Home.vue'))
const projectPage = defineAsyncComponent(() => import('./pages/Project.vue'))
const servicesPage = defineAsyncComponent(() => import('./pages/Services.vue'))

const routes = [

    { path: '/', component: homePage },
    { path: '/projects', component: projectPage },
    { path: '/services', component: servicesPage },
]
  

export default createRouter({
    history: createWebHistory("/template-vuejs/dist/"),
    linkExactActiveClass: 'is-active',
    routes, 
})