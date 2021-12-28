<template>
    <div>
        <div class="shadow-lg flex flex-col items-center rounded-t-lg text-center  p-6 w-full bg-gray-50">
            <img class="rounded-full " src="https://static.wixstatic.com/media/2e2a49_bd3a1599bc1b4265a01b2754b99b8536~mv2_d_5760_3840_s_4_2.jpeg/v1/crop/x_2703,y_43,w_2199,h_2205/fill/w_205,h_205,al_c,q_80,usm_0.66_1.00_0.01/AdobeStock_230407429.webp" alt="">
            <h1 class="text-3xl w-64 mt-10 font-bold">Ali Abdul Ghani</h1>  
            <div class="bg-blue-600 w-14 h-1 my-8"></div>
            <h1 class="uppercase text-xl text-gray-400 leading-5">
                Software Activist
            </h1>
        </div>
        <div class="bg-white text-center w-full rounded-b shadow-lg">
            <ul class="flex flex-row gap-8 justify-center p-4">
                <li>
                    <a target="_blank" class="hover:text-blue-500 cursor-pointer text-xl">
                        <Icon icon="fa:facebook"></Icon>
                    </a>
                </li>
                <li>
                    <a target="_blank" class="hover:text-blue-500 cursor-pointer text-xl">
                        <Icon icon="fa:telegram"></Icon>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>