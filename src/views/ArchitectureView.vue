<template>
<RouterLink to="photography"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container8">
    <div class="inner-box6">
        <img id='vandhaverne1' src="../assets/Vandhaverne1.jpg" alt="">
        <img id='vandhaverne2' src="../assets/Vandhaverne2.jpg" alt="">
        <img id='whisky1' src="../assets/Whisky.jpg" alt="">
        <img id='whisky2' src="../assets/Whisky2.jpg" alt="">
    </div>
</div>

<button id='goback' @click="goBack()">TILBAGE</button>

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
  margin-top: 20px;
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

.container8 {
    height: 1900px;
}

.inner-box6 {
    width: 100%;
    margin-top: 40px;
}

#vandhaverne1 {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
}

#vandhaverne2 {
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

#whisky1 {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

#whisky2 {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}



@media (width < 640px) {
.logo {
  height: 40px;
}

.container8 {
    height: 1400px;
    margin-top: 40px;
}

.inner-box6 {
    width: 100%;
    margin-top: 20px;
}

#vandhaverne1 {
    height: 300px;
}

#vandhaverne2 {
    height: 300px;
    margin-top: 20px;
}

#whisky1 {
    height: 250px;
    margin-top: 20px;
}

#whisky2 {
    height: 300px;
    margin-top: 20px;
}
}



@media (min-width: 768px) {
.logo {
  height: 45px;
}

.container8 {
    height: 1500px;
}

.inner-box6 {
    width: 100%;
    margin-top: 20px;
}

#vandhaverne1 {
    height: 350px;
}

#vandhaverne2 {
    height: 350px;
    margin-top: 20px;
}

#whisky1 {
    height: 350px;
    margin-top: 20px;
}

#whisky2 {
    height: 350px;
    margin-top: 20px;
}
}




@media (min-width: 922px) {
.logo {
  height: 50px;
}

.container8 {
    height: 1900px;
}

.inner-box6 {
    width: 100%;
    margin-top: 40px;
}

#vandhaverne1 {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
}

#vandhaverne2 {
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

#whisky1 {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

#whisky2 {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}
}
</style>