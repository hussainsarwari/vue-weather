<template>
    <div>
<h4>Hourly forcast</h4>
<hr>

<div class="hourly">
    <span class="a" id="am3">
        <h3>3 AM</h3>
        <Svg flag="true" item="9" ></Svg>
         <h5 class="dem">12  &#8451 </h5>
    </span>
    <span class="a" id="am6"><h3>6 AM</h3><Svg  flag="true" item="3" ></Svg><h5 class="dem">15  &#8451 </h5></span>
    <span class="a" id="am9"><h3>9 AM</h3><Svg  flag="true" item="2" ></Svg><h5 class="dem">14  &#8451 </h5></span>
    <span class="a" id="am12"><h3>12 AM</h3><Svg  flag="true" item="1" ></Svg><h5 class="dem">22  &#8451 </h5></span>
    <span class="a" id="pm3"><h3>3 PM</h3><Svg  flag="true" item="5" ></Svg><h5 class="dem">4  &#8451 </h5></span>
    <span class="a" id="pm6"><h3>6 PM</h3><Svg  flag="true" item="3" ></Svg><h5 class="dem">2  &#8451 </h5></span>
    <span class="a" id="pm9"><h3>9 PM</h3><Svg  flag="true" item="2" ></Svg><h5 class="dem">9  &#8451 </h5></span>
    <span class="a" id="pm12"><h3>12 PM</h3><Svg  flag="true" item="17" ></Svg><h5 class="dem">10  &#8451 </h5></span>
   
</div>


    </div>
</template>

<script>

import Svg from './Svg.vue'
    export default {
        components:{
            Svg
        
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
h5{
    position:relative;
    bottom: 2em;
}
div{
    width: 95%;
    padding: 1em;
    background: #0000008a;
    margin-top: 2em;

}
.hourly{
    display: grid;
    grid-template-columns: 12% 12% 12% 12% 13% 13% 13% 13%;
    text-align: center;
}

span{
    height: 10em;
    border-right: 1px solid #0000008a;
    border-left: 1px solid #0000008a;
}

span div{
    background: none;
    height: 20%;
    width: 60%;
}


</style>