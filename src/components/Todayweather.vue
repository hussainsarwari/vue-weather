<template>
    <div id="todayeweather">
<h2>Today Weather <span class="date">2022/2/23</span></h2>
<hr>
<div id="airquality">
    <h4>Weather Quality index</h4>
    <span id="quality">good</span>
    <hr>
    <div class="humidity">
        <h6>Humidity</h6>
        <h1>40<span>%</span></h1>
    </div>
    <div class="pressure">
        <h6>Pressure</h6>
        <h1>1011 <span>hPa</span></h1>
    </div>
</div>

<div class="sunrise">
    <h4>sunrise and sunset</h4>
    <hr>
 <div class="rise">
    <h5>sunrise</h5>
    <h2>
        5:36AM
    </h2>
   
 </div>
 <div class="set">
    <h5>sunset</h5>
    <h2>6:12PM</h2>
 </div>
</div>
<Hourly/>
    </div>
</template>

<script>
import Hourly from './Hourly.vue';
    export default {
        components:{
            Hourly
        }

    }
</script>

<style  scoped>
.rise,.set{
    width: 48%;
    display: inline-block;
    background: #06060659;
    margin-top:2em;
    text-align: center;
}
.sunrise{
    background: #00000085;
    width: 95%;
    margin-top: 2em;
    padding: 1em;

}
.date{
    float: right;
}
.humidity{
    display: inline-block;
    text-align: center;
    width: 50%;
    background: #06060659;
}
.pressure{
    display: inline-block;
    background: #06060659;
    text-align: center;
    width: 49%;
    border-left: 1px solid #595858;
}
#quality{
    float: right;
    width: 4em;
    display: grid;
    background: #34ff34;
    text-align: center;
    color: #333;
    height: 1.4em;
    padding: 0.2em;
    font-size: 0.8em;
    border-radius: .5em;
    align-items: center;
}
h4{
    margin: 0;
    display: inline;
}
#todayeweather{
    width: 95%;
    backdrop-filter: brightness(0.5);
   -webkit-backdrop-filter: brightness(0.5);
    padding: 1em;
    color: #FFF;
    font-family: sans-serif;
}
#airquality{
    width: 96%;
    background: #00000045;
    height: 10em;
    padding: .8em;
}
</style>