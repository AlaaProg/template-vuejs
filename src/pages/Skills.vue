<template>
    <div class="bg-gray-50  py-28  ">
        <div class="container  mx-auto">
            <div class="flex flex-col items-center gap-12 justify-center">
                <div class="w-6/12 text-center pb-12 ">
                    <h1 class="text-4xl py-12 font-bold text-gray-600"> My Skills </h1>
                    <!-- <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos quod, labore provident atque quas repellendus ducimus voluptate iusto alias voluptatum ea tempore dolorem dolore inventore nobis consectetur laudantium ad?
                    </p> -->
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-12 w-3/4">
                    <template v-for="(skill, i) in Skills" :key="i">
                        <div class="transition ease-in-out  hover:translate-y-1 hover:scale-110 hover:md:scale-150 hover:z-40">
                            <skill-card :skill="skill" ></skill-card>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Skills from "./../data/skills.json";
import SkillCard from "./../components/SkillCard.vue"
import { Icon } from '@iconify/vue';

</script>