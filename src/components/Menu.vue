<template>
  <div class="grid-container">
    <router-link v-for="(opcao) in opcoes" :key="opcao" :to="opcao" class="itens">
    <div  >
      
      <p>{{opcao}}</p>
    
    </div>
  </router-link>
    

  </div>
</template>

<script>

export default {
  name: 'Grid-Menu',
  props: {
    opcoes: Array, 
  }
}
</script>

<style scoped>

.grid-container {
  width: calc(100% - 20px); /* 20px de padding e border */
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;

  padding: 10px;
  text-align: center;
}

.grid-container > a {
  background-color:gray;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  border-radius: 4px;
}
p{
  text-decoration: none;
  text-align: center;
}

a{
  color: black;
  text-decoration: none;
}
.itens:hover{
  background-color: dodgerblue;
}
a:hover{
  color: white;
}
</style>