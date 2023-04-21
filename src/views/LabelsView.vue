<template>
<RouterLink to="graphicdesign"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container10">
    <div class="boks1">
        <img id='label1' src="../assets/produkt1.jpg" alt="">
        <img id='label2' src="../assets/produkt2.jpg" alt="">
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

.container10 {
    height: 450px;
    margin-top: 20px;
}
.boks1 {
    height: 400px;
    display: flex;
    justify-content: center;
}

#label1 {
    height: 400px;
    margin-right: 40px;
}

#label2 {
    height: 400px;
    margin-left: 40px;
}




@media (width < 640px) {
.logo {
  height: 30px;
}

.container10 {
    height: 900px;
    width: auto;
    margin-top: 20px;
}
.boks1 {
    height: 850px;
    display: grid;
}

#label1 {
    height: 350px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-top: 20px;
}

#label2 {
    height: 350px;
    margin-left: 0px;
}
}




@media (min-width: 768px) {
.logo {
    height: 40px;
}

.container10 {
    height: 900px;
    margin-top: 20px;
}
.boks1 {
    height: 850px;
    display: grid;
}

#label1 {
    height: 400px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-top: 0px;
}

#label2 {
    height: 400px;
    margin-left: 0px;
}
}



@media (min-width: 922px) {
    .logo {
  height: 50px;
  margin: 15px;
}

.container10 {
    height: 450px;
    margin-top: 20px;
}
.boks1 {
    height: 400px;
    display: flex;
    justify-content: center;
}

#label1 {
    height: 400px;
    margin-right: 40px;
}

#label2 {
    height: 400px;
    margin-left: 40px;
}
}
</style>