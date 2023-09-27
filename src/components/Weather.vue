<template>
    <div id="weather">
        <Svg item="3" id="svg"></Svg>
       
        <Todayweather></Todayweather>
        <Fivedayforecast/>

    </div>
</template>

<script>
import Svg from './Svg.vue';
import Todayweather from './Todayweather.vue';
import Fivedayforecast from './Fivedayforecast.vue';
    export default {
        components:{
            Svg,
            Todayweather,
            Fivedayforecast
        }
        
    }
</script>

<style  scoped>


#weather{
    position: absolute;
    right: 11px;
    top: 17px;
    width: 70%;
    
}
#svg{
    
    height: 20em;
}

@media screen and (max-width:1000px) {
    svg{
        width: 20%;
        left: 15em;
    }
}

</style>