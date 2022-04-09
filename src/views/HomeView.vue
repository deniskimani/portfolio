<template>
  

    <div class="div" id="div1">This is Div 1</div>
    <div class="div" id="div2">This is Div 2</div>
    <div class="div" id="div3">This is Div 3</div>
</template>

<script>
export default {
  name: "HomeView",
   props: {
    refName: String,
  },
  methods: {
    goTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>
<style lang="scss" scoped>
div, button {
  margin-bottom: 1000px;
}
</style>