<template>
<RouterLink to='/'><img class="logo" src="../assets/logo.png"></RouterLink>
   
<div class="flex-col sm:flex-col sm:h-full sm:w-full sm:ml-32 sm:mb-10 md:flex-row md:ml-0 md:mb-6 lg:flex-row lg:ml-0 flex justify-center flex sm:space-x-8 pt-6 p-10 mb-20">
    <!--Card 1-->  
    <div
        class="block max-w-sm sm:max-w-xs">
        <img
            class="mb-4 sm:ml-0 lg:ml-0 sm:pt-10 md:ml-0"
            src="../assets/label.jpg"
            alt="" />
        <div class="p-2">
        <h5
            class="text-xl font-regular leading-tight text-black flex justify-center font-sans sm:ml-14 sm:mt-0 md:ml-0 lg:ml-0 mb-4">
            GRAFISK DESIGN
        </h5>
        <div class="flex justify-center sm:ml-14 md:ml-0 lg:ml-0 pb-20">
            <button
                type="button"    
                class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg md:text-sm lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 hover:text-none font-sans"
                data-te-ripple-init
                data-te-ripple-color="light">
                <RouterLink to='graphicdesign'>SE MERE</RouterLink>
            </button>
        </div>
        </div>
    </div>

    <!--Card 2-->  
    <div
        class="block max-w-sm m-4 sm:max-w-xs sm:m-0">
        <img
            class="mb-4 sm:ml-0 lg:ml-0 sm:pt-10 md:ml-0"
            src="../assets/furni.jpg"
            alt="" />
        <div class="p-2">
        <h5
            class="text-xl font-regular leading-tight text-black flex justify-center font-sans sm:ml-0 sm:mt-0 md:ml-0 lg:ml-0 mb-4">
            WEB 
        </h5>
        <div class="flex justify-center sm:ml-0 md:ml-0 lg:ml-0 pb-20">
            <button
                type="button"    
                class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg md:text-sm lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 hover:text-none font-sans"
                data-te-ripple-init
                data-te-ripple-color="light">
                <RouterLink to='web'>SE MERE</RouterLink>
            </button>
        </div>
     </div>
    </div>

    

    <!--Card 3-->  
    <div
        class="block max-w-sm sm:max-w-xs">
        <img
            class="mb-4 sm:mr-5 md:ml-0 lg:ml-0 sm:pt-10"
            src="../assets/kris.jpg"
            alt="" />
        <div class="p-2">
        <h5
            class="text-xl font-regular leading-tight text-black flex justify-center font-sans sm:ml-0 sm:mt-0 md:ml-0 lg:ml-0 mb-4">
            FOTOGRAFI
        </h5>
        <div class="flex justify-center sm:ml-0 md:ml-0 lg:ml-0">
            <button
                type="button"    
                class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg md:text-sm lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 hover:text-none font-sans"
                data-te-ripple-init
                data-te-ripple-color="light">
                <RouterLink to='photography'>SE MERE</RouterLink>
            </button>
        </div>
     </div>
    </div>
</div>

<button id='goback' @click="goBack()">TILBAGE</button>

<!--Footer-->
<footer class="transparent">
    <div class="mx-auto py-8 px-4 md:flex md:items-center md:justify-center h-6 xl:h-6">
        <nav class="mx-5 my-2 flex flex-wrap justify-center order-2">
          <div class="flex justify-center space-x-6 md:order-3">
        </div>
        <div class="mt-6 md:w-full md:order-1 md:mt-0">
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
  margin-bottom: 20px;
  border-bottom: solid #4c392d;
}

body {
    margin: 0;
    padding: 0;
}
.logo {
    height: 50px;
    margin: 15px;
    margin-bottom: 10px;
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


@media (min-width: 944px) {
.logo {
    height: 50px;
}
}
</style>