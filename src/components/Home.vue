<template>
  <div>
    <b-jumbotron id="homeHero" class="mb-0">
      <b-row>
        <b-col col-md="6" class="text-center hero-text">
          <div class="container">
            <h1 class="hero-name">Lucas Lensi</h1>
            <h3 class="hero-anim">Developpeur
              <vue-typer :text='["Front-End","Back-End","Motivé"]' :repeat='infinity' :shuffle='false' initial-action='typing' :pre-type-delay='500' :type-delay='70' :pre-erase-delay='900' :erase-delay='100' erase-style='backspace' :erase-on-complete='false' caret-animation='phase' ></vue-typer>
            </h3>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <div>
      <div id="header"></div>
      <b-navbar id="navbar" class="nav" toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse" class="nav-toggle"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="">
            <b-nav-item href="#about" class="nav-text-left">Profile</b-nav-item>
            <b-nav-item href="#skills" class="nav-text-left">Compétences</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#homeHero" class="mx-auto">
              <img class="round-img-nav" src="../assets/images/profile-square.jpg">
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#course" class="nav-text-right">Parcours</b-nav-item>
            <b-nav-item href="#contact" class="nav-text-right">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid id="profile" class="profile-img">
      <b-row>
        <b-col offset-md="4" md="4" class="margin">
          <img class="profile round-img border" src="../assets/images/profile-square.jpg">
        </b-col>
      </b-row>
    </b-container>
    <b-container id="about" class="mt-5 py-4">
      <h1 class="part-title text-center mt-5">A PROPOS DE MOI</h1>
      <b-row class="mt-5">
        <b-col md="8">
          <h3 class="underpart-title mb-3">OBJECTIFS</h3>
          <p>
            Intéressé par l'informatique depuis mon plus jeune âge, j'ai pris la décision de faire de cette passion mon métier.
            Ma réussite professionnel étant mon objectif premier, je souhaite acquerir des compétences dans diverses technologie Web
            afin de pouvoir répondre aux attentes des commanditeurs tout en ayant la capacité d'évoluer parallèlement aux technologies.
          </p>
          <h3 class="underpart-title mt-5 mb-3">SAVOIR FAIRE</h3>
          <p>
            Tout au long de mon cursus, j'ai non seulement développer un panel de comopétences dans le domaine du développement web,
            mais j'ai aussi appris à savoir m'adapter rapidement aux technologies proposées.<br>
            J'ai par ailleurs su développer une capacité de tavail d'équipe et notamment en utilisant et en comprenant le fonctionnement
            de logiciel comme github.
          </p>
          <b-row class="mt-5">
            <b-col md="4">
              <b-button href="#contact" class="p-3 btn-contact">ME CONTACTER</b-button>
            </b-col>
            <b-col>
              <b-button class="p-3 btn-pdf">TELECHARGER MON CV</b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <div class="card mx-auto" style="width: 18rem;">
            <img class="card-img-top img-cut" :src="require('../assets/images/cv-photo-square.jpg')">
            <div class="card-body">
              <p class="card-text my-0 border-bottom"><B>Nom :</B> Lucas Lensi</p>
              <p class="card-text my-0 border-bottom"><B>Date de naissance :</B> 28/05/1996</p>
              <p class="card-text my-0 border-bottom"><B>Adresse :</B> Lyon, France</p>
              <p class="card-text my-0 border-bottom"><B>Email :</B> lucas.lensi@gmail.com</p>
              <p class="card-text my-0 border-bottom"><B>Téléphone :</B> 06 88 37 79 14</p>
              <p class="card-text my-0"><B>Permis :</B> Permis B (véhiculé)</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid id="skills" class="mt-5 py-4 background-dark">
      <h1 class="part-title text-white text-center mt-5">COMPETENCES</h1>
      <b-row class="mt-5">
        <b-col md="6">
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col sm="2" class="text-white text-center">
              text
            </b-col>
            <b-col sm="10" class="pt-2">
              <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h3 class="underpart-title text-white text-center my-5">COMPETENCES SECONDAIRES</h3>
      <b-row class="mb-5">
        <b-col>
          <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" start-color="red" stop-color="red" class="mx-auto mb-3">
            <h4 class="text-white">50 %</h4>
          </radial-progress-bar>
          <h5 class="text-white text-center">text</h5>
        </b-col>
        <b-col>
          <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" start-color="red" stop-color="red" class="mx-auto mb-3">
            <h4 class="text-white">50 %</h4>
          </radial-progress-bar>
          <h5 class="text-white text-center">text</h5>
        </b-col>
        <b-col>
          <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" start-color="red" stop-color="red" class="mx-auto mb-3">
            <h4 class="text-white">50 %</h4>
          </radial-progress-bar>
          <h5 class="text-white text-center">text</h5>
        </b-col>
        <b-col>
          <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" start-color="red" stop-color="red" class="mx-auto mb-3">
            <h4 class="text-white">50 %</h4>
          </radial-progress-bar>
          <h5 class="text-white text-center">text</h5>
        </b-col>
        <b-col>
          <radial-progress-bar :diameter="150" :completed-steps="completedSteps" :total-steps="totalSteps" start-color="red" stop-color="red" class="mx-auto mb-3">
            <h4 class="text-white">50 %</h4>
          </radial-progress-bar>
          <h5 class="text-white text-center">text</h5>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid id="course" class="mt-4 py-4">
      <h1 class="part-title text-center mt-5">PARCOURS</h1>
      <div class="zouk">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>First Year</h3>
            <span>Some work experience</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>Seconed Year</h3>
            <span>Some work experience</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>Third Year</h3>
            <span>Some work experience</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>Fourth Year</h3>
            <span>Some work experience</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>Fifth Year</h3>
            <span>Some work experience</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
      </div>
    </b-container>
    <b-container fluid id="contact" class="mt-5 py-4 background-dark">
      <h1 class="part-title text-white text-center mt-5">CONTACT</h1>
      <b-row class="text-white text-center my-5">
        <b-col offset-md="3" md="2">
          <h6><b-icon-house variant="light" font-scale="2" style="margin-bottom: -3px;"></b-icon-house> ADRESSE</h6>
          <p class="text-white">
            Lyon, France
          </p>
        </b-col>
        <b-col md="2">
          <h6><b-icon-envelope variant="light" font-scale="2" style="margin-bottom: -4px;"></b-icon-envelope> MAIL</h6>
          <p class="text-white">
            lucas.lensi@gmail.com
          </p>
        </b-col>
        <b-col md="2">
          <h6><b-icon-phone variant="light" font-scale="2" style="margin-bottom: -3px;"></b-icon-phone> TELEPHONE</h6>
          <p class="text-white">
            06 88 37 79 14
          </p>
        </b-col>
      </b-row>
      <GmapMap :center="{lat:10, lng:10}" :zoom="7" class="gmap mx-auto mb-5" :options="{ zoomControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: true, rotateControl: false, fullscreenControl: false, disableDefaultUi: false }" >
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
      </GmapMap>
    </b-container>
    <b-container id="footer">
      <p class="text-center pt-4 mt-2">CV réalisé en Vue.js à l'aide de Bootstrap Vue</p>
      <p class="text-center pb-4 mb-2">© Copyright 2020 Lucas LENSI. Tous droits réservés</p>
    </b-container>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
import { BIconHouse, BIconPhone, BIconEnvelope } from 'bootstrap-vue'

export default {
  name: 'home',
  data () {
    return {
      completedSteps: 5,
      totalSteps: 10
    }
  },
  components: {
    RadialProgressBar,
    BIconHouse,
    BIconPhone,
    BIconEnvelope
  },
  mounted () {
  },
  methods: {
    handleScroll (event) {
      const nav = document.getElementById('navbar')
      const header = document.getElementById('header')
      const sticky = header.offsetTop
      // const img = document.getElementById('profile')
      if (window.pageYOffset > sticky) {
        nav.classList.add('sticky')
        header.classList.add('header')
      } else {
        nav.classList.remove('sticky')
        header.classList.remove('header')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="css" src="../assets/css/home.css"></style>
