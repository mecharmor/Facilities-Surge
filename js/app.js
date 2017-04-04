$(document).ready(function(){












  //Start Timer
  var myVar = setInterval(function(){ myTimer() }, 1000);
  //Update Time
  function myTimer() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("time").innerHTML = t;
  }


});
