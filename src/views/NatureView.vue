<template>
<RouterLink to="photography"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container7">
    <div class="inner-box5">
        <img id='bw' src="../assets/B&W.jpg" alt="">
    </div>

    <div class="inner-box6">
        <img id='beach' src="../assets/beach1.jpg" alt="">
    </div>

    <div class="inner-box7">
        <img id='sunset' src="../assets/sunset.jpg" alt="">
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

.container7 {
    height: 1550px;
}
.inner-box5 {
    height: 450px;
    width: 60%;
    padding-top: 40px;
    margin-bottom: 40px;
}

#bw {
    height: 420px;
    margin-left: auto;
    margin-right: auto;
}

.inner-box6 {
    height: 400px;
    width: 60%;
    margin-left: auto;
    margin-right: 0;
}

#beach {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
}

.inner-box7 {
    height: 600px;
    width: 50%;
    margin-top: 30px;
}

#sunset {
    height: 600px;
    margin-left: auto;
    margin-right: auto;
}



@media (width < 640px) {
.logo {
  height: 40px;
}

.container7 {
    height: 1150px;
}
.inner-box5 {
    height: 350px;
    width: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
}

#bw {
    height: 320px;
}

.inner-box6 {
    height: 300px;
    width: 100%;
}

#beach {
    height: 300px;
}

.inner-box7 {
    height: 400px;
    width: 100%;
}

#sunset {
    height: 400px;
}
}



@media (min-width: 768px) {
.logo {
  height: 45px;
}

.container7 {
    height: 1250px;
}
.inner-box5 {
    height: 400px;
    width: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
}

#bw {
    height: 350px;
}

.inner-box6 {
    height: 330px;
    width: 100%;
}

#beach {
    height: 330px;
}

.inner-box7 {
    height: 450px;
    width: 100%;
}

#sunset {
    height: 450px;
}
}



@media (min-width: 922px) {
.logo {
  height: 50px;
}

.container7 {
    height: 1550px;
}
.inner-box5 {
    height: 450px;
    width: 60%;
    padding-top: 40px;
    margin-bottom: 40px;
}

#bw {
    height: 420px;
    margin-left: auto;
    margin-right: auto;
}

.inner-box6 {
    height: 400px;
    width: 60%;
    margin-left: auto;
    margin-right: 0;
}

#beach {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
}

.inner-box7 {
    height: 600px;
    width: 50%;
    margin-top: 30px;
}

#sunset {
    height: 600px;
    margin-left: auto;
    margin-right: auto;
}
}
</style>