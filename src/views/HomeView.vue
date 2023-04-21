<template>
<main>
<div class="container">
  <div class="item1">
    <RouterLink to="/"><img class="logo" src="../assets/logo.png"></RouterLink>

  <div class="item2">
    <img id="skrift" src="../assets/STEPHANIE.png" alt="">
  </div>

  <div class="item3">
    <div class="sidenav">
      <ul>
        <RouterLink to="/portfolio">
          PORTEFØLJE
        </RouterLink>

        <RouterLink to="/about">
          OM
        </RouterLink>

        <RouterLink to="/contact">
          KONTAKT
        </RouterLink>
      </ul>
    </div>
  </div>
  </div>
</div> 
</main>
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
}

.container {
  background-image: url('../assets/step.jpg');
  height: 100vH; 
  width: auto;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.item1 {
  position: absolute;
  margin: 15px;
  width: 200px;
  height: 460px;
}

.item2 {
  height: 200px;
  width: 500px;
  margin-left: 35px;
  margin-top: 50px;
}

#skrift {
  height: 220px;
}

.item3 {
  height: 100px;
  width: 150px;
  align-items: flex-end;
  display: flex;
  margin-left: 40px;
}

.sidenav {
  height: 80px;
  width: 150px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: block;
  width: 60px;
  color: #464039;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

a:hover {
  color: #83786b;
}




@media (width < 640px) {
.logo {
  height: 30px;
}

.item1 {
  margin: 15px;
  width: 200px;
  height: 420px;
}

.item2 {
  height: 250px;
  width: 250px;
  margin-left: 10px;
  margin-top: 40px;
}

#skrift {
  height: 120px;
  padding-top: 0;
  padding-top: 40px;
}

.item3 {
  height: 100px;
  width: 150px;
  margin-left: 10px;
}

ul {
  font-size: 25px;
}
}



@media (min-width: 768px) {
.logo {
  height: 40px;
}

.item1 {
  margin: 15px;
  width: 250px;
  height: 700px;
}

.item2 {
  height: 200px;
  width: 400px;
  margin-left: 10px;
  margin-top: 40px;
}

#skrift {
  height: 200px;
  padding-top: 40px;
}

.item3 {
  height: 300px;
  width: 200px;
  margin-left: 40px;
  align-items: end;
}

ul {
  font-size: 30px;
}
}



@media (min-width: 992px) {
.logo {
  height: 50px;
}

.item1 {
  margin: 15px;
  width: 200px;
  height: 460px;
}

.item2 {
  height: 200px;
  width: 500px;
  margin-left: 35px;
  margin-top: 50px;
}

#skrift {
  height: 220px;
}

.item3 {
  height: 100px;
  width: 150px;
  align-items: flex-end;
  display: flex;
  margin-left: 40px;
}

ul {
  font-size: 18px;
}
}
</style>
    
