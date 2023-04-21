<template>
  <RouterLink to="/"><img class="logo" src="../assets/logo.png"></RouterLink>

<section class="bg-white mb-16">
  <div class="sm:w-4/5 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-8 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-600 font-sans">Kontakt mig</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-600 dark:text-gray-800 sm:text-lg lg:text-xl font-sans">Jeg er utrolig glad for at du synes godt om mine projekter og har planer om at kontakte mig for et muligt samarbejde. Udfyld venligst formularen nedenunder og fortæl mig hvad jeg kan gøre for dig. Så vil jeg vende tilbage til dig hurtigst muligt.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="name" class="block mb-2 font-sans text-base font-bold text-stone-600 font-sans sm:text-lg lg:text-xl">Navn</label>
              <input type="name" id="name" class="shadow-sm border border-stone-600 text-gray-600 text-sm sm:text-lg lg:text-lg rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:shadow-sm-light font-sans" placeholder="Din navn . . ." required>
          </div>
          <div>
              <label for="email" class="block mb-2 font-sans text-base font-bold text-stone-600 font-sans sm:text-lg lg:text-xl">Email</label>
              <input type="email" id="email" class="shadow-sm border border-stone-600 text-gray-600 text-sm sm:text-lg lg:text-lg rounded-lg block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:shadow-sm-light font-sans" placeholder="Din mail . . ." required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-base font-bold text-stone-600 font-sans sm:text-lg lg:text-xl">Emne</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm sm:text-lg lg:text-lg text-gray-600 rounded-lg border border-stone-600 shadow-sm dark:placeholder-gray-400 dark:text-grey-600 dark:focus:ring-stone-600 dark:focus:border-stone-600 dark:shadow-sm-light font-sans" placeholder="Dit emne. . ." required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-base font-bold text-stone-600 font-sans text-md md:text-xl">Besked</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm sm:text-lg lg:text-lg text-gray-600 bg-white rounded-lg shadow-sm border focus:ring-stone-400 dark:border-stone-600 text-grey-600 font-sans" placeholder="Din besked. . ."></textarea>
          </div>
          <button type="submit" class="py-2 px-3 text-md md:text-lg font-bold text-center text-white rounded-full bg-stone-400 sm:w-fit hover:bg-stone-500 focus:ring-2 focus:outline-none dark:hover:bg-stone-600 dark:focus:ring-black font-sans">SEND BESKED</button>
      </form>
  </div>
</section>

<button id='goback' @click="goBack()">TILBAGE</button>

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
}




@media (width < 640px) {
.logo {
  height: 30px;
}

#goback {
  font-size: 20px;
  margin-left: 20px;
}
}


@media (min-width: 768px) {
.logo {
  height: 40px;
}

#goback {
  font-size: 20px;
  margin-left: 40px;
}
}


@media (min-width: 922px) {
.logo {
  height: 50px;
}
}
</style>