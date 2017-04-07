// Location js\maintenance.js
$(document).ready(function(){

  var Time//Updates Time every DeltaTime/1000ms
  myTimer();//Set Time Initially
  var DeltaTime = 1000; //Interval to Update Time
  var Day = new Date().getDate(); // Returns Day of month
  var Month = new Date().getMonth() + 1;//Returns the Month 1-12|Note: +1 is to offset 0-11
  var Year = new Date().getFullYear();//Returns the year, Ex| 2017

  //====================== Click Events =======================================>

  ///Add Button Clicked
  $("#add-maintTruck").click(function(){
      $("#Modal_Date_Input").val(Month + "/" + Day + "/" + Year);
      $("#Modal_Time_Input").val(Time);
  });
  //Cancel Button Clicked
  $("#Modal_Cancel").click(function(){
    ResetForm();
  });

  //====================== End Click Events ===================================>


  // ========================= Form Validation ================================>

    $("#Modal_Name_Input").keyup(function(){
        //Modal Name Validation
        if (validate_Naming_Scheme("Modal_Name_Input")) {
          //Change from red x to green check
          $("#Modal_Name_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
          //Change from green check to red x
          $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });

    //Vehicle # Input (Block all non-numbers)
    $('#Modal_maintTruck_Input').on('input', function (event) {
        //Block
        this.value = this.value.replace(/[^0-9]/g, '');
        //If validated character
        if (document.getElementById("Modal_maintTruck_Input").value.length > 0) {
            //Green Check
            $("#Modal_maintTruck_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
            //Red x
            $("#Modal_maintTruck_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });


    $("#Modal_Destination_Input").keyup(function(){
        //If naming scheme is correct... then do this..
        if (validate_Naming_Scheme("Modal_Destination_Input")) {
            //Green check
            $("#Modal_Destination_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
            //Red x
            $("#Modal_Destination_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });

  //=====> Functions <==================\\

  function validate_Naming_Scheme(temp){
    var re = /^[a-z ,.'-]+$/i;  //<== This allows for a-z and some special characters
    if(re.test(document.getElementById(temp).value)){
       return true;
       }
    else{
       return false;
       }
}// End validate_Naming_Scheme

  //Reset all inputs in form
  function ResetForm(){
    //Name
    $("#Modal_Name_Input").val("");
    $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Dept
    $("#Modal_Dept_Input").val("");
    $("#Modal_Dept_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Vehicle
    $("#Modal_maintTruck_Input").val("");
    $("#Modal_maintTruck_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Destination
    $("#Modal_Destination_Input").val("");
    $("#Modal_Destination_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
  };

  //=====> End Functions <===============\\

  // ========================= End Form Validation ============================>


  //Start Timer ===============================================================>
  var myVar = setInterval(function(){ myTimer() }, DeltaTime);
  //Update Time
  function myTimer() {
      var d = new Date();
      Time = d.toLocaleTimeString();
  }//End Timer ================================================================>



});//End document.ready
