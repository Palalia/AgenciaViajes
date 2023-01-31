<template>
  <div>
    <header class="header-area">
      <div class="navbar-area">
        <!---- navbar star--->
        <div class="container">
          
          <nav class="navbar navbar-expand-lg navbar-light" id="navbar1">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img class="image" src="assets/img/about/logo_vertical.png" alt="">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a  v-scroll-to="'#inicio'" class="nav-link"  aria-current="page" href="#">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a v-scroll-to="id='#destinos'" class="nav-link"   href="#">Destinos</a>
                  </li>
                  <li class="nav-item">
                    <a v-scroll-to="id='#contacto'" class="nav-link"  href="#" >contacto</a>
                  </li>
                  <li class="nav-item">
                    <a v-scroll-to="id='#preguntas'"  class="nav-link"  href="#" >Preguntas</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>  
      </div>    
    </header>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      //  options: [], arreglo de refs para activar y desactivar el navbar
    }
  },
};
</script>  