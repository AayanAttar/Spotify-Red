function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var music_area = document.querySelector(".music_area");
    var hiddenText = document.querySelector(".sidebar-toggle .hidden_text");
  
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open'); // Close the sidebar fully
      sidebar.classList.add('minimized'); // Minimize the sidebar
      music_area.classList.remove('sidebar-open'); // Reset content position
      hiddenText.style.display = 'none'; // Hide the text when the sidebar is minimized
  } else if (sidebar.classList.contains('minimized')) {
      sidebar.classList.remove('minimized'); // Expand the sidebar
      sidebar.classList.add('open'); // Open the sidebar
      music_area.classList.add('sidebar-open'); // Shift content
      hiddenText.style.display = 'inline'; // Show the text when the sidebar is expanded
  } else {
      sidebar.classList.add('open'); // Open the sidebar
      music_area.classList.add('sidebar-open'); // Shift content
      hiddenText.style.display = 'inline'; // Show the text when the sidebar is opened

  }
}

  // Close the sidebar if clicked outside of it
  document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var sidebarToggle = document.querySelector(".sidebar-toggle");
    var music_area = document.querySelector(".music_area");
    var hiddenTextLink = document.querySelector(" .hidden_text "); // Target the <a> tag
  
    // If the click is outside the sidebar or the sidebar toggle button, close the sidebar
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target) && !hiddenTextLink.contains(event.target)){
      sidebar.classList.remove("open");
      music_area.classList.remove("sidebar-open"); // Reset content position
    
    var hiddenText = document.querySelector(".sidebar-toggle .hidden_text");
        hiddenText.style.display = 'none';
        hiddenText.style.opacity = 0; // Immediately make the text invisible
    }
  });

//  for extracting the accesstoken
// function getAccessTokenFromUrl() {
//   const params = new URLSearchParams(window.location.hash.substring(1)); // Remove the "#" and parse the fragment
//   return params.get('access_token');  // Extract the access token
// }

// // Example usage
// const token = getAccessTokenFromUrl();
// if (token) {
//   console.log('Access Token:', token);
// } else {
//   console.log('No access token found');
// }


// //  for playing the songs
// // Spotify Web Playback SDK initialization
// // Wait for the SDK to be ready
// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token = getAccessTokenFromUrl(); // Get the token
//   if (!token) {
//     console.log('Access token not available');
//     return;
//   }

//   const player = new Spotify.Player({
//     name: 'Your Web Player',
//     getOAuthToken: cb => { cb(token); }, // Pass the token to the SDK
//     volume: 0.5
//   });

//   // Handle player events
//   player.addListener('initialization_error', ({ message }) => { console.error(message); });
//   player.addListener('authentication_error', ({ message }) => { console.error(message); });
//   player.addListener('account_error', ({ message }) => { console.error(message); });
//   player.addListener('playback_error', ({ message }) => { console.error(message); });

//   player.addListener('player_state_changed', state => { console.log(state); });

//   // When player is ready
//   player.addListener('ready', ({ device_id }) => {
//     console.log('The Web Playback SDK is ready with device ID', device_id);
//   });

//   // Connect to the player
//   player.connect();
// };


// // play the track 
// // Define the playSong function to play the track when the button is clicked
// function playSong() {
//   const trackUri = 'spotify:track:TRACK_ID'; // Replace with the URI of the track you want to play
//   player.play({
//       uris: [trackUri]  // Pass the track URI to play it
//   }).then(() => {
//       console.log('Track is playing!');
//   }).catch(error => {
//       console.error('Error playing track:', error);
//   });
// }



  
  