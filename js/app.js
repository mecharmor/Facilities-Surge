$(document).ready(function()  {
  // Google Calendar API
  var clientId = '35811753991-k4fb12ld67mavajh3grfa5p09ss4fg7l.apps.googleusercontent.com';
  var apiKey = 'AIzaSyC1NlZmi2VHyIkHlEYGah0zgBeW6Rx3-2A';
  var scopes = 'https://www.googleapis.com/auth/calendar';

  function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
  }

  function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
        handleAuthResult);
  }

  function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult) {
      authorizeButton.style.visibility = 'hidden';
      makeApiCall();
    } else {
      authorizeButton.style.visibility = '';
      authorizeButton.onclick = handleAuthClick;
     }
  }

  function handleAuthClick(event) {
    gapi.auth.authorize(
        {client_id: clientId, scope: scopes, immediate: false},
        handleAuthResult);
    return false;
  }
  // End Google Calendar Init

  //Populate Main View
  function makeApiCall() {
    gapi.client.load('calendar', 'v3', function() {
      var request = gapi.client.calendar.events.list({
        'calendarId': 'primary'
    });

    request.execute(function(resp) {
      for (var i = 0; i < resp.items.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(resp.items[i].summary));
        document.getElementById('events').appendChild(li);
        }
      });
    });
  }
})
