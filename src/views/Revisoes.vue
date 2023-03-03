<template>
    <div>
        
        <router-link :to="{name: 'Cadastro-revisao'}">
        <button>Cadastrar um nova Revisao</button>
        </router-link><br>
        <div class="data">
            <h4>Intervalo de dadas entre as revisoes</h4>
            <input type="date" v-model="data1" @change="filterData"> <input type="date" v-model="data2" @change="filterData">  
        </div>
        <Table @sort-change="sortTable" :pessoas="revisaoListdisplay"/>
    </div>
</template>

<script>
    import Table from '../components/Table/Table.vue'
    import axios from 'axios'
    import sortJsList from '../js/sortTable.js'

    export default {
        name:'Route-Revisoes',
        components:{
            Table
        },
        data(){
            return{
                revisaoListdisplay: [],
                revisaoList: [],
                data1: '',
                data2: ''
            }
        },
        created() {
            axios.get('https://sistemacarrros.onrender.com/revisoes')
                .then((response) =>{
                    this.revisaoList = response.data.map(revisao =>{
                        delete revisao.createdAt;
                        delete revisao.updatedAt;

                        return revisao
                    })
                    this.revisaoListdisplay = [... this.revisaoList]

                })
                .catch(error => {
                    console.log(error);
                })
        },
        methods: {
            sortTable(howIsSorted){
                
                 
                this.revisaoList = sortJsList.sortTable(howIsSorted, this.revisaoList)
                this.revisaoListdisplay = [... this.revisaoList]
                this.data1 = '';
                this.data2 = '';
            },
            filterData(){
                console.log(this.data1, this.data2);
                if(this.data1, this.data2){
                    this.revisaoListdisplay = [... this.revisaoList]
                    this.revisaoListdisplay = this.revisaoListdisplay.filter((item) => {
                        return (item.data >= this.data1) && (item.data < this.data2)
                    })
                }
            }   
        },

    }
</script>

<style  scoped>
.data{
    text-align: center;
    padding: 10px;
}
.data input{
    margin-right: 6px;
}
h4{
    margin: 10px
}
</style>