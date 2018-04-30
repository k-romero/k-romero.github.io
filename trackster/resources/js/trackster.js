var Trackster = {};

/* Search Icon Click Event*/

$(document).ready(function() {
  $('#search-btn').click(function() {
    console.log('it works');
  });
});

/* Head Click Event Test */
$(document).ready(function(){
  $('#head').click(function() {
    console.log('icannot fucking believe this shit you mother fuckers');
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};
