<template lang="html">
    <div class="all">
        <div class="text">
            <h1 class="title">404</h1>
            <h6 class="under-title">Vous êtes dans le côté obscure de ce site</h6>
            <b-button variant="outline-danger" class="under-title-button" to="/">Retour</b-button>
        </div>
        <span id="light"></span>
    </div>
</template>

<script>
export default {
  name: 'notfound',
  mounted () {
    const saber = document.getElementById('light')
    saber.style.transform('translate(900px,2000px)')
  }
}
</script>

<style lang="css" src="../assets/css/404.css"></style>
