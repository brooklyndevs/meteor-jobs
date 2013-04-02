Meteor.Router.add({ 
  '/employer/profile': 'employerProfile'
});

//USERS COLLECITONM
Template.employerProfileLoggedIn.user = function() {
  return Meteor.user();
};

//EMPLOYER COLLECTION
Template.employerProfileLoggedIn.employer = function() {
  return Employers.findOne({_id:Meteor.userId()});
};

Template.employerProfileLoggedIn.events({
	'click #closeEmployerChangeName': function(e) {
    	$('#changeEmployerName').popover('hide');
	},
	'click #confirmEmployerNameBtn': function(e) {
	    var companyname = $("#changeEmployerNameText").val();
	    Employers.update({_id:Meteor.userId()}, {
	      $set: {
	        company:companyname
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
  var employer = Employers.findOne({_id:Meteor.userId()});
  var name, email, phone, address, url;
  if(employer){
    name = employer.company;
    email = employer.email;
    phone = employer.phone;
    address = employer.address;
    url = employer.url;
  }
  console.log(name);
  $("#changeEmployerName").popover({ title: 'Changes<button class="close" id="closeEmployerChangeName">&times;</button>', content: 'Name:<input type="text" id="changeEmployerNameText" value="'+name+'"><center><button type="button" class="btn btn-primary" id="confirmEmployerNameBtn">Change name</button><br/><br/><button type="button" class="btn btn-primary" id="changeLogoBtn">Change Logo</button></center>', html:'true' });
  
  $("#changeEmployerContact").popover({ placement:'left', title: 'Edit<button class="close" id="closeEmployerChangeContact">&times;</button>', content: 'Email:<input type="text" id="changeEmployerEmailText" value="'+email+'">Phone:<input type="text" id="changeEmployerPhoneText" value="'+phone+'"><br/>URL:<br/><input type="text" id="changeEmployerURLText" value="'+url+'">Address:<input type="text" id="changeEmployerAddressText" value="'+address+'"><center><button type="button" class="btn btn-primary" id="confirmEmployerContactBtn">Change</button>', html:'true' });
}