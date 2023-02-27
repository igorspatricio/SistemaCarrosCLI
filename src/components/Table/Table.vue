<template>
    <table>
        <TableHeader :headers="getHeaders()"/>
        <TableData :itens="pessoas"/>
        
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
                type:Array,
                required:true
            }
        },
        methods: {
            getHeaders(){
                if (this.pessoas)
                    return Object.keys(this.pessoas[0]);
            }
        },
    }
    
</script>

<style   scoped>

</style>