<template>
  <div id="app">
   <Navigation />
   <div>
     <router-view />
   </div>
   <div class="footer">
     <a href="https://github.com/Choyero/webpantry.git"><img src="../images/github.png" alt=""></a>
    </div>
    
  </div>
</template>

<script>
import Navigation from './components/Navbar.vue'

export default {
  components: {
    Navigation,
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px;
  position: relative;
}

.footer {
    height: 100%;
    margin-top: 28px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
}
</style>
