<template>
    <div>
<h4>Hourly forcast</h4>
<hr>
<div class="hourly">
    <span id="am3">
        <h3>3 AM</h3>
        <Svg></Svg>
    </span>
    <span id="am6"><h3>6 AM</h3></span>
    <span id="am9"><h3>9 AM</h3></span>
    <span id="am12"><h3>12 AM</h3></span>
    <span id="pm3"><h3>3 PM</h3></span>
    <span id="pm6"><h3>6 PM</h3></span>
    <span id="pm9"><h3>9 PM</h3></span>
    <span id="pm12"><h3>12 PM</h3></span>
   
</div>


    </div>
</template>

<script>

import Svg from './Svg.vue'
    export default {
        components:{
            Svg
        
        },
    }
</script>

<style scoped>
div{
    width: 95%;
    padding: 1em;
    background: #0000008a;
    margin-top: 2em;
}





</style>