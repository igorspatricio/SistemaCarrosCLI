<template>
    <div>
        <form @submit="onSubmit">

            
            <label>CPF</label>
            <input type="text" v-model="cpf" name="cpf" placeholder="Adcione o cpf.."> 

            <label>Nome</label>
            <input type="text" v-model="nome" name="nome" placeholder="Adcione um nome..">

            <label >Idade</label>
            <input type= "number" v-model="idade" name="idade" placeholder="Adcione a idade..">
            
            <label>Genero</label>
                <select  name="genero" v-model="genero" >
                    <option value="m">Masculino</option>
                    <option value="f">Feminino</option>
                </select>


            

        <input type="submit" value="Cadastrar">
        </form>
    </div>
</template>

<script>


import validaCPF from '../valida_cpf.js'
    export default {
        name: "Register-Pessoa",
        props:{
            
        },
        data() {
            return {
                cpf:'',
                nome:'',
                idade:'',
                genero:''
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                //validar data
                if(!validaCPF.validaCPF(this.cpf)){
                    alert("cpf invalido!");
                    return;
                }
                if( !(this.nome && this.idade && this.genero )){
                    alert("Preencha todos os campos");
                    return; 
                }

                const newPessoa = {
                    cpf : validaCPF.processCpf(this.cpf),
                    nome: this.nome,
                    idade: this.idade,
                    genero: this.genero
                };
                this.$emit('add-pessoa', newPessoa);


                this.cpf    = '';
                this.nome   = '';
                this.idade  = '';
                this.genero = '';
                
            },  
        }
    }


    
</script>
    
<style  scoped>
@import url('../css/form.css');
</style>