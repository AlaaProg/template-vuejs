<template>
<div >
    <div class="bg-white shadow-lg py-12 rounded-xl transition ease-in-out  hover:translate-y-1 hover:scale-110 ">
        <div class="border-l-8 border-blue-700 px-5">
            <h1 class="text-xl font-bold text-blue-600">
                <a target="_blank" :href="project.link">
                    {{ project.title }}
                </a>
            </h1>
            <h1 class="text-sm text-gray-800 font-semibold">
                {{ project.subtitle }}
            </h1>
        </div>
        <div class="p-6 font-mono text-gray-800">
            {{ project.desc }}
        </div>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    project: Object
})

</script>