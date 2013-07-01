Template.loginForm.events({
    'click #registerBtn': function(evt) {
      console.log("register");
      $('#loginModal').modal('hide');
    }
});


Template.registerForm.events({
    'click .textField': function(evt) {
      $("#"+evt.target.id + "ErrorRegisterMsg").text('');
      $("input:focus").css({
        "border-color": "lightgray"
      });
      
    },
    'click #clearBtn': function(evt) {
      console.log("clear");
      $('#companyTextErrorRegisterMsg, #addressTextErrorRegisterMsg, #emailTextErrorRegisterMsg, #usernameTextErrorRegisterMsg, #password1TextErrorRegisterMsg, #password2TextErrorRegisterMsg').text('');
      $(".textField").css({
        "border-color": "lightgray"
      });
    }
});


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
  Regulate.registerHere.onSubmit(function (error, data) {
    if (error) {
      console.log('Validation FAILED', error);
      //console.log('Validation FAILED', error.addressText[0]);
      for(e in error){
          console.log(e); 
          highlightRed('#'+e);
      }
      $("#companyTextErrorRegisterMsg").text(error.companyText);
      $("#addressTextErrorRegisterMsg").text(error.addressText);
      $("#emailTextErrorRegisterMsg").text(error.emailText);
      $("#usernameTextErrorRegisterMsg").text(error.usernameText);
      $("#password1TextErrorRegisterMsg").text(error.password1Text);
      $("#password2TextErrorRegisterMsg").text(error.password2Text);

    } else {
      console.log('PASSSED', data);

      //data[0].value = '';
      Meteor.call('employersLogin', data, function(error, result){
        if(error){
          console.log("SUPER ERROR After VALIDATION ", error);
        }else{

          console.log("Result data",result);
          Meteor.loginWithPassword(result.usernameText, result.password1Text, function(error){

            if(error){
              console.log("login Error",error);

              return;
            }
            console.log("Login successs");

            $('#registerModal').modal('hide');
            $('#clearBtn').trigger('click');

            Meteor.users.update( { _id:Meteor.userId() }, { $set:{ roles:["Employer"] } });
                //Employers Creation
            Employers.insert( { 
              _id:Meteor.userId(), 
              username:result.usernameText,
              company:result.companyText, 
              avatarUrl:"/images/unknown.jpg",
              description:"description info by desfault here",
              email:result.emailText,
              phone:result.phoneText,
              address:result.addressText, 
              url:result.urlText,
              jobList:[]
            });
            

          });

        }
      });

      
    }
  });

});


window.onload = function(){
  console.log("onload");
   // initialize();
};

Template.registerForm.rendered = function (){
  console.log("Rendered registerForm");

  //initialize();
}

