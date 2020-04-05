<template>
  <div>
    <b-jumbotron id="homeHero" class="mb-0 to-middle">
      <b-row>
        <b-col col-md="6" class="text-center hero-text">
          <div class="container">
            <h1 class="hero-name">Lucas Lensi</h1>
            <h3 class="hero-anim">Developpeur
              <vue-typer :text='["Front-End","Back-End","Motivé"]' :shuffle='false' initial-action='typing' :pre-type-delay='500' :type-delay='70' :pre-erase-delay='900' :erase-delay='100' erase-style='backspace' :erase-on-complete='false' caret-animation='phase' ></vue-typer>
            </h3>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <div>
      <div id="header"></div>
      <b-navbar id="navbar" class="nav" toggleable="lg">
        <b-navbar-toggle target="nav-collapse" class="nav-toggle"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="">
            <b-nav-item href="#about" class="nav-text nav-text-left">Profile</b-nav-item>
            <b-nav-item href="#skills" class="nav-text nav-text-left">Compétences</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#homeHero" class="mx-auto nav-text">
              <!-- <img class="round-img-nav" src="../assets/images/profile-square.jpg"> -->
              Lucas Lensi
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#course" class="nav-text nav-text-right">Parcours</b-nav-item>
            <b-nav-item href="#contact" class="nav-text nav-text-right">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- <b-container fluid id="profile" class="profile-img">
      <b-row>
        <b-col offset-md="4" md="4" class="margin">
          <img class="profile round-img border" src="../assets/images/profile-square.jpg">
        </b-col>
      </b-row>
    </b-container> -->
    <b-container id="about" class="mt-5 py-4">
      <h1 class="part-title text-center mt-5">A PROPOS DE MOI</h1>
      <b-row class="mt-5">
        <b-col md="8">
          <h3 class="underpart-title mb-3">OBJECTIFS</h3>
          <p>
            Intéressé par l'informatique depuis mon plus jeune âge, j'ai pris la décision de faire de cette passion mon métier.
            J'ai pour ambition, à cours terme, d'élargir mes compétences dans diverses technologies web. Ceci ayant
            pour but de développer ma capacité d'adapation afin de savoir répondre à toutes les problématiques.
            A terme, je me spécialiserais dans un ensemble de technologies afin d'ouvrir mon auto-entreprise et ainsi développer
            une expertise dans ces langages.
          </p>
          <h3 class="underpart-title mt-5 mb-3">SAVOIR FAIRE</h3>
          <p>
            Par mon cursus, j'ai acquis des compétences dans tous les aspects du développement web :<br>
            Front-End / Back-End / Serveur / Sécurité / etc..<br>
            J'ai par ailleurs développé des qualités importantes en tant que développeur :<br>
            <ul>
                <li>Travail d'équipe à l'aide du logiciel de gestion de version Git.</li>
                <li>Autonomie dans l'apprentissage</li>
            </ul>
          </p>
          <b-row class="my-5 btns">
            <b-col md="4">
              <b-button href="#contact" class="p-3 btn-contact">ME CONTACTER</b-button>
            </b-col>
            <!-- <b-col>
              <a href="" download>
                <b-button class="p-3 btn-pdf">TELECHARGER MON CV</b-button>
              </a>
            </b-col> -->
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
      <b-container>
        <h1 class="part-title text-white text-center mt-5">COMPETENCES</h1>
        <b-row class="mt-5">
          <b-col md="6">
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <p id="popover-html" style="color: white">HTML/CSS</p>
                <b-popover target="popover-html" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/html-css.png')" alt="" style="width: 80px !important;">
                </b-popover>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="80" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <p id="popover-js" style="color: white">JavaScript</p>
                <b-popover target="popover-js" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/js.png')" alt="" style="width: 80px !important;">
                </b-popover>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="60" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <p id="popover-ruby" style="color: white">Ruby On Rails</p>
                <b-popover target="popover-ruby" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/rails.jpg')" alt="" style="width: 80px !important;">
                </b-popover>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="85" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6">
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <p id="popover-node" style="color: white">Node.js</p>
                <b-popover target="popover-node" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/node.png')" alt="" style="width: 80px !important;">
                </b-popover>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="40" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <p id="popover-vue" style="color: white">Vue.js</p>
                <b-popover target="popover-vue" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/vue.png')" alt="" style="width: 80px !important;">
                </b-popover>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="50" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col sm="2" class="text-white text-center">
                <b-popover target="popover-git" triggers="hover" placement="left">
                  <img :src="require('../assets/images/logo/git.png')" alt="" style="width: 80px !important;">
                </b-popover>
                <p id="popover-git" style="color: white">GitHub</p>
              </b-col>
              <b-col sm="10" class="pt-2">
                <b-progress value="80" max="100" show-progress variant="danger" class="w-75 mx-auto" height="14px"></b-progress>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <h3 class="underpart-title text-white text-center my-5">COMPETENCES SECONDAIRES</h3>
        <b-row class="mb-5">
          <b-col>
            <radial-progress-bar :diameter="150" :completed-steps="85" :total-steps="100" start-color="red" stop-color="red" class="mx-auto mb-3">
              <h4 class="text-white">85 %</h4>
            </radial-progress-bar>
            <h5 id="popover-bootstrap" class="text-white text-center">Bootstrap</h5>
            <b-popover target="popover-bootstrap" triggers="hover" placement="bottom">
              <img :src="require('../assets/images/logo/bootstrap.png')" alt="" style="width: 80px !important;">
            </b-popover>
          </b-col>
          <b-col>
            <radial-progress-bar :diameter="150" :completed-steps="50" :total-steps="100" start-color="red" stop-color="red" class="mx-auto mb-3">
              <h4 class="text-white">50 %</h4>
            </radial-progress-bar>
            <h5 id="popover-linux" class="text-white text-center">Linux</h5>
            <b-popover target="popover-linux" triggers="hover" placement="bottom">
              <img :src="require('../assets/images/logo/linux.png')" alt="" style="width: 80px !important;">
            </b-popover>
          </b-col>
          <b-col>
            <radial-progress-bar :diameter="150" :completed-steps="65" :total-steps="100" start-color="red" stop-color="red" class="mx-auto mb-3">
              <h4 class="text-white">65 %</h4>
            </radial-progress-bar>
            <h5 id="popover-db" class="text-white text-center">SQL / MongoDB</h5>
            <b-popover target="popover-db" triggers="hover" placement="bottom">
              <img :src="require('../assets/images/logo/git.png')" alt="" style="width: 80px !important;">
            </b-popover>
          </b-col>
          <b-col>
            <radial-progress-bar :diameter="150" :completed-steps="95" :total-steps="100" start-color="red" stop-color="red" class="mx-auto mb-3">
              <h4 class="text-white">95 %</h4>
            </radial-progress-bar>
            <h5 class="text-white text-center">Travail d'équipe</h5>
          </b-col>
          <b-col>
            <radial-progress-bar :diameter="150" :completed-steps="100" :total-steps="100" start-color="red" stop-color="red" class="mx-auto mb-3">
              <h4 class="text-white">200 %</h4>
            </radial-progress-bar>
            <h5 class="text-white text-center">Motivation</h5>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid id="course" class="mt-4 py-4">
      <h1 class="part-title text-center mt-5">PARCOURS</h1>
      <div class="zouk">
        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>2020</h3>
            <span>Plant'açao</span>
            <p>.Réalisation d'une application web pour une assciation à but non lucratif<br>
              Front-End : <B>Vue.js</B> et BootstrapVue<br>
              Back-End : <B>Node.js</B>, <B>MongoDB</B>, <B>AWS S3</B>
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>2019 - 3 mois</h3>
            <span>The Hacking Project</span>
            <p>Formation de 3 mois intensifs développeur Web Full-Stack</p>
            <p>
              Technologies de base Front-End : <B>HTML/CSS/JS</B><br>
              Framework Front-End : <B>Bootstrap</B><br>
              Apprentissage avancé de <B>Ruby</B> et <B>Ruby on Rails</B><br>
              Réalisation de projets de groupe
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>2015-2018</h3>
            <span>Licence INFORMATION - COMMUNICATION</span>
            <p>Université Lumière Lyon 2</p>
            <p> Mise en place de Projet de communication<br>
              Creation de de visuels à l'aide de divers outils de PAO<br>
              Développement du travail d'équipe<br>
              Initiation HTML/CSS
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content border p-4">
            <h3>2014-2015</h3>
            <span>Baccalauréat ECONOMIQUE et SOCIAL</span>
            <p>Spécialité Mathématiques</p>
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
      <!-- <GmapMap :center="{lat:10, lng:10}" :zoom="7" class="gmap mx-auto mb-5" :options="{ zoomControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: true, rotateControl: false, fullscreenControl: false, disableDefaultUi: false }" >
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
    </GmapMap> -->
    <center>
      <div>
        <iframe class="mx-auto gmap" src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=Lyon+(Titre)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no">
        </iframe>
      </div><br />
    </center>
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
    }
  },
  components: {
    RadialProgressBar,
    BIconHouse,
    BIconPhone,
    BIconEnvelope
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
  async mounted () {
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
