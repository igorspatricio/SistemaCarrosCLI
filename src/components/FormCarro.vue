<template>
    <div>
        <form @submit="onSubmit">
            <label>CPF Dono</label>
            <input type="text" v-model="cpf" name="cpf" placeholder="Adcione o cpf.."> 

            <label>Placa</label>
            <input type="text" v-model="placa" name="placa" placeholder="Adcione a placa.."> 

            <label>Marca</label>
            <input type="text" v-model="marca" name="marca" placeholder="Adcione a marca..">

            <label>Modelo</label>
            <input type="text" v-model="modelo" name="modelo" placeholder="Adcione o modelo..">
            
            <label>Ano</label>
            <input type="number" v-model="ano" name="ano" placeholder="Adcione o ano..">

            <label>Cor</label>
            <input type="text" v-model="cor" name="cor" placeholder="Adcione a cor..">

            <input type="submit" value="Cadastrar">
        </form>

    </div>
</template>

<script>
    import validaCPF from '../valida_cpf.js'
    export default {
        name:"Form-Carro",
        data() {
            return {
                cpf: this.$route.params.cpf,
                placa: '',
                marca: '',
                modelo: '',
                ano: '',
                cor: ''
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();

                if( !(this.cpf && this.marca && this.modelo && this.ano && this.cor && this.placa)){
                    alert("Preencha todos os campos");
                    return;                     
                }
                const newCarro = {
                    cpf_dono: validaCPF.processCpf(this.cpf),
                    marca: this.marca,
                    modelo: this.modelo,
                    ano: this.ano,
                    cor: this.cor,
                    placa: this.placa
                };
                console.log(newCarro);
                this.$emit('add-carro', newCarro);



                this.marca    = '';
                this.modelo   = '';
                this.ano      = '';
                this.cor      = '';
                this.placa    = '';
            }
        }
    }
    
    
</script>

<style lang="scss" scoped>

</style>