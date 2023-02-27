<template>
    <div>
    <Menu :opcoes="['Pessoas', 'Carros',  'Revisoes', 'Relatorios']" /> 
    </div>

</template>

<script>
//
import Menu from '../components/Menu.vue'

export default {
  name: 'Home-Menu',
  components: {
    Menu,
  }

};
</script>

<style scoped>
div{
    height: 100%;
    align-content: center;
}
</style>