app.controller('LoginCtrl',function($scope,$log){
  $log.info('Login Controller');
  $scope.userLoggedIn = false;

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '883644211722309',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=883644211722309";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  $scope.FBLogin = function() {
      FB.login(function(response) {
          if (response.authResponse) {
            $scope.getLocation();
          }
      }, {scope: 'email,public_profile', return_scopes: true});
  }
  $scope.getLocation = function() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition($scope.showPosition);
      } else {
          $log.log("Geolocation is not supported by this browser.");
      }
  }
  $scope.showPosition = function(position) {
      $log.log('Latitude'+position.coords.latitude+' Longitude'+position.coords.longitude);
  }

});
