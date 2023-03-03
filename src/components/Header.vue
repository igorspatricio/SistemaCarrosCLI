<template>
     <header>
      <a href="#default" class="logo">{{titulo}}</a>
      <div class="header-right" >
        <router-link v-for="(opcao) in opcoes" :key="opcao" 
          :class=" WitchPage.includes(opcao) ? `active` : ``"  
          :to="{ path: '/' + opcao}">
          {{opcao}}
        </router-link>      
      </div>
     </header>
</template>
<script>

export default {
  name: 'Main-Header',
  props: {
    titulo: String,
    opcoes: Array, 
  },
  computed:{
    WitchPage(){
      return this.$route.path;
    }
  }
}
</script>

<style scoped>
header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;


}

header {
  overflow: hidden;
  background-color: black;

  padding: 20px 10px;
}

header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  color: white;
}
header a.logo {
  font-size: 25px;
  font-weight: bold;
}

header a:hover {
  background-color: #ddd;
  color: black;
}

header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}


</style>


