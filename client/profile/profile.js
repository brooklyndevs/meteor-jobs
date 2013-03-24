Meteor.Router.add({
  '/profile': 'profile'
});

//USERS COLLECITONM
Template.profileLoggedIn.roles = function() {
  var roles;
  var user = Meteor.user();
  if(user){
    roles = user.roles;
  }
  return roles;
};

Template.profileLoggedIn.githubAvatar = function() {
  var userAvatar;
  var user = Meteor.user();
  if(user){
    userAvatar = user.githubAvatrUrl;
  }
  return userAvatar;
};

//EMPLOYERS COLLECTION
Template.profileLoggedIn.devName = function() {
  var name;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    name = user.name;
  }
  return name;
};
Template.profileLoggedIn.summary = function() {
  var summary;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    summary = user.summary;
  }
  return summary;
};
Template.profileLoggedIn.experience = function() {
  var experience;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    experience = user.experience;
  }
  return experience;
};
Template.profileLoggedIn.skills = function() {
  var skills;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    skills = user.skills;
  }
  return skills;
};
Template.profileLoggedIn.education = function() {
  var education;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    education = user.education;
  }
  return education;
};
Template.profileLoggedIn.email = function() {
  var email;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    email = user.email;
  }
  return email;
};
Template.profileLoggedIn.phone = function() {
  var phone;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    phone = user.phone;
  }
  return phone;
};
Template.profileLoggedIn.address = function() {
  var address;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    address = user.address;
  }
  return address;
};
Template.profileLoggedIn.url = function() {
  var url;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    url = user.url;
  }
  return url;
};
Template.profileLoggedIn.additional = function() {
  var additional;
  var user = Employers.findOne({_id:Meteor.userId()});
  if(user){
    additional = user.additional;
  }
  return additional;
};
Template.profileLoggedIn.events({
  'keyup #personalStatement': function(e) {
    var summary = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        summary:summary
      }
    });
  },
  'keyup #experience': function(e) {
    var experience = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        experience:experience
      }
    });
  },
  'keyup #skillExpertise': function(e) {
    var skills = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        skills:skills
      }
    });
  },
  'keyup #education': function(e) {
    var education = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        education:education
      }
    });
  },
  'keyup #emailDevProfile': function(e) {
    var email = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        email:email
      }
    });
  },
  'keyup #phoneDevProfile': function(e) {
    var phone = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        phone:phone
      }
    });
  },
  'keyup #addressDevProfile': function(e) {
    var address = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        address:address
      }
    });
  },
  'keyup #urlDevProfile': function(e) {
    var url = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        url:url
      }
    });
  },
  'keyup #additonalInfo': function(e) {
    var additional = e.target.value;
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        additional:additional
      }
    });
  },
  'click #closeChangeName': function(e) {
    $('#changeName').popover('hide');
  },
  'click #confirmNameBtn': function(e) {
    var name = $("#changeNameText").val();
    console.log(name);
    Employers.update({_id:Meteor.userId()}, {
      $set: {
        name:name
      }
    });
  }

});

Meteor.autorun(function() {
  Meteor.subscribe("employers");

});

Template.profileLoggedIn.rendered = function (){
  console.log("Rendered profileLoggedIn");
  $("#changeName").popover({ title: 'Change Name to:<button class="close" id="closeChangeName">&times;</button>', content: '<input type="text" id="changeNameText"><center><button type="button" class="btn btn-primary" id="confirmNameBtn">Confirm</button></center>', html:'true' });

  $("#personalStatement").popover({ title: 'Write Title', content: 'Write Content', trigger:'focus' });
  $("#experience").popover({ title: 'Write Title', content: 'Write Content', trigger:'focus' });
  //initialize();
}
