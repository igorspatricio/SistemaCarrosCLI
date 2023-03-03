<template>
    <div>
        <FormRevisao @add-revisao="addRevisao"/>
    </div>
</template>

<script>
import FormRevisao from '../components/FormRevisoes.vue'
import axios from 'axios'
    export default {
        name: 'Cadastro-revisao',
        components:{
            FormRevisao
        },
        methods: {
            addRevisao(revisao){
                axios.post('/api/revisoes', revisao)
                    .then((response) =>{
                        alert(response.data);
                    })
                    .catch((error) => {
                        alert(error.response.data);
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>