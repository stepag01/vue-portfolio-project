<template>
<RouterLink to="graphicdesign"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container11">
    <div class="boks2">
        <img id='art1' src="../assets/kunst1.jpg" alt="">
        <img id='art2' src="../assets/kunst2.jpg" alt="">
        <img id='art3' src="../assets/kunst3.jpg" alt="">
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
  font-family: Quaerat;
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

.container11{
    height: 450px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.boks2 {
    height: 400px;
    display: flex;
    justify-content: center;
}

#art1 {
    height: 450px;
    margin-right: 20px;
}

#art2 {
    height: 450px;
    margin-right: 20px;
    margin-left: 20px;
}

#art3 {
    height: 450px;
    margin-left: 20px;
}


@media (max-width: 640px) {
.logo {
  height: 30px;
}

.container11{
    height: 1250px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.boks2 {
    height: 1200px;
    display: grid;
}

#art1 {
    height: 350px;
    margin-right: 0px;
}

#art2 {
    height: 350px;
    margin-right: 0px;
    margin-left: 0px;
}

#art3 {
    height: 350px;
    margin-left: 0px;
}
}




@media (min-width: 768px) {
.logo {
    height: 40px;
}
.container11{
    height: 1500px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.boks2 {
    height: 1500px;
    display: grid;
}

#art1 {
    height: 460px;
    margin-right: 0px;
}

#art2 {
    height: 460px;
    margin-right: 10px;
    margin-left: 0px;
}

#art3 {
    height: 460px;
    margin-left: 0px;
}
}




@media (min-width: 922px) {
.logo {
    height: 50px;
    margin: 15px;
}

.container11{
    height: 450px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.boks2 {
    height: 400px;
    display: flex;
    justify-content: center;
}

#art1 {
    height: 450px;
    margin-right: 20px;
}

#art2 {
    height: 450px;
    margin-right: 20px;
    margin-left: 20px;
}

#art3 {
    height: 450px;
    margin-left: 20px;
}
}
</style>