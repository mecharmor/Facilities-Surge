console.log('messenger init');

// Global Variables

// API Key provided by the Google API Console:
var apiKey = "AIzaSyC1NlZmi2VHyIkHlEYGah0zgBeW6Rx3-2A";

// Load the People API's Discovery Doc:
var discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];

// Enter the client ID for the application that is provided by the Google API Console:
var clientId = "https://mecharmor.github.io/Facilities-Surge";

// Enter one or more authorization scopes. Refer to the documentation for the API or
// https://developers.google.com/people/v1/how-tos/authorizing for details.
var scopes = 'profile';

var authorizeButton = $("#authorize-button");
var signoutButton = $("#signout-button");

function handleClientLoad() {
  // Load the API client and auth2 library:
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: apiKey,
    discoveryDocs: discoveryDocs,
    clientId: clientId,
    scope: scopes
  }).then(function () {
    // Listen for sign-in state changes:
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state:
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    makeApiCall();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

function handAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event)  {
  gapi.auth2.getAuthInstance().signOut();
}

// Load the API and make an API call. Display the results on the screen:
function makeApiCall()  {
  gapi.client.people.people.get({
    resourceName: 'people/me'
  }).then(function(resp)  {
    var p = document.createElement('p');
    var name = resp.result.names[0].giveName;
    p.appendChild(document.createTextNode('Hello, ' + name + '!'));
    document.getElementById('content').appendChild(p);
  });
}
