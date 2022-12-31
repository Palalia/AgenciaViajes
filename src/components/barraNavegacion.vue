<template>
  <div>
    <header class="header-area">
      <div class="navbar-area">
        <!---- navbar star--->
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img class="image" src="https://www.zarla.com/images/zarla-escpate-1x1-2400x2400-20210603-pdgb4mmp4ghqyfwxm437.png?crop=1:1,smart&width=250&dpr=2" alt="">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" data-scroll-nav="0" aria-current="page" href="#" @click="switchComponent(1)" ref="inicio">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="2" href="#" @click="switchComponent(2)" ref="destinos">Destinos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="3" href="#">contacto</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="4" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="6" href="#">Download</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>  
      </div>    
    </header>   
    <div>        
        <component v-bind:is="nombrecomponente" />
    </div>
  </div>
</template>
<script>
import DestinosSection from './DestinosSection';
import InicioSection from './InicioSection';
export default {
  name: 'App',
  data(){
    return{
        nombrecomponente: InicioSection,
      //  options: [], arreglo de refs para activar y desactivar el navbar
    }
  },
  methods:{
    switchComponent(id){
        switch(id){
            case 1:
                return this.nombrecomponente= InicioSection;
            case 2:
                return this.nombrecomponente= DestinosSection;
        }
    },
  }
};
</script>  