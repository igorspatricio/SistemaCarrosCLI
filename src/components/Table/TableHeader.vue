<template>
    <tr>
        <th v-for="header in headers " :key="header" @click="decideSort(header)">
            {{ header.replaceAll("_", " ").toUpperCase() }}

            <div v-if="howIsSorted.which == header" class="vazio">
                {{howIsSorted.sortType}}
            </div >
            <div v-else class="vazio">
                -
            </div>
        </th>
    </tr>
</template>

<script>
    export default {
        name: 'Table-Header',
        
        props:{
            headers: Array
        },
        data() {
            return {
                howIsSorted:{
                    which: '',
                    sortType: ''
                }
            }
        },
        methods: {
            decideSort(header){
                this.howIsSorted.which = header
                this.howIsSorted.sortType = this.howIsSorted.sortType === '▾'? '▴' : '▾';
                this.$emit('sort-change', this.howIsSorted)

            }
        },
    }
</script>

<style  scoped>
.vazio{
    display:inline;
}


th{
  text-align: left;
  padding: 8px;
  background-color: gray;
  border-radius: 2px;
}


</style>