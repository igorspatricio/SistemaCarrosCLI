<template>
    <div class="chartBlock" v-if="dataReady">
        <div class="chart" v-for="data in chartData" :key="data" >
            <h3>{{  data.title}}</h3>
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
    name: 'Carros-Relatorios',
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
        const {data} = await axios.get('https://sistemacarrros.onrender.com/carros/getNumberCarrosOwnerPerGender')
        const dataMarcas = await axios.get('https://sistemacarrros.onrender.com/carros/getCountCarrosMarcas')
        const dataMarcasGenero = await axios.get('https://sistemacarrros.onrender.com/carros/getCountCarrosMarcasGenero')

        if(data && dataMarcas && dataMarcasGenero){
            this.chartData = [{
                title: "Quantidade de carros Homen vs Mulheres",
                type: 'pie',
                data:{
                    labels:['Homens',' Mulheres'],
                    datasets: [{
                        label: 'Quantidade Carros',
                        data: [data[0].count, data[1].count],
                        backgroundColor: [
                            'blue',
                            'red'
                        ],
                        hoverOffset: 4,
                        
                    }]
                }
            }]
            var dataMarcasProcessed = dataChartProcess.processMarcas(dataMarcas.data)
            
            this.chartData.push({
                title: "Quantidade de Marcas",
                type: 'bar',
                data:{
                    labels: Object.keys(dataMarcasProcessed),
                    datasets: [{
                        label: 'Quantidade Marcas',
                        data: Object.values(dataMarcasProcessed),
                        backgroundColor: [
                            'black',
                            'dodgerblue'
                        ],
                        
                    }]
                }
            })

            const dataMarcasGeneroProcessed = dataChartProcess.processMarcasGenero(dataMarcasGenero.data)
            this.chartData.push({
                title: "Marcas Por Genero",
                type: 'radar',
                data:{
                    labels: dataMarcasGeneroProcessed.labels,
                    datasets: [
                        {
                            label: 'Homens',
                            data: dataMarcasGeneroProcessed.homens,
                            fill: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(54, 162, 235)',
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)'                          
                        },
                        {
                            label: 'Mulheres',
                            data: dataMarcasGeneroProcessed.mulheres,
                            fill: true,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)' 
                                                 
                        },
                    ]
                }
            })
            


            this.dataReady = true
        }
    },

}


</script>

<style scoped>
@import url('../css/charts.css');
</style>