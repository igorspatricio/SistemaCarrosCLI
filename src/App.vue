<template>
  <div class="container">
    <Header titulo="Revisoes Carros" :opcoes="['Home', 'Pessoas','Carros',  'Revisoes', 'Relatorios']" />
    <main >
      <router-view ></router-view>
    </main>
    <Footer/>
  </div>
  

</template>
<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default{
    name: 'App',
    components:{
      Header,
      Footer,
    },
  }
</script>

<style>




  body {
    margin: 0;
  }

  .container {
    display: grid;
    grid: 80px auto 80px / 120px auto;
    min-height: 100vh;
  }

  main{
      min-width:100vw;
      background-color: white;

    }

  button{
    margin: 3px;
    padding: 5px;
    border-radius: 4px;
    border-color: gray;
    background-color:gray ;
  }
  button:hover{
    border-color: dodgerblue;
    background-color:dodgerblue ;
  }

</style>
