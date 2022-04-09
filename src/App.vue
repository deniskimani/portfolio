<template>
    <navigation-bar @tagName="changeView($event)"/>
    <home-view :passed-Tag="tag" />    
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import HomeView from "@/components/HomeView.vue"

export default {
  name: "AppView",
  components: {
    NavigationBar,
    HomeView,
  },
  data(){
     return {
        tag: '"div1"'
    }
  },
  
  methods: {
    changeView (recievedTag){
      let modifiedTag = '"'+recievedTag+'"'
      try {
        this.tag = modifiedTag
      }catch(error){
        console.log(error)

      }
  }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
