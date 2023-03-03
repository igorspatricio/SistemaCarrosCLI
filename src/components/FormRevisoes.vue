<template>
    <div>
        <form @submit="onSubmit">

            <label>Placa</label>
            <input type="text" v-model="placa" name="placa" placeholder="Adcione a placa.."> 

            <label>Custo</label>
            <input type="number" v-model="custo" name="custo" placeholder="Adcione a custo..">
            
            <label>Data</label>
            <input type="date" v-model="data" name="data" placeholder="Adcione a data..">

            <label>Descricao</label>
            <textarea type="textarea" rows="5"  v-model="descricao" name="descricao" placeholder="Adcione a descricao.."> </textarea>

            <input type="submit" value="Cadastrar">
        </form>

    </div>
</template>

<script>
    function todayDate(){
        const data = new Date();
        const dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
        const mes = data.getMonth() + 1 ? '0' + (data.getMonth() + 1) : data.getMonth() +1; 
        const ano = data.getFullYear() 
        return ano + '-' + mes + '-' + dia
    }


    export default {
        name:"Form-Revisoes",
        data() {
            return {
                placa: this.$route.params.placa,
                custo: null,
                data: todayDate(),
                descricao: null,
            }
        },
        methods: {
            onSubmit(e){

                e.preventDefault();
                console.log(this.data);

                if( !(this.placa && this.custo && this.data && this.descricao) ){
                    alert("Preencha todos os campos");
                    return;                     
                }
                const newRevisao = {
                    placa: this.placa,
                    custo: this.custo,
                    data: this.data,
                    descricao: this.descricao,
                };

                this.$emit('add-revisao', newRevisao);



                this.placa     = '';
                this.custo     = '';
                this.data      = '';
                this.descricao = '';

            }
        }
    }
    
    
</script>

<style lang="scss" scoped>

</style>