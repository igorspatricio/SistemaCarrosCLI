<template>

        <tr v-for="item in itens " :key="item.cpf">
            <td v-for="(value, key) in item" :key="key" >
                <div v-if="value === 'Cadastro-carros-cpf'">
                    <router-link :to="{name: value, params: {cpf: item.cpf}}">
                        <button>Cadastrar Carro</button>
                    </router-link>
                    
                </div>
                <div v-else-if=" value === 'Cadastro-revisao-placa'">
                    <router-link :to="{name: value, params: {placa: item.placa}}">
                        <button>Cadastrar Revisao</button>
                    </router-link>
                </div>
                <div v-else>
                    {{  value }}
                </div>
            </td>
        </tr>

</template>

<script>
    export default {
        name: 'Table-Data',

        props:{
            itens:Array
        }
    }
</script>

<style  scoped>

td {
  text-align: left;
  padding: 8px;
  border-radius: 2px;

}

tr:nth-child(even){
    background-color:#dddddd;

}

</style>