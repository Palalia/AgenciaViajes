<template>
  <div  data-spy="scroll" data-target="#navbar1" data-offset="0">
    <barraNavegacion/>
    <InicioSection />
    <DestinosSection />
   <ContactoSection/>
    <div data-scroll-nav="preguntas"><PreguntasSection/></div>
    <FooterSection/>
  </div>
  
</template>
<script>
import barraNavegacion from './components/barraNavegacion';
import DestinosSection from './components/DestinosSection';
import InicioSection from './components/InicioSection';
import ContactoSection from './components/ContactoSection';
import PreguntasSection from './components/PreguntasSection';
import FooterSection from './components/FooterSection';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    barraNavegacion,
    DestinosSection,
    InicioSection,
    ContactoSection,
    PreguntasSection,
    FooterSection
  }
};
</script>
