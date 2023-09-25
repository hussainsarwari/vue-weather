<template>
  <div id="dashbord">
<input type="text" name="search" id="search" placeholder="Search">
<h4>Kabul, Afghanistan</h4>
<span  class='dem numb'>22 <span  class='s'> &#8451  |</span><span class='s'> &#8457</span></span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.dem{
  color: #fff;
    /* position: absolute; */
    top: 6em;
    left: 2.6em;
    font-size: 3em;
}
.s{
font-size: .5em;
}
#dashbord{
  width: 26%;
    display: grid;
    box-shadow: -1px -3px 19px #4f4c4ba1;
    height: 49vw;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    justify-content: center;
    justify-items: center;
    align-content: space-evenly;

}
#dashbord input {
  height: 2em;
    background: #e7e7e73d;
    outline: none;
    width: 18em;
    border: none;
    border-radius: .5em .5em 0 0;
    border-bottom: 1px solid;
    color: #fff;
    padding: .4em 1em;
    margin-top: 2em;
    transition: all .2s ease-in;

}

::placeholder {
  color: #fff;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12 -18 */
  color: #fff;
}
h4{
  width: 100%;
    color: #fff;
    text-transform: capitalize;
    font-size: 0.9em;
    position: relative;
    font-family: sans-serif;
    border-bottom: 3px white;
    border-bottom-style: dashed;
    padding-bottom: .5em;
    height: 1.4em;
    bottom: 16em;
}
#dashbord input:hover{

} 
#dashbord input:active{

}#dashbord input:focus{
  border-bottom: 2px solid #2196F3;
    background: #333;
}
</style>