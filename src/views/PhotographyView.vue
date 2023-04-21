<template>
<RouterLink to="/"><img class="logo" src="../assets/logo.png"></RouterLink>

  <!--Card 1-->
<div class="flex-col md:flex-col lg:flex-row flex justify-center mt-20">
  <div class="flex justify-center md:ml-0">
    <div
      class="block max-w-sm lg:mr-6">
      <img
        class=""
        src="../assets/krisser.jpg"
        alt="" />
      
        <div class="p-4">
        <h5
          class="mb-6 text-xl font-regular leading-tight text-black flex justify-center font-sans">
          PORTRÆTTER
        </h5>
        <div class="flex justify-center pb-16">
          <button
            type="button"
            class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-xl lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to='portraits'>SE MERE</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--Card 2-->
  <div class="flex justify-center md:ml-0">
    <div
      class="block max-w-sm lg:mr-6">
        <img
          class=""
          src="../assets/havet.jpg"
          alt="" />

      <div class="p-4">
        <h5
          class="mb-6 text-xl font-regular leading-tight text-black flex justify-center">
          NATUR 
        </h5>
        <div class="flex justify-center pb-16">
          <button
            type="button"
            class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-xl lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to='nature'>SE MERE</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>

<!--Card 3-->
  <div class="flex justify-center md:ml-0">
    <div
      class="block max-w-sm">
        <img
          class=""
          src="../assets/haverne.jpg"
          alt="" />

      <div class="p-4">
        <h5
          class="mb-6 text-xl font-regular leading-tight text-black flex justify-center">
          ARKITEKTUR
        </h5>
        <div class="flex justify-center pb-20">
          <button
            type="button"
            class="rounded-full mx-auto inline-block bg-stone-400 px-4 pt-1.5 pb-2 text-white text-sm sm:text-xl lg:text-sm font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-stone-600 font-sans"
            data-te-ripple-init
            data-te-ripple-color="light">
            <RouterLink to='architecture'>SE MERE</RouterLink>
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