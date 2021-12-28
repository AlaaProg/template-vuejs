<template>
    <div class="py-20 md:h-screen flex items-center">
        <div data-aos="fade-right" data-aos-duration="2000" class="md:block hidden fixed h-screen bg-slate-50 w-7/12 z-0"></div>
        <div class="container mx-auto px-4 z-40 ">
            <div class="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center justify-center ">
                <div class="w-full">
                    <h1 class="text-5xl pt-10 py-5 font-semibold text-gray-800 ">
                        <span class="inline">Say hello</span>
                    </h1>
                    <p class="text-sm font-mono pb-10 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam ipsum neque quidem dicta animi non incidunt in, quo dolor.
                    </p>
                    <form class="space-y-6" action="#">
                        <div data-aos="fade-right" data-aos-duration="1200" >
                            <label for="fullname-input" class="block mb-2  text-sm font-medium text-gray-900">Fullname</label>
                            <input type="text" name="fullname" id="fullname-input" class="block p-2 w-full text-gray-900 bg-white rounded-lg outline-none border ring-0  border-gray-300 sm:text-xs ">
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1400" >
                            <label for="email-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="text" name="email" id="email-input" class="block p-2 w-full text-gray-900 bg-white rounded-lg  outline-none border ring-0 border-gray-200 sm:text-xs ">
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1600" >
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name="message" rows="4" class="block p-2 w-full text-sm text-gray-900 bg-white outline-none ring-0 rounded-lg border border-gray-300 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <div data-aos="zoom-out" data-aos-delay="300" data-aos-duration="2000">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                        </div>
                    </form>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" class="flex flex-col text-center w-full min-h-full p-4 bg-opacity-80 items-center justify-center bg-white rounded-xl  shadow-xl sm:p-6 ">
                    <div class="py-6" data-aos="fade-down" data-aos-duration="1500">
                        <Icon class="text-6xl  text-gray-500 text-center inline" icon="bi:phone" ></Icon>
                        <h1 class="font-semibold py-3">+(964) 0771 680 3406</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Icon class="text-6xl  text-gray-500 text-center inline" icon="carbon:email" ></Icon>
                        <h1 class="font-semibold py-3">alimiracle@riseup.net</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Icon } from '@iconify/vue';

</script>