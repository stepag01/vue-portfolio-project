<template>
<RouterLink to="portfolio"><img class="logo" src="../assets/logo.png"></RouterLink>


  <div class="flex-col md:flex-row lg:flex-row lg:ml-0 p-10 flex justify-center sm:space-x-0 md:space-x-10 lg:space-x-20">
    <div
      class="block max-w-sm sm:h-full sm:w-full sm:mb-28 lg:h-80 lg:w-80">
      <img
        class="mb-4"
        src="../assets/art2.jpg"
        alt="" />
      
        <div class="p-0">
        <h5
          class="mb-4 text-xl font-regular leading-tight text-black flex justify-center font-sans">
          PRODUCT LABELS
        </h5>
        <div class="flex justify-center pb-20">
          <button
            type="button"
            class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg md:text-md lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to='labels'>SE MERE</RouterLink>
          </button>
        </div>
      </div>
    </div>

    <div
      class="block max-w-sm sm:h-full sm:w-full lg:h-80 lg:w-80">
      <img
        class="mb-4"
        src="../assets/art1.jpg"
        alt="" />
      
        <div class="p-0">
        <h5
          class="mb-4 text-xl font-regular leading-tight text-black flex justify-center font-sans">
          ARTWORK
        </h5>
        <div class="flex justify-center">
          <button
            type="button"
            class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-lg md:text-md lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to='art'>SE MERE</RouterLink>
          </button>
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
            <p class="text-center text-base text-black">
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