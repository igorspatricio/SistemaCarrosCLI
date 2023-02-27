<template>
  <div>
    <button @click="changeShowFrom()">Mostrar Cadastro</button>
    <FormPessoa 
      @add-pessoa="addPessoa"  v-show="showForm"/>
    <Table :pessoas="pessoasList"/>
  </div>
</template>

<script>


import axios from 'axios';
import Table from '../components/Table/Table.vue'
import FormPessoa from '../components/FormPessoa.vue'
export default {
  name: 'Show-Pessoas',
  components: {
    Table,
    FormPessoa,
  },
  data(){
    return{
      pessoasList : [],
      showForm : false
    }
  },
  created() {
      axios.get('https://sistemacarrros.onrender.com/pessoas')
        .then(response => {
          this.pessoasList = response.data.map(pessoa =>{
            delete pessoa.createdAt;
            delete pessoa.updatedAt;
            pessoa.adiciona_carro = "/Carros/cadastro?cpf="+pessoa.cpf
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
          console.log(response.data);
          this.pessoasList.push(pessoa)
          
        })
        .catch(error =>{
          alert("CPF já cadastrado!");
          console.log(error.data);
          
        })
      }
    },

};
</script>

<style >




table {
  border-collapse: collapse;
  width: 90%;
}

th, td {
  text-align: left;
  padding: 8px;
}
th{
	background-color: gray;
}



</style>
