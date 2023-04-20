<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView></RouterView> <!--RouterView skal stå sidst, før footer-sektionen-->
  
</template>


<style>
.logo {
  height: 50px;
}
.container {
  min-height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  height: 150px;
  align-items: flex-end;
  display: flex;
  margin-top: 20px;
}


ul {
  list-style-type: none;
  padding: 0;
}


li a {
  display: block;
  width: 60px;
  color: #464039;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 40px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}


@media (min-width: 1024px) {

}


@media (min-width: 640px) {
  .container {
    max-width:100% !important
  }
}
</style>
