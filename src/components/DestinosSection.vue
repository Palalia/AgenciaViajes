<template>
  <div >
     <v-app >
        <v-content class="mt-15 pt-15">
           <v-container>
              <v-sheet
                 max-width="1500"
                 max-height="1500"
                 >
                 <v-slide-group>
                    <v-slide-item class="ma-5">
                       <v-card
                          class="mx-auto"
                          max-width="500"
                          >
                          <v-img
                             src="https://one.cdnmega.com/images/destinos/promos/moriente/magia-turca-jerusalen-790x1042_636ab52b89596.webp?width=290"
                             width="500"
                             height="450"
                             ></v-img>
                          <v-card-title>
                             Turquia y Jerusalen
                          </v-card-title>
                          <v-card-subtitle>
                             10 dias 8 noches
                          </v-card-subtitle>
                          <v-card-actions>
                             <PopCard title="Turquia y Jerusalen"></PopCard>
                             <v-btn
                                icon
                                @click="show = !show"
                                >
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                             </v-btn>
                             <div>
                             </div>
                          </v-card-actions>
                          <v-expand-transition>
                             <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                   <p>DÍA 01 MÉXICO ✈ ESTAMBUL</p>
                                   <p>DÍA 02 ESTAMBUL</p>
                                   <p>DÍA 03 ESTAMBUL</p>
                                   <p>DÍA 04 ESTAMBUL </p>
                                   <p>DÍA 05 ESTAMBUL 🚌 ANKARA 🚌 CAPADOCIA</p>
                                   <p>DÍA 06 CAPADOCIA</p>
                                   <p>DÍA 07 CAPADOCIA</p>
                                   <p>DÍA 08 CAPADOCIA 🚌 PAMUKKALE</p>
                                   <p>DÍA 09 PAMUKKALE 🚌 EFESO 🚌 KUSADASI*</p>
                                   <p>DÍA 10 KUSADASI*</p>
                                </v-card-text>
                             </div>
                          </v-expand-transition>
                       </v-card>
                    </v-slide-item>
                    <!--//////////////////////-->
                    <v-slide-item class="ma-5">
                       <v-card
                          class="mx-auto"
                          max-width="500"
                          >
                          <v-img
                             src="https://one.cdnmega.com/images/destinos/promos/europa/gran-tour-de-europa-790x1042_638559b34ddef.webp?width=290"
                             width="500"
                             height="450"
                             ></v-img>
                          <v-card-title>
                             Europa
                          </v-card-title>
                          <v-card-subtitle>
                             19 dias 17 noches
                          </v-card-subtitle>
                          <v-card-actions>
                             <v-btn
                                color="orange lighten-2"
                                text
                                >
                                Informacion
                             </v-btn>
                             <v-spacer></v-spacer>
                             <v-btn
                                icon
                                @click="see = !see"
                                >
                                <v-icon>{{ see ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                             </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                             <div v-show="see">
                                <v-divider></v-divider>
                                <v-card-text>
                                   <p>DÍA 01 MÉXICO – LONDRES</p>
                                   <p>DÍA 02 LONDRES</p>
                                   <p>DÍA 04 LONDRES – PARÍS </p>
                                   <p>DÍA 05 PARÍS</p>
                                   <p>DÍA 07 PARÍS – LUXEMBURGO – FRANKFURT </p>
                                   <p>DÍA 08 FRANKFURT – HEIDELBERG – ZÚRICH </p>
                                   <p>DÍA 09 ZÚRICH – LUCERNA – VADUZ – INNSBRUCK </p>
                                   <p>DÍA 10 INNSBRUCK – PADUA – VENECIA </p>
                                   <p>DÍA 11 VENECIA – ROMA </p>
                                   <p>DÍA 14 ROMA – FLORENCIA </p>
                                   <p>DÍA 15 FLORENCIA – PISA – NIZA </p>
                                   <p>DÍA 16 NIZA – BARCELONA</p>
                                   <p>DÍA 17 BARCELONA – ZARAGOZA – MADRID  </p>
                                   <p>DÍA 18 MADRID  </p>
                                   <p>DÍA 19 MADRID – MÉXICO</p>
                                </v-card-text>
                             </div>
                          </v-expand-transition>
                       </v-card>
                    </v-slide-item>
                    <!--/////////////////////////////-->
                    <v-slide-item class="ma-5">
                       <v-card
                          class="mx-auto"
                          max-width="500"
                          >
                          <v-img
                             src="https://one.cdnmega.com/images/viajes/covers/escapate-a-chetumal-1024x575_6320bfe1dfa25.webp"
                             width="575"
                             height="450"
                             ></v-img>
                          <v-card-title>
                             Escapate a Chetumal
                          </v-card-title>
                          <v-card-subtitle>
                             4 dias / 3 noches
                          </v-card-subtitle>
                          <v-card-actions>
                             <v-btn
                                color="orange lighten-2"
                                text
                                >
                                Informacion
                             </v-btn>
                             <v-spacer></v-spacer>
                             <v-btn
                                icon
                                @click="show1 = !show1"
                                >
                                <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                             </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                             <div v-show="show1">
                                <v-divider></v-divider>
                                <v-card-text>
                                   <p>DÍA 01 MÉXICO – CHETUMAL</p>
                                   <p>DÍA 02 - 03 CHETUMAL </p>
                                   <p>DÍA 04 CHETUMAL – MÉXICO</p>
                                </v-card-text>
                             </div>
                          </v-expand-transition>
                       </v-card>
                    </v-slide-item>
                    <!--/////////////////////////////-->
                    <v-slide-item class="ma-5">
                       <v-card class="mx-auto" max-width="500">
                          <v-img
                             src="https://one.cdnmega.com/images/destinos/promos/asia/turquia-y-corea-790x1042_637fb0470b0b7.webp?width=290"
                             width="500"
                             height="500"
                             ></v-img>
                          <v-card-title>
                             Turquia y Chetumal
                          </v-card-title>
                          <v-card-subtitle>
                             15 dias / 10 noches
                          </v-card-subtitle>
                          <v-card-actions>
                             <v-btn color="orange lighten-2" text>
                                Informacion
                             </v-btn>
                             <v-spacer></v-spacer>
                             <v-btn icon @click="show2 = !show2">
                                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                             </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                             <div v-show="show2">
                                <v-divider></v-divider>
                                <v-card-text>
                                   <p>DÍA 01 MÉXICO – CHETUMAL</p>
                                   <p>DÍA 02 -</p>
                                   <p>03 CHETUMAL </p>
                                   <p>DÍA 04 CHETUMAL – MÉXICO</p>
                                </v-card-text>
                             </div>
                          </v-expand-transition>
                       </v-card>
                    </v-slide-item>
                 </v-slide-group>
              </v-sheet>
           </v-container>
        </v-content>
     </v-app>
  </div>
</template>
<script>
import PopCard from './PopCard.vue';  
export default {
  components: {PopCard},
    data: () => ({
      model: null,
      show:false,
      see:false,
      show1:false,
      show2:false
    })
  }
</script>