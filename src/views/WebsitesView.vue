<template>
<RouterLink to="web"><img class="logo" src="../assets/logo.png"></RouterLink>


    <div class="h-full w-full flex justify-center flex space-x-6 pt-6 sm:pt-20 mb-10">
        <div
            class="block max-w-lg sm:h-96">
            <img
                class=""
                src="../assets/WEB.jpg"
                alt="" />
            <div class="p-6">
            <h5
                class="sm:text-2xl md:text-xl mb-4 text-xl font-regular leading-tight text-black flex justify-center">
                WEBSITES KOMMER SNART
            </h5>
            <!--Bliver lavet på et senere tidspunkt, hvor jeg har nogle hjemmesider at vise-->
            <!-- <div class="flex justify-center"> -->
                <!-- <button
                    type="button"    
                    class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 hover:text-none"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <a href='https://www.github.com' target="_blank">SE github HER</a>
                </button>
            </div> -->
            </div>
        </div>
    </div>


<button id='goback' @click="goBack()">TILBAGE</button>


<!--Footer-->
<footer class="transparent">
    <div class="mx-auto  py-8 px-4 sm:px-6 md:flex md:items-center md:justify-center h-8">
        <nav class="mx-5 my-2 flex flex-wrap justify-center order-2">
          <div class="flex justify-center space-x-6 md:order-3">
        </div>
        <div class="mt-8  md:order-1 md:mt-0">
            <p class="text-center text-base text-black font-sans">
                &copy; 2023 Stephanie P. Hansen. All Rights Reserved.
            </p>
        </div>
        </nav>
    </div>
</footer>
</template>



<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goBack() {
    router.go(-1)
}
</script>



<style scoped>
#goback {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 40px;
  border-bottom: solid #4c392d;
}

body {
  margin: 0;
  padding: 0;
}
.logo {
  height: 50px;
  margin: 15px;
}



@media (width < 640px) {
.logo {
    height: 30px;
}
}


@media (min-width: 768px) {
.logo {
    height: 40px;
}
}


@media (min-width: 922px) {
.logo {
    height: 50px;
}
}
</style>