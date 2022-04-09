<template>
    <div class="container whole-view">
        <div id="about">This is Div 1</div>
        <div id="experience">This is Div 2</div>
        <div id="work">This is Div 3</div>
        <div id="contact">This is Div 3</div>
    </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
      passedTag : String
  },
  watch: {
    passedTag(){
      console.log(this.passedTag)
      setTimeout(()=> {
      try{document.getElementById(this.passedTag).innerHTML = "this should work "}
            catch(error){
              console.log(error)
            }
      }, 1000)      
    }
  },
//   created() {
//     console.log(this.passedTag)
//   }
};
</script>
<style lang="scss" scoped>
.whole-view {
  position: relative;
  top: 100px;
}
div, button {
  margin-bottom: 500px;
}
</style>