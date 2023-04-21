<template>
<RouterLink to="web"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container15">
  <div class="text-box">
    <h5>BLOG DESIGN</h5>
  </div>

  <div class="billede">
    <img id='xd' src="../assets/xd-design.jpg" alt="">
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

.container15 {
  height: 1000px;
  width: auto;
}
.text-box {
  height: 50px;
  text-align: center;
}

h5 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bolder;
}


.billede {
  height: 900px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

#xd {
  height: 900px;
  margin-left: auto;
  margin-right: auto;
}




@media (width < 640px) {
.logo {
  height: 30px;
}
.text-box {
  height: 50px;
}

h5 {
  font-size: 22px;
}

#xd {
  height: 850px;
  margin-left: auto;
  margin-right: auto;
}
}




@media (min-width: 768px) {
.logo {
  height: 40px;
}

.container15 {
  height: 1060px;
}
.text-box {
  height: 50px;
}

h5 {
  font-size: 25px;
}

#xd {
  height: 1000px;
  margin-left: auto;
  margin-right: auto;
}
}




@media (min-width: 922px) {
.logo {
  height: 50px;
}

.container15 {
  height: 1200px;
}
.text-box {
  height: 50px;
}

h5 {
  font-size: 30px;
}

#xd {
  height: 1100px;
}
}
</style>