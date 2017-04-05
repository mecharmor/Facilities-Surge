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
      //If this Name Input contains ANY letters then set to true
      //Else set to false
      var GoodInput = ContainsANYLetters($("#Modal_Name_Input").val());
      //If letters are entered
      if (GoodInput) {
        $("#Modal_Name_Validation").removeClass( "glyphicon-remove-circle" ).addClass( "glyphicon-ok-circle" );
      }else {
        $("#Modal_Name_Validation").removeClass( "glyphicon-ok-circle" ).addClass( "glyphicon-remove-circle" );
      }

    });

  //=====> Validation Functions <==================\\

  function ContainsANYLetters(temp){

    //Check for any Letters
    if (/[a-zA-Z]/.test(temp)) {
      return true;
    }
      //No Letters Found
      return false;


  }

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
