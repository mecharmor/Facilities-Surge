// Location js\Vehicles.js
$(document).ready(function(){

  var Time//Updates Time every DeltaTime/1000ms
  myTimer();//Set Time Initially
  var DeltaTime = 1000; //Interval to Update Time
  var Day = new Date().getDate(); // Returns Day of month
  var Month = new Date().getMonth() + 1;//Returns the Month 1-12|Note: +1 is to offset 0-11
  var Year = new Date().getFullYear();//Returns the year, Ex| 2017
  //alert(Month + "/"+ Day + "/" + Year);




  //====================== Click Events =======================================>

  ///Add Button Clicked
  $("#add-vehicle").click(function(){

  $("#Modal_Date_Input").val(Month + "/" + Day + "/" + Year);
  $("#Modal_Time_Input").val(Time);

  });

  //====================== End Click Events ===================================>



  // ========================= Form Validation ================================>

    $("#Modal_Name_Input").keyup(function(){

      //If naming scheme is correct... then do this..
      if (validate_Naming_Scheme("Modal_Name_Input")) {
        //Change from red x to green check
        $("#Modal_Name_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
      }else {
        //Change from green check to red x
        $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
      }

    });

  //=====> Validation Functions <==================\\
  //Pass in element Id to make function work properly
  function validate_Naming_Scheme(temp){
  //  var re = /^[A-Za-z]+$/;  <== This ONLY Allows Letters
  //Used Regular Expressions for Validation
    var re = /^[a-z ,.'-]+$/i;  //<== This allows for a-z and some special characters
    if(re.test(document.getElementById(temp).value)){
       return true;
       }
    else{
       return false;
       }
}// End validate_Naming_Scheme

  //=====> End Validation Functions <===============\\

  // ========================= End Form Validation ============================>


  //Start Timer ===============================================================>
  var myVar = setInterval(function(){ myTimer() }, DeltaTime);
  //Update Time
  function myTimer() {
      var d = new Date();
      Time = d.toLocaleTimeString();
  }//End Timer ================================================================>



});//End document.ready
