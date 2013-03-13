Template.loginForm.events({
    'click #registerBtn': function(evt) {
      console.log("register");
      $('#loginModal').modal('hide');
    }
});
Template.registerForm.events({
    'click #submitRegister': function(evt) {
      ValidateRegistrationForm();
    }
});


function ValidateRegistrationForm(){
  var companyName = $('#companyText').val();
  var address = $('#addressText').val();
  var email = $('#cemailText').val();
  var phone = $('#phoneText').val();
  var url = $('#curlext').val();
  var username = $('#usernameText').val();
  var password1 = $('#password1Text').val();
  var password2 = $('#password2Text').val();
  console.log(companyName);
}
////////////////////////////////////////////////////////////
//GOOGLE MAP STUFF
// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var myCenter=new google.maps.LatLng(51.508742,-0.120850);
//   var mapOptions = {
//     center: myCenter,
//     zoom:15,
//     panControl:true,
//     zoomControl:true,
//     mapTypeControl:true,
//     scaleControl:true,
//     streetViewControl:true,
//     overviewMapControl:true,
//     rotateControl:true,    
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   console.log("before map");
//   map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//   var marker=new google.maps.Marker({
//     position:myCenter,
//     });

//   marker.setMap(map);
// };

// function codeAddress() {
//   var address = document.getElementById('address').value;
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// };
Meteor.startup(function() {
 // window.onload = initialize;
  //Meteor.setTimeout(function(){initialize()},5000);
});


window.onload = function(){
  console.log("onload");
   // initialize();
};

Template.registerForm.rendered = function (){
  console.log("Rendered here");
  //initialize();
}
