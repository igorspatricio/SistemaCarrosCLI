<template>
    <table>
        <TableHeader :headers="getHeaders()" @sort-change="emitAgain"/>
        <TableData :itens="pessoas" />
        
    </table>
</template>

<script>

import TableHeader from "./TableHeader.vue"
import TableData from "./TableData.vue"
    export default {
        name: 'List-Table',
        components: {
            TableHeader,
            TableData
        },
        props: {
            pessoas: {
                type: Array,
                required:true
            }
            
        },
        methods: {
            getHeaders(){
                if (this.pessoas.length > 0)
                    return Object.keys(this.pessoas[0]);
            },
            emitAgain(howIsSorted){
                this.$emit('sort-change', howIsSorted)
            }
        },
    }
    
</script>

<style   scoped>
table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  margin-bottom: 15px;

}



</style>