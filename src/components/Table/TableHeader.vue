<template>
    <tr>
        <th v-for="header in headers " :key="header">
            {{ header.replace("_", " ").toUpperCase() }}
        </th>
    </tr>
</template>

<script>
    export default {
        name: 'Table-Header',
        
        props:{
            headers: Array
        }
    }
</script>

<style lang="scss" scoped>

</style>