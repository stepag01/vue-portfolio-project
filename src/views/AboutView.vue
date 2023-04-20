<template>
<RouterLink to="/"><img class="logo" src="../assets/logo.png"></RouterLink>

<div class="container9">
  <div class="item9">
    <div class="box-1">
      <h3>LIDT OM MIG</h3>
      <p>Mit navn er Stephanie, jeg er 25 år gammel og studerer til multimediedesigner på EASV i Esbjerg. Jeg har altid været meget kreativ, i form af at tegne og male, så det
        kom meget naturligt til mig at jeg skulle arbejde med noget hvor jeg kan udfolde mig kreativt. Jeg er meget passioneret omkring multimediedesign, og bestræber mig altid 
        på at udvikle mig, så jeg kan blive bedre indenfor mit fag. Derudover har jeg en positiv indstilling til nye udfordringer, hvilket vil sige at jeg ser muligheder, 
        i stedet for begrænsninger.
      </p>
      <br>
      <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-2023-15dde.appspot.com/o/Mit%20CV.pdf?alt=media&token=bf676d7f-519c-4ed2-8023-70f5a70609bc"> <!--Mangler opdateret CV-->
        <div class="cv">
          <p>CV</p>
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=XO9A_vGXUCw">
        <div class="video-cv">
          <p>Video CV</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/stephaniephansen/">
        <div class="linkedin">
          <p>LinkedIn</p>
        </div>
      </a>
    </div>

    <div class="box-2">
      <img id='mig' src="../assets/Mig1.jpg" alt="">
    </div>
  </div>
</div>

<button id='goback' @click="goBack()">TILBAGE</button>

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

.container9 {
  height: 480px;
}
.item9 {
  height: 450px;
  display: flex;
  align-items: center;

}
.box-1 {
  height: 400px;
  width: 60%;
  padding-left: 20px;
  padding-right: 20px;
  text-align:center;
  margin-left: 40px;
  margin-right: 15px;
  border-left: solid 7px;
  border-right: solid 7px;
  border-style: dotted;
  border-color: #4c392d;
  font-family: Arial, Helvetica, sans-serif;
}

.box-2 {
  height: 400px;
  width: 40%;
}

p {
  font-size: 18px;
}

h3 {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-bottom: 20px;
  padding-top: 25px;
}

#mig {
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.cv {
  font-weight: bold;
}

.video-cv {
  font-weight: bold;
}

.linkedin {
  font-weight: bold;
}



@media (width < 640px) {
.logo {
  height: 35px;
}

.container9 {
  height: 850px;
  margin-top: 20px;
  width: auto;
}
.item9 {
  height: 500px;
  display: grid;
  margin-right: 40px;

}
.box-1 {
  height: 400px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

.box-2 {
  height: 400px;
  width: 100%;
  margin-left: 15px;
}

p {
  font-size: 15px;
}

h3 {
  font-size: 20px;
  padding-bottom: 20px;
  padding-top: 25px;
}

#mig {
  height: 400px;
  margin-top: 20px;
}

.cv {
  padding-bottom: 20px;
  font-size: 40px;
}

.video-cv {
  padding-bottom: 20px;
}
}



@media (min-width: 768px) {
.logo {
  height: 45px;
}

.container9 {
  height: 850px;
  margin-top: 20px;
  width: auto;
}
.item9 {
  height: 500px;
  display: grid;
  margin-right: 40px;

}
.box-1 {
  height: 400px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

.box-2 {
  height: 400px;
  width: 100%;
  margin-left: 15px;
}

p {
  font-size: 18px;
}

h3 {
  font-size: 25px;
  padding-bottom: 20px;
  padding-top: 0px;
}

#mig {
  height: 400px;
  margin-top: 40px;
}

.cv {
  padding-bottom: 15px;
}

.video-cv {
  padding-bottom: 15px;
}
}



@media (min-width: 992px) {
.logo {
  height: 50px;
}

.container9 {
  height: 600px;
  margin-top: 20px;
  width: auto;
}
.item9 {
  height: 500px;
  display: flex;
  margin-right: 40px;

}
.box-1 {
  height: 400px;
  width: 60%;
  margin-left: 20px;
  margin-right: 20px;
}

.box-2 {
  height: 400px;
  width: 40%;
  margin-left: 15px;
}

p {
  font-size: 18px;
}

h3 {
  font-size: 25px;
  padding-bottom: 20px;
  padding-top: 10px;
}

#mig {
  height: 400px;
  margin-top: 0px;
}

.cv {
  padding-bottom: 0px;
}

.video-cv {
  padding-bottom: 0px;
}

}
</style>
