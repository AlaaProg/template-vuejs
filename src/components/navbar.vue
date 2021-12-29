<template>
    <nav class="bg-white z-50 shadow fixed  w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <router-link tag="a" to="/" class="flex">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Ali Miracle
                </span>
            </router-link>
        <div class="flex md:order-1">
            <button @click="toggle=!toggle" data-collapse-toggle="#mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div class="justify-between items-end w-full md:flex md:w-auto md:order-2" :class="{'hidden': !toggle}"  id="mobile-menu-4">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li v-for="item in itemsNavbar" :key="item.text">
                    <router-link 
                        :to="item.link"
                        class="nav-link" aria-current="page"
                    >
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>

<script setup>

import {ref, reactive} from "vue" 

const toggle = ref(false) 
const itemsNavbar = reactive([
    {
        text:"Home",
        link: "/"
    },
    {
        text:"Services",
        link: "/services"
    },
    {
        text:"Projects",
        link: "/projects"
    },
    {
        text:"Contact",
        link: "/contact"
    },
])

</script>
