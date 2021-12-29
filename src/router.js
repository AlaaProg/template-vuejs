import {createRouter, createWebHistory} from "vue-router"



const homePage = () => import('./pages/Home.vue')
const projectPage = () => import('./pages/Project.vue')
const skillsPage = () => import('./pages/Skills.vue')
const contactPage = () => import('./pages/Contact.vue')

const routes = [

    { path: '/', component: homePage },
    { path: '/projects', component: projectPage },
    { path: '/skills', component: skillsPage },
    { path: '/contact', component: contactPage },
]
  

export default createRouter({
    history: createWebHistory("/template-vuejs/dist/"),
    linkExactActiveClass: 'is-active',
    routes, 
})