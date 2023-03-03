<template>
    <div>
        <FormCarro @add-carro="addCarro" />

    </div>
</template>
<script>
import FormCarro from '../components/FormCarro.vue';
import axios from 'axios';
    export default {
        name:"Cadastro-Carro",
        components:{
            FormCarro
        },
        methods: {
            addCarro(carro){
                axios.post('https://sistemacarrros.onrender.com/carros/getNumberCarrosOwnerPerGender/carros', carro)
                    .then(result => {
                        alert(result.data)
                    })
                    .catch(error =>{
                        alert(error.response.data);
                    })          
            }
        },
    }
    
    
</script>

<style lang="scss" scoped>

</style>