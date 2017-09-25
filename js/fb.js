// // This is called with the results from from FB.getLoginStatus().
// function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       testAPI();
//     } else {
//       // The person is not logged into your app or we are unable to tell.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into this app.';
//     }
// }

// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
// }

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1272182022891766',
//     cookie     : true,  // enable cookies to allow the server to access 
//                         // the session
//     xfbml      : true,  // parse social plugins on this page
//     version    : 'v2.8' // use graph api version 2.8
//   });

