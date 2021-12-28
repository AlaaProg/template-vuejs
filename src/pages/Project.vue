<template>
<div class="bg-gray-50 py-28 ">
    <div class="container mx-auto">
        <div class="flex flex-col items-center gap-y-12 justify-center">
            <div class="w-6/12 text-center pb-12 ">
                <h1 class="text-4xl py-12 font-bold text-gray-600"> My Projects </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos quod, labore provident atque quas repellendus ducimus voluptate iusto alias voluptatum ea tempore dolorem dolore inventore nobis consectetur laudantium ad?
                </p>
            </div>
            <div v-for="(project, i) in Projects" :key=i class="md:w-6/12 w-full px-2">
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <project-card :project="project" ></project-card>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import Projects from "./../data/projects.json";
import ProjectCard from "./../components/ProjectCard.vue"

</script>