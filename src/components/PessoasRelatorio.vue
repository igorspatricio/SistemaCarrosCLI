<template>
    <div class="chartBlock">
        <div class="chart">
            <h3>Quantidade de Homens e Mulheres</h3>
        <Pie v-if="render"
            :data="chartData" 
            :options="options"
            />
        </div>
        <div class="chart">
            <h3>Media de idade Homens e Mulheres</h3>
            <Pie v-if="render"
            :data="chartData2"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'Pessoas-Relatorios',
    components: {
        Pie
    },
    data() {
        return {
            chartData: null,
            chartData2: null,
            data: null,
            render:false,
            options :{
                responsive: true
            }
        }
    },
    async mounted() {
        var idade = []
        var quantidade = []
        const {data} = await axios.get('https://sistemacarrros.onrender.com/pessoas/infobygender')
        
        if (data){
            
            for (var i = 0; i < data.length; i++){

                quantidade.push(data[i].quantidade)
                idade.push(data[i].media_idade)
            }
            this.chartData = {
                labels:['Homens',' Mulheres'],

                datasets: [{
                    label: 'Quantidade',
                    data: quantidade,
                    backgroundColor: [
                        'blue',
                        'red'
                    ],
                    hoverOffset: 4,
                    
                }]

            }
            this.chartData2 = {
                labels:['Homens','Mulheres'],

                datasets: [{
                    label: 'Media Idade',
                    data: idade,
                    backgroundColor: [
                        'blue',
                        'red'
                    ],
                    
                    
                }]
            }
            this.render = true
        }
    },

}


</script>

<style scoped>
@import url('../css/charts.css');
</style>