<template>
<RouterLink to="photography"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container5">
    <div class="inner-box1">
        <img id='k1' src="../assets/k1.jpg" alt="">
        <img id='k2' src="../assets/k2.jpg" alt="">
    </div>
</div>

<div class="container6">
    <div class="inner-box2">
        <img id='k3' src="../assets/k3.jpg" alt="">
    </div>

    <div class="inner-box3">
        <img id='k4' src="../assets/k4.jpg" alt="">
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

.container5 {
    justify-content: center;
    margin-top: 40px
}
.inner-box1 {
    height: 400px;
    width: 100%;
    display: flex;
}

#k1 {
    height: 350px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
}

#k2 {
    height: 350px;
    margin-left: auto;
    margin-right: auto;
}

.container6 {
    display: flex;
    height: 500px;
    width: 100%;
}
.inner-box2 {
    height: 700px;
    width: 50%;
}

#k3 {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
}

.inner-box3 {
    height: 500px;
    width: 50%;
    margin-bottom: 30px;
}

#k4 {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
}





@media (width < 640px) {
.logo {
  height: 35px;
}

.container5 {
    height: 550px;
    margin-top: 20px
}
.inner-box1 {
    height: 450px;
    display: grid;
}

#k1 {
    height: 250px;
    margin-bottom: 30px;
}

#k2 {
    height: 250px;
}

.container6 {
    display: grid;
    height: 900px;
}
.inner-box2 {
    height: 400px;
    width: 100%;
}

#k3 {
    height: 400px;
}

.inner-box3 {
    height: 400px;
    margin-bottom: 30px;
    width: 100%;
}

#k4 {
    height: 380px;
}
}




@media (min-width: 768px) {
.logo {
  height: 40px;
}

.container5 {
    height: 780px;
    margin-top: 20px
}
.inner-box1 {
    height: 750px;
    display: grid;
}

#k1 {
    height: 350px;
    margin-bottom: 30px;
}

#k2 {
    height: 350px;
}

.container6 {
    display: grid;
    height: 1000px;
    margin-bottom: 20px;
}
.inner-box2 {
    height: 450px;
    width: 100%;
}

#k3 {
    height: 450px;
}

.inner-box3 {
    height: 450px;
    width: 100%;
}

#k4 {
    height: 450px;
}
}




@media (min-width: 922px) {
.logo {
  height: 50px;
}

.container5 {
    height: 400px;
    margin-top: 40px
}
.inner-box1 {
    height: 400px;
    display: flex;
}

#k1 {
    height: 350px;
    margin-bottom: 30px;
}

#k2 {
    height: 350px;
}

.container6 {
    display: flex;
    height: 500px;
    margin-bottom: 20px;
}

#k3 {
    height: 450px;
}

#k4 {
    height: 450px;
}
}
</style>