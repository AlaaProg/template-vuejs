<template>
<div  data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
    <div class="text-center shadow-lg cursor-pointer bg-white rounded-xl py-14 px-2 flex flex-col items-center gap-y-4 ">
        <Icon class="text-5xl text-gray-600" :icon="service.icon"></Icon>
        <h1 class="font-bold text-gray-700">
            {{ service.title }}
        </h1>
        
        <p class="font-mono md:text-sm text-gray-600">
            {{ service.desc }}
        </p>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

defineProps({
    service: Object
})

</script>