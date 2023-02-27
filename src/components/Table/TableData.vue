<template>

        <tr v-for="item in itens " :key="item.cpf">
            <td v-for="(value, key) in item" :key="key" >
                <div v-if="value[0] != '/'">
                    {{  value }}
                </div>
                <div v-else>
                    <router-link :to="value">
                        <button>Cadastrar Carro</button>
                    </router-link>
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

</style>