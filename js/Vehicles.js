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

  $("#Modal_Cancel").click(function(){
    ResetForm();
  });

  //====================== End Click Events ===================================>


  // ========================= Form Validation ================================>

    $("#Modal_Name_Input").on("input",function(){
        //Modal Name Validation
        if (validate_Naming_Scheme("Modal_Name_Input")) {
          //Change from red x to green check
          $("#Modal_Name_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
          //Change from green check to red x
          $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });

    //Modal Department Validation
    $("#Modal_Dept_Input").on("input",function(){
        //If naming scheme is correct... then do this..
        if (validate_Naming_Scheme("Modal_Dept_Input")) {
          //Change from red x to green check
          $("#Modal_Dept_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
          //Change from green check to red x
          $("#Modal_Dept_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });

    //Vehicle # Input (Block all non-numbers)
    $('#Modal_Vehicle_Input').on('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (document.getElementById("Modal_Vehicle_Input").value.length == 2) {
            //next focus
            $("#Modal_Letter_Input").focus();
            //Green Check
            $("#Modal_Vehicle_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
            //Change from green check to red x
            $("#Modal_Vehicle_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    });

    //Key Letter Validation
    $("#Modal_Letter_Input").on("input", (function(){
        //Block all non A-Z values
        this.value = this.value.replace(/[^a-zA-Z]/, '');
        //Force to uppercase
        this.value = this.value.toUpperCase();
        //Check for input and determine good or bad
        if (document.getElementById("Modal_Letter_Input").value.length == 1) {
            //focus next
            $("#Modal_Destination_Input").focus();
            //Green check
            $("#Modal_Letter_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
        }else {
            //red x
            $("#Modal_Letter_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
        }
    }));

    $("#Modal_Destination_Input").on("input",function(){

      //If naming scheme is correct... then do this..
      if (validate_Naming_Scheme("Modal_Destination_Input")) {
        //Change from red x to green check
        $("#Modal_Destination_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
      }else {
        //Change from green check to red x
        $("#Modal_Destination_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
      }
    });

  //=====> Functions <==================\\
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

  //Reset all inputs in form
  function ResetForm(){
    //Name
    $("#Modal_Name_Input").val("");
    $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Dept
    $("#Modal_Dept_Input").val("");
    $("#Modal_Dept_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Vehicle
    $("#Modal_Vehicle_Input").val("");
    $("#Modal_Vehicle_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
    //Letter
    $("#Modal_Letter_Input").val("");
    $("#Modal_Letter_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
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
