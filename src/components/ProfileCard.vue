<template>
    <div>
        <div class="shadow-lg flex flex-col items-center rounded-t-lg text-center  p-6 w-full bg-gray-50">
            <img class="rounded-full w-48 h-48 object-center object-fill" src="./../assets/ali_miracle.jpg" alt="">
            <h1 class="text-3xl w-64 mt-10 font-bold ">Ali Abdul Ghani</h1>  
            <div class="bg-blue-600 w-14 h-1 my-8"></div>
            <h1 class="capitalize font-semibold text-gray-600 leading-5 ">
                Programmer <span class="text-gray-500 font-bold">,</span>
                SysAdmin <span class="text-gray-500 font-bold">,</span> 
                Free Software Activist 
            </h1>
        </div>
        <div class="bg-white text-center w-full rounded-b shadow-lg">
            <ul class="flex flex-row gap-8 justify-center p-4">
                <li>
                    <a href="https://www.facebook.com/ali.miracle.79" target="_blank" class="hover:text-blue-500 cursor-pointer text-xl">
                        <Icon icon="fa:facebook"></Icon>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/alimiracle" target="_blank" class="hover:text-blue-500 cursor-pointer text-xl">
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