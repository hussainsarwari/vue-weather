<template>
    <div id='five'>



<h1>5 Days forecast</h1>
<hr>
<Fiveday/>





    </div>
</template>

<script>
import Fiveday from './Fiveday.vue';
    export default {
        components:{
Fiveday
        }
    }
</script>

<style scoped>
   div#five{
    text-transform: capitalize;
    width: 92%;
    height: 26em;
    background: #00000057;
    padding: 2em;
    text-align: center;
    margin-top: 12em;
   }
</style>