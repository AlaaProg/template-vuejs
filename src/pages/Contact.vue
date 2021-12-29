<template>
    <div class="py-20 md:h-screen flex items-center">
        <div data-aos="fade-right" data-aos-duration="2000" class="md:block hidden fixed h-screen bg-slate-50 w-1/2 z-0"></div>
        <div class="container mx-auto px-4 z-40">
            <div class="flex  flex-col items-start justify-center lg:w-10/12 md:w-11/12 w-full mx-auto  ">
                <h1 class="py-12 mx-4 text-5xl select-none font-bold font-mono text-gray-600"> Contact Me </h1>
                <div data-aos="fade-left" data-aos-duration="1500" class="flex lg:flex-row flex-col text-center shadow-xl p-28 bg-white rounded-xl ">
                    <div class="p-6  gap-6" data-aos="fade-right" data-aos-duration="1500">
                        <Icon class="text-6xl  text-gray-500 text-center inline" icon="bi:phone" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Phone Number" href="tel:07716803406" class="hover:text-blue-500 cursor-pointer ">
                                +(964) 0771 680 3406
                            </a>
                        </h1>
                    </div>
                    <div class="p-6  gap-6" data-aos="fade-right" data-aos-duration="2000">
                        <Icon class="text-6xl  text-red-400 text-center inline" icon="carbon:email" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Email" href="mailto:alimiracle@riseup.net" class="hover:text-blue-500 cursor-pointer ">
                                alimiracle@riseup.net
                            </a>
                        </h1>
                    </div>
                    <div class="p-6  gap-6" data-aos="fade-right" data-aos-duration="2000">
                        <Icon class="text-6xl  text-blue-500 text-center inline" icon="ei:sc-telegram" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Telegram" href="https://t.me/alimiracle" target="_blank" class="hover:text-blue-500 cursor-pointer ">
                                @alimiracle
                            </a>
                        </h1>
                    </div>
                    <div class="p-6  gap-6" data-aos="fade-left" data-aos-duration="2000">
                        <Icon class="text-6xl  text-blue-500 text-center inline" icon="bi:mastodon" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Telegram" href="https://mastodon.social/web/@alimiracle@floss.social" target="_blank" class="hover:text-blue-500 cursor-pointer ">
                                @alimiracle@floss.social
                            </a>
                        </h1>
                    </div>
                    <div class="p-6  gap-6" data-aos="fade-left" data-aos-duration="2000">
                        <Icon class="text-6xl  text-blue-500 text-center inline" icon="bi:chat-square-dots" ></Icon>
                        <h1 class="font-semibold py-3 text-blue-400">
                            <a title="Telegram" >
                                IRC: irc.libera.chat
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