Meteor.Router.add({ 
  '/employer/profile': 'employerProfile'
});

//USERS COLLECITONM
Template.employerProfileLoggedIn.roles = function() {
  var roles;
  var user = Meteor.user();
  if(user){
    roles = user.roles;
  }
  return roles;
};

//EMPLOYER COLLECTION
Template.employerProfileLoggedIn.companyAvatar = function() {
  var userAvatar;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    userAvatar = user.avatarUrl;
  }
  return userAvatar;
};
Template.employerProfileLoggedIn.description = function() {
  var description;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    description = user.description;
  }
  return description;
};

Template.employerProfileLoggedIn.company = function() {
  var company;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    company = user.company;
  }
  return company;
};
Template.employerProfileLoggedIn.email = function() {
  var email;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    email = user.email;
  }
  return email;
};
Template.employerProfileLoggedIn.phone = function() {
  var phone;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    phone = user.phone;
  }
  return phone;
};
Template.employerProfileLoggedIn.url = function() {
  var url;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    url = user.url;
  }
  return url;
};
Template.employerProfileLoggedIn.address = function() {
  var address;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    address = user.address;
  }
  return address;
};

Template.employerProfileLoggedIn.events({
	'click #closeEmployerChangeName': function(e) {
    	$('#changeEmployerName').popover('hide');
	},
	'click #confirmEmployerNameBtn': function(e) {
	    var name = $("#changeEmployerNameText").val();
	    console.log(name);
	    Employers.update({_id:Meteor.userId()}, {
	      $set: {
	        company:name
	      }
	    });
	},
  'click #changeLogoBtn': function(e) {
    filepicker.pick( {mimetype: 'image/*'}, function(FPFile){
      var logo = FPFile.url;
      Employers.update({_id:Meteor.userId()}, {
        $set: {
          avatarUrl:logo
        }
      });
    });
  },
  'click #closeEmployerChangeContact': function(e) {
      $('#changeEmployerContact').popover('hide');
  },
  'click #confirmEmployerContactBtn': function(e) {
      var email = $("#changeEmployerEmailText").val();
      var phone = $("#changeEmployerPhoneText").val();
      var url = $("#changeEmployerURLText").val();
      var address = $("#changeEmployerAddressText").val();
      console.log(name);
      Employers.update({_id:Meteor.userId()}, {
        $set: {
          email:email,
          phone:phone,
          url:url,
          address:address

        }
      });
  }
});


Meteor.startup(function() {
	filepicker.setKey('AbTgGoHxXQ8iuPS3b2mq9z');

});

Meteor.autorun(function() {
  Meteor.subscribe("employers");

});
Template.employerProfileLoggedIn.rendered = function (){
  $("#changeEmployerName").popover({ title: 'Changes<button class="close" id="closeEmployerChangeName">&times;</button>', content: 'Name:<input type="text" id="changeEmployerNameText"><center><button type="button" class="btn btn-primary" id="confirmEmployerNameBtn">Change name</button><br/><br/><button type="button" class="btn btn-primary" id="changeLogoBtn">Change Logo</button></center>', html:'true' });
  $("#changeEmployerContact").popover({ placement:'left', title: 'Edit<button class="close" id="closeEmployerChangeContact">&times;</button>', content: 'Email:<input type="text" id="changeEmployerEmailText">Phone:<input type="text" id="changeEmployerPhoneText"><br/>URL:<br/><input type="text" id="changeEmployerURLText">Address:<input type="text" id="changeEmployerAddressText"><center><button type="button" class="btn btn-primary" id="confirmEmployerContactBtn">Change</button>', html:'true' });
}