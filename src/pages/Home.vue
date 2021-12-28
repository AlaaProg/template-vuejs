<template>
    <div class="flex md:flex-row flex-col h-screen relative">
        <div data-aos="fade-right" data-aos-duration="2000" class="bg-gray-100  md:w-8/12 w-full  md:order-first order-last pt-28 md:block hidden">
        </div>  
        <div class="w-full p-20 pt-28 "></div>
        <div class="md:top-1/4 top-1/3 absolute w-full md:mt-0">
            <div class="flex xl:w-7/12 lg:w-9/12 w-full md:flex-row flex-col  md:bg-transparent bg-gray-100 justify-end md:mx-auto px-4">
                <div class="md:w-96 w-full md:-mt-0 -mt-20">
                    <div data-aos="fade-up-right" data-aos-duration="1000">
                        <profile-card></profile-card>
                    </div>
                </div>  
                <div class="w-full p-6 flex-1">
                    <div data-aos="fade-down" data-aos-duration="1000">
                        <h1 class="text-8xl">
                            Hello
                        </h1>
                        <p class="md:text-2xl text-xl md:m-4 my-3">
                            Here's who I am & what I do
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <div class="md:m-4 my-3 flex flex-col gap-4 font-mono ">
                            <p>
                                I am Ali Abdul Ghani currently based in Baghdad.
                                People call me ‘alimiracle’ and I am known by this name on the internet. This name came to me when I was a Solaris user.
                            </p>
                            <p class="text-gray-700 leading-6">
                                I live in Iraq. I graduated from college at the end of 2015 from the Department of English Literature, and not Computer Science (if you were thinking that). I was not allowed to get a degree in Computer Science in Iraq. The law here does not allow blind people to obtain a degree in Computer Science or any scientific stream such as Mathematics or Physics.
                            </p>
                            <p>
                                I like to tell jokes, I like it when people laugh until they can’t breathe, it makes me happy
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>

import ProfileCard from "./../components/ProfileCard.vue"


</script>