<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            color="orange lighten-2"
            text v-on="on"> 
            Informacion
          </v-btn>
        </template>
        <v-card><!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>X</v-icon>
            </v-btn>
            <v-toolbar-title>{{this.title}}</v-toolbar-title>
            
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>Descripcion</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><p>Salida para contemplar el espectacular panorama del Cuerno de Oro desde la colina de Pierre Loti; visita de la Catedral de San Jorge, principal patriarcado de la Iglesia Ortodoxa Griega y sede del Patriarcado Ecuménico de Constantinopla, reconocido como el líder espiritual de los cristianos ortodoxos del mundo; continuamos a la Mezquita de Solimán El Magnífico, diseñada por el arquitecto otomano Mimar Sinan y que cuenta con la cúpula más grande de todas las mezquitas en Estambul; nos dirigimos al Bazar de las Especias, un lugar con encanto especial por su colorido y aromas, el sitio por excelencia para adquirir tés, hierbas, frutos secos, dulces típicos y por supuesto especias; culminamos con un recorrido a través del Bósforo, el estrecho que divide la ciudad entre Europa y Asia, apreciaremos las maravillosas vistas de las fortalezas otomanas, palacios, villas y los puentes que conectan ambos lados de esta urbe.</p></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-header><h4 class="title-blue">Detalles</h4></v-header>
            <v-container class="white lighten-5">
             <v-row>
              <v-col>
                <v-header class="title-blue">Incluye</v-header>
                <ul>
                  <li><p>Vuelo Redondo MEX-LMM CUU-MEX en clase turista</p></li>
                  <li><p>Todos los traslados de acuerdo con el itinerario</p></li>
                  <li><p>01 noche en El Fuerte, 01 Barrancas, 01 Creel y 01 Chihuahua</p></li>
                  <li><p>Tour a bahía a Topolobampo en lancha en servicio compartido</p></li>
                  <li><p>Ferrocarril CHEPE EXPRESS clase Turista, El Fuerte-Barrancas del Cobre</p></li>
                  <li><p>Cena y desayuno en Barrancas del Cobre</p></li>
                  <li><p>Traslado por carretera de Barrancas del Cobre - Creel-Aeropuerto de Chihuahua</p></li>
                  <li><p>Tour Valle de los Hongos y de las Ranas Tour Campos Menonitas City tour en Chihuahua</p></li>
                  <li><p>Desayuno diario (excepto el de llegada)</p></li>
                </ul>
                <v-header class="title-blue">No incluye</v-header>
                <ul>
                  <li><p>GASTOS PERSONALES</p></li>
                  <li><p>PROPINAS</p></li>
                  <li><p>NINGÚN SERVICIO NO ESPECÍFICADO</p></li>
                  <li><p>Impuestos aéreos por persona</p></li>
                </ul>
              </v-col>
              <v-col>
                <v-carousel v-model="model">
                  <v-carousel-item v-for="img in imgs" :key="img">
                    <v-sheet height="100%" tile>
                      <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">
                        Slide {{ img }}
                        <v-img
                             :src="require(img)"
                             width="575"
                             height="450"
                             ></v-img>
                        </div>
                      </v-row>
                    </v-sheet>
                 </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>  
            </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
</template>
<script>
import axios from 'axios'
export default({

  props:['title'],
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      imgs:[]
    }
  },
  mounted(){
    var imgaxios=[];
    axios({
      method:"GET",
      url:"http://localhost:3000/getImgs",
    }).then(res=>{
      imgaxios=res.data; 
      var tam=imgaxios.length;
      console.log(tam);
      for(let i=0;i<tam;i++){
        this.imgs[i]="/public/assets/img/Turquia/"+imgaxios[i];
        console.log(i);
      }
    });
   
  }
});

</script>