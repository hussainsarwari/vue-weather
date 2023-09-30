
class xmlhttpRequest {
 
  makeRequest(type, city) {
    this.httpRequest = new XMLHttpRequest();
    if (!this.httpRequest) {
      alert("Cannot create XMLHTTP instance!");
      return false;
    }

    httpRequest.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/" +
        type +
        "?q=" +
        city +
        "&appid=b86642f74eb1a597dbbc482ab9c0f527"
    );
    httpRequest.onreadystatechange = alertContents;
    httpRequest.send();
     }
  

  makeRequest() {
    this.httpRequest = new XMLHttpRequest();
    if (!this.httpRequest) {
      alert("Cannot create XMLHTTP instance!");
      return false;
    }

    this.httpRequest.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=b86642f74eb1a597dbbc482ab9c0f527"
    );
    this.httpRequest.onreadystatechange = ()=>{
        if (this.httpRequest.readyState != 4) {
            return;
          }
          if (this.httpRequest.status == 200) {
            console.log(this.httpRequest.response + "done it worked");
          }
          if (this.httpRequest.status != 200) {
            alert(this.httpRequest.status + ": " + this.httpRequest.statusText_);
            alert(this.httpRequest.readyState);
          }
    };
    this.httpRequest.send();
  }






}
