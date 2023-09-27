<template>
    <div id="home">
        <img id='image' src="../assets/images/5.jpg" alt="background">
    
   <Message/>
<Dashbord/>
<Weather/>

    </div>
</template>

<script>
import Dashbord from '@/components/Dashbord.vue';
import Weather from '@/components/Weather.vue';
import Message from '@/components/Message.vue';


    export default {
        components:{
            Dashbord,
            Weather,
            Message
        }
    }
</script>

<style  scoped>
#image{
    width: 100%;
    position: fixed;
}
#home{
    width: 100%;
    height: 49vw;
}
@media  screen and (max-width:1200px) {
    #home{
        height: 60vw;
    
}
@media  screen and (max-width:1100px) {
    #home{
        height: 58vw;    }}}
@media  screen and (max-width:1000px) {
    #home{
        height: 73vw;    }}
@media  screen and (max-width:830px) {
    #home{
        height: 79vw;    }}
@media  screen and (max-width:740px) {
    #home{
        height: 90vw;    }}
@media  screen and (max-width:640px) {
    #home{
        height: 110vw;    }}
</style>