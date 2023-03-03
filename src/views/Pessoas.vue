<template>
  <div class="content">
    <div>
    <button @click="changeShowFrom()">Mostrar Cadastro</button>
    <FormPessoa 
      @add-pessoa="addPessoa"  v-show="showForm"/>
      <br>
    </div>
    <Table @sort-change="sortTable" :pessoas="pessoasList" v-show="pessoasList.length > 0"/>

  </div>
</template>

<script>


import axios from 'axios';
import Table from '../components/Table/Table.vue'
import FormPessoa from '../components/FormPessoa.vue'
import sortJsList from '../js/sortTable.js'

export default {
  name: 'Route-Pessoas',
  components: {
    Table,
    FormPessoa,
  },
  data(){
    return{
      pessoasList :[],
      showForm : false
    }
  },
  created() {
    axios.get('https://sistemacarrros.onrender.com/pessoas/withcarowned')
        .then(response => {
          this.pessoasList = response.data.map(pessoa =>{
            delete pessoa.createdAt;
            delete pessoa.updatedAt;
            pessoa.adiciona_carro = "Cadastro-carros-cpf"
            return pessoa
          });
          
        })
        .catch(error => {
          console.log(error);
        });
      
    },
    methods: {
      changeShowFrom(){
        this.showForm = !this.showForm 
      },
      getKeysPessoa(){
        return Object.keys(this.pessoasList[0])
      },
      addPessoa(pessoa){
        console.log(pessoa);
        axios.post('https://sistemacarrros.onrender.com/pessoas', pessoa)
        .then(response =>{
          alert(response.data);
          pessoa.adiciona_carro = "Cadastro-carros-cpf";
          pessoa.carros_cadastrados = 0
          this.pessoasList.push(pessoa);
          
        })
        .catch(error =>{
          alert(error.response.data);
          
        })
      },
      sortTable(howIsSorted){
        this.pessoasList = sortJsList.sortTable(howIsSorted, this.pessoasList)
          
      }
       
    },

};
</script>

<style >

.content{
  display: flex;
  flex-direction: column;
}





</style>
