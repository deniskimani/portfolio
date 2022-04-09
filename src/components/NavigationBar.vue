<template>
 <div class="nav-bar">
   <nav class="navbar navbar-expand-lg background fixed-top ">
  <div class="container ">
    <router-link class="nav-link" href to="/"><img src="../assets/images/logo.svg" alt=""></router-link>
    
    <button class="navbar-toggler"  >
    
    </button>
    <div class=" justify-content-end collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav pt-3 ">
        <li class="nav-item">
          <a type="button" class="nav-link" href="#about"   :class="{ active: about }" @click="[$emit('tagName', 'about' ), firstToggle()]">About</a>
        </li>
        <li class="nav-item">
           <a type="button"  class="nav-link" href="#experience" :class="{ active: experience }" @click="[$emit('tagName', 'experience' ), secondToggle()]">Experience</a>
        </li>
        <li class="nav-item">
          <a type="button"  class="nav-link" href="#work"  :class="{ active: work }" @click="[$emit('tagName', 'work' ), thirdToggle()]">Work</a>
        </li>
        <li class="nav-item">
           <a type="button" class="nav-link" href="#contact" :class="{ active: contact }" @click="[$emit('tagName', 'contact' ), fourthToggle()]">Contact</a>
        </li>
       
      </ul>
      <button class=" bt-success ms-4 mt-3">Resume</button>
    </div>
    
  </div>
</nav>
<div class="justify-content-start collapsed-nav " :class="{hidden : show}">
      <ul>
        <li><a href="#about" @click="firstToggle()">About</a></li>
        <li><a href="#experience" @click="secondToggle()">Experience</a></li>
        <li><a href="#work" @click="thirdToggle()">Work</a></li>
        <li><a href="#contact" @click="fourthToggle()">Contact</a></li>
      </ul>
      <button class=" bt-success  mt-1">Resume</button>
    </div>
 </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data(){
    return {
    about: false,
    experience: false,
    work: false,
    contact: false,
    show : true
  }
  },

  methods: {
    firstToggle() {
     this.contact = false
     this.experience = false
     this.work = false
     this.about = this.isActive ? false : true;
    },
    secondToggle() {
     this.contact = false
     this.about = false
     this.work = false
     this.experience = this.isActive ? false : true;
    },
    thirdToggle() {
     this.contact = false
     this.experience = false
     this.about = false
     this.work = this.isActive ? false : true;
    },
    fourthToggle() {
     this.work = false
     this.experience = false
     this.about = false
     this.contact = this.isActive ? false : true;
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
 
 .bottom-shaddow {

  //!! to be used with js

   -moz-box-shadow: 0 2px 30px rgba(14, 13, 15, 0.6);
    -webkit-box-shadow: 0 2px 30px rgba(14, 13, 15, 0.6);
    box-shadow: 0 2px 30px rgba(14, 13, 15, 0.6);
 }
 nav{
   background-color:#131129 !important;
 }
 .collapsed-nav {
   padding-top: 10vh;
   background-color: #fff;
   width: 50vw;
   height: 100vh;
   color: #131129;
   font-family: 'Courier Prime', monospace;
   z-index: 1500;
   position: fixed;
   top: 0;
   right: 0;


   li {
     list-style-type: none;
     text-align: left;
     margin-left: 5%;

     a {
       text-decoration: none;
       color: rgba(90, 83, 98, 0.932);
     }
   }

 }
 .nav-link {
   color:#9ba4bd !important;
   font-family: 'Courier Prime', monospace;
 }
 .active {
        color: rgb(168, 12, 255) !important;
        margin-top: auto;
 }
  img {
    width: 50px;
  }
 .bt-success{
   background: none !important;
   border: 2px solid rgb(168, 12, 255) !important;
   border-radius: 5px;
   padding: 5px 9px;
   color: rgb(168, 12, 255); 
   font-family: 'Courier Prime', monospace;
 }
 .hidden {
   display: none;
 }
 .fa-regular.fa-bars {
   color: #fff;
   font-size: 20px;
 }
</style>
