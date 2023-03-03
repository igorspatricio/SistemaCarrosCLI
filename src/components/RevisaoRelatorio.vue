<template>
    <div class="chartBlock" v-if="dataReady">
        <div class="chart" v-for="data in chartData" :key="data" >
            <h3>{{  data.title }}</h3>
            <Pie v-if="data.type == 'pie'" :data="data.data"/>
            <Bar v-if="data.type == 'bar'" :data="data.data" />
            <Radar v-if="data.type == 'radar'" :data="data.data"/>
        </div>

    </div>
</template>

<script>
import dataChartProcess from '@/js/dataChartProcess'

import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Title, BarElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'

import { Pie, Bar, Radar } from 'vue-chartjs'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, RadialLinearScale, PointElement, LineElement, Filler)


export default {
    name: 'Revisao-Relatorios',
    components: {
        Pie,
        Bar,
        Radar
    },
    data() {
        return {
            chartData: null,
            dataReady: false
        }
    },
    async mounted() {
            const revisoesMarca = await axios.get('https://sistemacarrros.onrender.com/revisoes/marca')
            const revisoesNome = await axios.get('https://sistemacarrros.onrender.com/revisoes/nome')
            const revisoesDataNome = await axios.get('https://sistemacarrros.onrender.com/revisoes/DataAndName')

            if(revisoesNome, revisoesMarca, revisoesDataNome){

                var dataMarca = dataChartProcess.processRevioesMarca(revisoesMarca.data)
                
                this.chartData = [{
                title: "Revisao por Marca",
                type: 'bar',
                data:{
                    labels: dataMarca.labels,
                    datasets: [{
                        label: 'Quantidade Marcas',
                        data: dataMarca.data,
                        backgroundColor: [
                            'black',
                            'dodgerblue'
                            ],
                        
                        }]
                    }
                }]
                var dataNome = dataChartProcess.processRevioesNome(revisoesNome.data)
                this.chartData.push({
                    title: "Revisao por Nome",
                    type: 'bar',
                    data:{
                        labels: dataNome.labels,
                        datasets: [{
                            label: 'Quantidade Revisoes',
                            data: dataNome.data,
                            backgroundColor: [
                                'black',
                                'dodgerblue'
                                ],
                            
                            }]
                        }
                })

                var mediaDataNome = dataChartProcess.processDataName(revisoesDataNome.data)
                this.chartData.push({
                    title: "Media de dias entre revisoes",
                    type: 'bar',
                    data:{
                        labels: dataNome.labels,
                        datasets: [{
                            label: 'Media entre as revisoes',
                            data: mediaDataNome.data,
                            backgroundColor: [
                                'black',
                                'dodgerblue'
                                ],
                            
                            }]
                        }
                })
                this.dataReady = true
            }
        }
}




</script>

<style scoped>

@import url('../css/charts.css');
</style>