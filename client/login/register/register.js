Template.loginForm.events({
    'click #registerBtn': function(evt) {
      console.log("register");
      $('#loginModal').modal('hide');
    }
});
Template.registerForm.events({
    'click #submitRegister': function(evt) {
      console.log(ValidateRegistrationForm());
      if(ValidateRegistrationForm()){
        var companyName = $('#companyText').val();
        var address = $('#addressText').val();
        var email = $('#emailText').val();
        var phone = $('#phoneText').val();
        var url = $('#urlText').val();
        var username = $('#usernameText').val();
        var password1 = $('#password1Text').val();
        console.log("inside");

        $('#registerModal').modal('hide');
        $('#clearBtn').trigger('click');

        var options = {
          username: username,
          password: password1,
        };
        Accounts.createUser(options, function(){
          console.log(Meteor.userId());
          Meteor.users.update( { _id:Meteor.userId() }, { $set:{ roles:["Employer"] } });
          //Employers Creation
          Employers.insert( { 
            _id:Meteor.userId(), 
            username:username,
            company:companyName, 
            avatarUrl:"/images/unknown.jpg",
            description:"description info by desfault here",
            email:email,
            phone:phone,
            address:address, 
            url:url,
            jobList:[]
          });

        });
        
      }

    },
    'click .textField': function(evt) {
      $("input:focus").css({
        "border-color": "lightgray"
      });
      
    },
    'click #clearBtn': function(evt) {
      console.log("clear");
      $('#errorRegisterMsg').text('');
      $(".textField").css({
        "border-color": "lightgray"
      });
    }
});


function ValidateRegistrationForm(){
  var validate = true;
  
  var companyName = $('#companyText').val();
  var address = $('#addressText').val();
  var email = $('#emailText').val();
  var phone = $('#phoneText').val();
  var url = $('#urlText').val();
  var username = $('#usernameText').val();
  var password1 = $('#password1Text').val();
  var password2 = $('#password2Text').val();
  //console.log(companyName);

  //Company Validate
  if(companyName === ''){
    highlightRed("#companyText");
    $("#errorRegisterMsg").text("Warning: Missing Fields");
    validate = false;
  }

  //Address Validate
  if(address === ''){
    highlightRed("#addressText");
    $("#errorRegisterMsg").text("Warning: Missing Fields");
    validate = false;
  }

  //Email Validate
  if(email === ''){
    highlightRed("#emailText");
    $("#errorRegisterMsg").text("Warning: Missing Fields");
    validate = false;
  }else if(email.indexOf(" ") !== -1 || email.indexOf("@") === -1 || email.indexOf(".com") === -1 ){
    highlightRed("#emailText");
    $("#errorRegisterMsg").text("Warning: Invalid Email");
    validate=false;
  }

  //Username Validate
  var usernameArray =[];
  Meteor.users.find({}).forEach(function(user){
    usernameArray.push(user.username);
  });
  console.log(usernameArray);
  if(username === ''){
    highlightRed("#usernameText");
    $("#errorRegisterMsg").text("Warning: Missing Fields");
    validate = false;
  }else if(username.indexOf(" ") !== -1){
    $("#errorRegisterMsg").text("Warning: Username cannot contain SPACE");
    highlightRed("#usernameText");
    validate = false;
  }else if(usernameArray.indexOf(username) !== -1){
    $("#errorRegisterMsg").text("Warning: Username Already Exist");
    highlightRed("#usernameText");
    validate = false;
  }

  //Password Validate
  if(password1 === ''|| password2 === ''){
    highlightRed("#password1Text");
    highlightRed("#password2Text");
    $("#errorRegisterMsg").text("Warning: Missing Fields");
    validate = false;
  }else if(password1.length <= 5 && password1.length <= 5){
    highlightRed("#password1Text");
    highlightRed("#password2Text");
    $("#errorRegisterMsg").text("Warning: Password must contain at LEAST 5 character");
    validate = false;
  }else if(password1 !== password2){
    highlightRed("#password1Text");
    highlightRed("#password2Text");
    $("#errorRegisterMsg").text("Warning: Password Not Matching");
    validate = false;
  }else if(password1 === password2){
      $("#password2Text").css({
        "border-color": "lightgray"
      });
      $("#password1Text").css({
        "border-color": "lightgray"
      });
  }

  return validate;
}
function highlightRed(selector){
  $(selector).css({
    "outline": "none",
    "border-color": "red"
  });
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
  console.log("Rendered registerForm");

  //initialize();
}

