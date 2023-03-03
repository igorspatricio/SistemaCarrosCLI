<template>

<div class="main">
    <div class="column side">
        <nav>
            <h3>Relatorios</h3>
            <p :class="active == 'pessoas' ? 'active' : ''" @click="change('pessoas')">Pessoas</p>
            <p :class="active == 'carros' ? 'active' : ''" @click="change('carros')">Carros</p>
            <p :class="active == 'revisoes' ? 'active' : ''" @click="change('revisoes')">Revisoes</p>
        </nav>
    </div>
    <div class="column middle">  
        <PessoasRelatorio v-show="active == 'pessoas'"/>
        <CarrosRelatorio v-show="active == 'carros'" />
        <RevisaoRelatorioVue v-show="active == 'revisoes'"  />
    </div>    
</div>
</template>

<script>

    import PessoasRelatorio from '../components/PessoasRelatorio.vue'
    import CarrosRelatorio from '../components/CarrosRelatorio.vue'
    import RevisaoRelatorioVue from '../components/RevisaoRelatorio.vue'

    export default {
    name: 'Route-Revisoes',
    components: { 
        PessoasRelatorio,
        CarrosRelatorio,
        RevisaoRelatorioVue
        
    },
  data() {
    return {
        active:'',

    } 
},
  methods: {
    change(newActive){
        this.active = newActive
    }
  },
 
}
</script>

<style  scoped>
.main{
    width: 100%;
    height: 100%;
}
.column {
  float: left;
}

/* Left and right column */
.column.side {
    height: 100%;
  width: 10%;
  

}

/* Middle column */
.column.middle {
  width: 80%;
  height: 100%;
}

h3{
    text-align: center;

    padding: 12px;
    margin-bottom: 0px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;

}
p{
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  color: black;
}
p:hover{
    background-color: #ddd;
  color: black;
}

p.active{  
    background-color: dodgerblue;
    color: white;

}



</style>