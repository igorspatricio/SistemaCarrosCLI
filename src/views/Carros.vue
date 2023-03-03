<template>
    <div>
        <router-link :to="{name: 'Cadastro-carros'}">
        <button>Cadastrar um novo Carro</button>
    </router-link>
      <Table :pessoas="carrosList" @sort-change="sortTable"/>
    </div>
</template>
  
<script> 

    import axios from 'axios';
    import Table from '../components/Table/Table.vue'
    import sortjsList from '../js/sortTable';


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
                    carro.Cadastro_Revisao = 'Cadastro-revisao-placa';

                    return carro
                });
                console.log(response.data);

            
            })
            .catch(error => {
            console.log(error);
            });
        
        },
        methods:{
            sortTable(howIsSorted){
                this.carrosList = sortjsList.sortTable(howIsSorted, this.carrosList)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
