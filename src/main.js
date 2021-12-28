import { createApp, h } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./assets/css/main.css"
import App from './App.vue'
import router from "./router.js"





const app = createApp({
    render: ()=> h(App),
    created: () => {
        AOS.init()
    }
})
app.use(router)
app.mount('#app')
