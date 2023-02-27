<template>
    <div>
      <Table :pessoas="carrosList"/>
    </div>
  </template>
  
  <script>
  

import axios from 'axios';
import Table from '../components/Table/Table.vue'

export default {
name: 'Route-Carros',
components: {
    Table,
},
data(){
    return{
    carrosList : [],
    }
},
created() {
    axios.get('https://sistemacarrros.onrender.com/carros')
        .then(response => {
            this.carrosList = response.data.map(carro =>{
                delete carro.createdAt;
                delete carro.updatedAt;
                return carro
            });
            console.log(response.data);

        
        })
        .catch(error => {
        console.log(error);
        });
    
    }
}
</script>

<style lang="scss" scoped>

</style>