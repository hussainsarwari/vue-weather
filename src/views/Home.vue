<template>
  <div id="home">
    <img id="image" src="../assets/images/5.jpg" alt="background" />

    <Message />
    <Dashbord />
    <Weather />
  </div>
</template>

<script>
import Dashbord from "@/components/Dashbord.vue";
import Weather from "@/components/Weather.vue";
import Message from "@/components/Message.vue";

export default {
  components: {
    Dashbord,
    Weather,
    Message,
  },
  mounted() {
    //call api function
    makeRequest();






// create functions
    function searchcity(city) {
      //call api with search a city
       httpRequest = new XMLHttpRequest();
      if (! httpRequest) {
        alert("Cannot create XMLHTTP instance!");
        return false;
      }

      httpRequest.open(
        "GET",
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=b86642f74eb1a597dbbc482ab9c0f527"
      );
      httpRequest.onreadystatechange = () => {
        if ( httpRequest.readyState != 4) {
          return;
        }
        if ( httpRequest.status == 200) {
          // response code
          console.log( httpRequest.response + "done it worked");
        }
        if ( httpRequest.status != 200) {
          // not found
          alert(
             httpRequest.status +
              ": " +
               httpRequest.statusText_ +
              "sorry your resonse not found"
          );
          alert( httpRequest.readyState);
        }
      };
      httpRequest.send();
    }

    function makeRequest() {
        let httpRequest;
       httpRequest = new XMLHttpRequest();
      if (! httpRequest) {
        alert("Cannot create XMLHTTP instance!");
        return false;
      }
       httpRequest.responseType='json';
       httpRequest.open(
        "GET",
        "https://api.openweathermap.org/data/2.5/forecast?q=kabul&appid=b86642f74eb1a597dbbc482ab9c0f527"
      );
       httpRequest.onreadystatechange = () => {
        if ( httpRequest.readyState != 4) {
          return;
        }
        if ( httpRequest.status == 200) {
          // response code
          document.querySelector("#dashbord > h4").textContent=httpRequest.response.city.name + " ,"+httpRequest.response.city.country;
          document.querySelector("#text > h3:nth-child(2)").textContent=httpRequest.response.list[0].wind.speed+" KM/H";
          document.querySelector("#text > h3:nth-child(4)").textContent=httpRequest.response.list[0].main.humidity+" %";
          document.querySelector("#dashbord > span > h3").textContent=(httpRequest.response.list[0].main.temp-273.15).toFixed(1);
          //tofixed() used to format a float number exam: x=2.0000000, x.toFixed(2)=> 2.00
          document.querySelector("#airquality > div.humidity > h1").textContent=httpRequest.response.list[0].main.humidity+"%"; 
          document.querySelector("#airquality > div.pressure > h1").textContent=httpRequest.response.list[0].main.pressure+" hPa"
          console.log(httpRequest.response);
       
        }
        if ( httpRequest.status != 200) {
          // not found
          alert( httpRequest.status + ": " +  httpRequest.statusText_);
          alert( httpRequest.readyState);
        }
      };
       httpRequest.send();
    }
  },
};
</script>

<style scoped>
#image {
  width: 100%;
  position: fixed;
}
#home {
  width: 100%;
  height: 49vw;
}
@media screen and (max-width: 1200px) {
  #home {
    height: 60vw;
  }
  @media screen and (max-width: 1100px) {
    #home {
      height: 58vw;
    }
  }
}
@media screen and (max-width: 1000px) {
  #home {
    height: 73vw;
  }
}
@media screen and (max-width: 830px) {
  #home {
    height: 79vw;
  }
}
@media screen and (max-width: 740px) {
  #home {
    height: 90vw;
  }
}
@media screen and (max-width: 640px) {
  #home {
    height: 110vw;
  }
}
</style>
