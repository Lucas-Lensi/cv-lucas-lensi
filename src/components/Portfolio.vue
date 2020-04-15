<template lang="html">
  <div class="">
    <div id="pf-background" class="pf-background">
      <h1 id="title" class="pf-title">Mon portfolio</h1>
      <div id="pf-container" class="pf-container">
        <div id="card-sites" class="pf-card" @click="hide(1)" href="#showelement">
          <b-icon-code-slash font-scale="6" style="margin-bottom: -3px;" class="icons"></b-icon-code-slash>
          <h2 class="pf-card-title">Sites<br>réalisés</h2>
        </div>
        <div class="pf-card-tech pf-list pf-list-tech hide-element">
          <!-- <div class="pf-card pf-card-tech hide-element">

          </div>
          <div class="pf-card pf-card-tech hide-element">

          </div>
          <div class="pf-card pf-card-tech hide-element">

          </div> -->
        </div>
        <div class="pf-card-site pf-list pf-list-site hide-element">
          <!-- <div class="pf-card pf-card-site hide-element">

          </div>
          <div class="pf-card pf-card-site hide-element">

          </div>
          <div class="pf-card pf-card-site hide-element">

          </div> -->
        </div>
        <div id="card-tech" class="pf-card" @click="hide(2)">
          <b-icon-terminal font-scale="6" style="margin-bottom: -3px;" class="icons"></b-icon-terminal>
          <h2 class="pf-card-title">Réalisations<br>techniques</h2>
        </div>
      </div>
    </div>
    <div id="showelement" class="pf-background">

    </div>
  </div>
</template>
<script>
import { BIconTerminal, BIconCodeSlash } from 'bootstrap-vue'
export default {
  name: 'portfolio',
  components: {
    BIconCodeSlash,
    BIconTerminal
  },
  data () {
    return {

    }
  },
  methods: {
    async hide (element) {
      var cardTech = document.getElementById('card-tech')
      var cardSites = document.getElementById('card-sites')
      // var title = document.getElementById('title')
      var container = document.getElementById('pf-container')
      // var background = document.getElementById('pf-background')
      // var cardsTech = document.getElementsByClassName('pf-card-tech')
      // var cardsSites = document.getElementsByClassName('pf-card-site')
      // title.classList.add('hide-element')
      // background.classList.add('pf-background-show-items')
      if (element === 1) {
        // [].forEach.call(cardsSites, function (el) { el.classList.remove('hide-element') })
        // cardSites.insertAdjacentHTML('afterend', '<div id="pf-seprate" class="pf-seperate-border-sites"></div>')
        cardTech.classList.add('hide-element')
        container.classList.add('pf-container-show-items-sites')
      } else {
        // [].forEach.call(cardsTech, function (el) { el.classList.remove('hide-element') })
        // cardTech.insertAdjacentHTML('beforebegin', '<div id="pf-seprate" class="pf-seperate-border-sites"></div>')
        cardSites.classList.add('hide-element')
        container.classList.add('pf-container-show-items-tech')
      }
    }
  }
}
</script>

<style src="../assets/css/portfolio.css"></style>
