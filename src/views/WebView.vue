<template>
<RouterLink to="portfolio"><img class="logo" src="../assets/logo.png"></RouterLink>
  
  <div class="sm:flex-col sm:ml-0 md:flex-col md:ml-0 lg:flex-row lg:ml-0 flex justify-center flex space-x-8 mt-20">
    <div class="flex justify-center mb-20">
      <div
        class="block max-w-sm sm:mr-6 sm:mt-5">
          <img
            class="mb-4 sm:ml-4"
            src="../assets/WEBSITE.jpg"
            alt="" />

        <div class="p-4">
          <h5
            class="sm:ml-8 mb-4 text-xl font-regular leading-tight text-black flex justify-center">
            WEBSITES
          </h5>
          <div class="flex justify-center sm:ml-8">
            <button
              type="button"
              class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
              data-te-ripple-init
              data-te-ripple-color="light">
              <RouterLink to='websites'>SE MERE</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Card 2-->
    <div class="flex justify-center mb-20">
      <div
        class="block max-w-sm sm:mr-6 sm:mt-5">
          <img
            class="mb-4"
            src="../assets/XDDESIGN.jpg"
            alt="" />

        <div class="p-4">
          <h5
            class="mb-4 text-xl font-regular leading-tight text-black flex justify-center">
            WEBDESIGN
          </h5>
          <div class="flex justify-center">
            <button
              type="button"
              class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
              data-te-ripple-init
              data-te-ripple-color="light">
              <RouterLink to='webdesign'>SE MERE</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



<!--Footer-->
<footer class="transparent">
    <div class="mx-auto  py-8 px-4 sm:px-6 md:flex md:items-center md:justify-center h-8">
        <nav class="mx-5 my-2 flex flex-wrap justify-center order-2">
          <div class="flex justify-center space-x-6 md:order-3">
        </div>
        <div class="mt-8  md:order-1 md:mt-0 ">
            <p class="text-center text-base text-black font-sans">
                &copy; 2023 Stephanie P. Hansen. All Rights Reserved.
            </p>
        </div>
        </nav>
    </div>
</footer>
</template>


<script setup>
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}
.logo {
  height: 50px;
  margin: 15px;
}
</style>
