<template>
    <div id="days">
<span id="saturday">
    <h4 id="day">saturday</h4>
    <h5 id="date">2 march</h5>
    <Svg item="2" flag="true"  flag2="true"></Svg>
    <h6 class="tem">23 <span>&#8451</span></h6>

</span>
<span id="sunday">
    <h4 id="day">sunday</h4>
    <h5 id="date">3 march</h5>
    <Svg item="3" flag="true" flag2="true"></Svg>
    <h6 class="tem">21 <span>&#8451</span></h6>  
</span>
<span id="monday">
    <h4 id="day">monday</h4>
    <h5 id="date">4 march</h5>
    <Svg item="1" flag="true"  flag2="true"></Svg>
    <h6 class="tem">23 <span>&#8451</span></h6>
</span>
<span id="tuesday">
    <h4 id="day">tuesday</h4>
    <h5 id="date">5 march</h5>
    <Svg item="9" flag="true"  flag2="true"></Svg>
    <h6 class="tem">13 <span>&#8451</span></h6>
</span>
<span id="wednesday">
    <h4 id="day">wednesday</h4>
    <h5 id="date">6 march</h5>
    <Svg item="12" flag="true"  flag2="true"></Svg>
    <h6 class="tem">2 <span>&#8451</span></h6>
</span>
    </div>
</template>
<script>

import Svg from './Svg.vue'
    export default {
        components:{
            Svg
        }
    }
</script>

<style scoped>
div#days{
    width: 92%;
    height: 14em;
    background: #0000008e;
    padding: 2em;
    margin-top: 2em;
    display: grid;
    text-align: center;
    grid-template-columns: 10em 10em 10em 10em 10em;
}
div span{
    height: 5em;
    text-align: center;
}
span div{
    text-align: center;
    height: 3em;
}
span div span{
    height: 2em;
    text-align: center;
    display: flex;
}
</style>