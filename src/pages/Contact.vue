<template>
    <div class="py-20 md:h-screen flex items-center">
        <div data-aos="fade-right" data-aos-duration="2000" class="md:block hidden fixed h-screen bg-slate-50 w-1/2 z-0"></div>
        <div class="container mx-auto px-4 z-40">
            <div class="flex items-center justify-center lg:w-1/2 w-11/12 mx-auto  ">
                <div data-aos="fade-left" data-aos-duration="1500" class="flex flex-col text-center w-full min-h-full p-16 bg-opacity-80 items-center justify-center bg-white rounded-xl  shadow-xl">
                    <h1 class="py-4 text-4xl font-semibold font-mono text-gray-600"> Contact Me </h1>
                    <div class="py-6" data-aos="fade-down" data-aos-duration="1500">
                        <Icon class="text-6xl  text-gray-500 text-center inline" icon="bi:phone" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Phone Number" href="tel:07716803406" class="hover:text-blue-500 cursor-pointer ">
                                +(964) 0771 680 3406
                            </a>
                        </h1>
                    </div>
                    <div class="py-6" data-aos="fade-up" data-aos-duration="2000">
                        <Icon class="text-6xl  text-red-400 text-center inline" icon="carbon:email" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Email" href="mailto:alimiracle@riseup.net" class="hover:text-blue-500 cursor-pointer ">
                                alimiracle@riseup.net
                            </a>
                        </h1>
                    </div>
                    <div class="py-6" data-aos="fade-up" data-aos-duration="2000">
                        <Icon class="text-6xl  text-blue-500 text-center inline" icon="ei:sc-telegram" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Telegram" href="https://t.me/alimiracle" target="_blank" class="hover:text-blue-500 cursor-pointer ">
                                @alimiracle
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { Icon } from '@iconify/vue';

</script>