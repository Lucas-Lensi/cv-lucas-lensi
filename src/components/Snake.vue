<template lang="html">
  <div class="canvas mx-auto">

  </div>
</template>

<script>
export default {
  data () {
    return {
      KEY_LEFT: 37,
      KEY_UP: 38,
      KEY_RIGHT: 39,
      KEY_DOWN: 40
    }
  }
}
</script>

<style lang="css" scoped>
.canvas {
  background-color: grey;
  height: 100vh;
  width: 100vw;
  border: 20px solid red;
}

.border-loose {
  background-color: red;
  height: 100vh;
  width: 100vw;
}
</style>
