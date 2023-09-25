<template>
    <div id="home">
<Dashbord/>
<Weather/>
    </div>
</template>

<script>
import Dashbord from '@/components/Dashbord.vue';
import Weather from '@/components/Weather.vue';

    export default {
        components:{
            Dashbord,
            Weather
        }
    }
</script>

<style  scoped>
#home{

    width: 100%;
    height: 49vw;
    background-image: url("../assets/images/img\ \(11\).jpg");
background-size: cover;
}
</style>