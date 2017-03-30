$(document).ready(function()  {
  //  Handle Sidebar
  console.log('sidebar init');

  //  Display the date
  //----------------------------------------------------------------------------

  //  getDay() returns a value from 0-6 (0 being Sunday, 1 being Monday, etc...)
  //  Here we will use the number returned from the getDay() function to print the
  //  day to the sidebar:

  let date = new Date();
  let day;

  //  Determine the day:

  switch (date.getDay()) {
    case 0:
      today = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  //  Populate #sidebar-date <h3> tag:
  $("#sidebar-date").html(day);

  //  Here we will use the getMonth(), getDate(), and getFullYear() methods to
  //  populate #sidebar-full-date <h3> tag:

  let month;
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();
  let fullDate;

  //  Determine the month:
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  //  Format the full date
  fullDate = month;
  fullDate += " " + dayOfMonth + ", ";
  fullDate += year;

  //  Populate #sidebar-full-date <p> tag:
  $("#sidebar-full-date").html(fullDate);

   //---------------------------------------------------------------------------
  //  End Date Display

  //  Global Vehicle Variables
  let priuses = 2; //Vehicle # 32 & 33
  let vans12P = 13; //Vehicle # 14, 16, 17, 18, 34, 35, 36, 37, 38, 44, 45, 46, 48
  let trucks  = 3;  //Vehicle # 11, 22, 31
});
