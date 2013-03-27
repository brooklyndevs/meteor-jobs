Meteor.Router.add({ 
  '/developer/profile': 'developerProfile'
});

//USERS COLLECITONM
Template.developerProfileLoggedIn.roles = function() {
  var roles;
  var user = Meteor.user();
  if(user){
    roles = user.roles;
  }
  return roles;
};

Template.developerProfileLoggedIn.avatar = function() {
  var userAvatar;
  var user = Meteor.user();
  if(user){
    userAvatar = user.avatarUrl;
  }
  return userAvatar;
};

//DEVELOPERS COLLECTION
Template.developerProfileLoggedIn.devName = function() {
  var name;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    name = user.name;
  }
  return name;
};
Template.developerProfileLoggedIn.summary = function() {
  var summary;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    summary = user.summary;
  }
  return summary;
};
Template.developerProfileLoggedIn.experience = function() {
  var experience;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    experience = user.experience;
  }
  return experience;
};
Template.developerProfileLoggedIn.skills = function() {
  var skills;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    skills = user.skills;
  }
  return skills;
};
Template.developerProfileLoggedIn.education = function() {
  var education;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    education = user.education;
  }
  return education;
};
Template.developerProfileLoggedIn.email = function() {
  var email;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    email = user.email;
  }
  return email;
};
Template.developerProfileLoggedIn.phone = function() {
  var phone;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    phone = user.phone;
  }
  return phone;
};
Template.developerProfileLoggedIn.address = function() {
  var address;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    address = user.address;
  }
  return address;
};
Template.developerProfileLoggedIn.url = function() {
  var url;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    url = user.url;
  }
  return url;
};
Template.developerProfileLoggedIn.additional = function() {
  var additional;
  var user = Developers.findOne({_id:Meteor.userId()});
  if(user){
    additional = user.additional;
  }
  return additional;
};
Template.developerProfileLoggedIn.events({
  'keyup #personalStatement': function(e) {
    var summary = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        summary:summary
      }
    });
  },
  'keyup #experience': function(e) {
    var experience = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        experience:experience
      }
    });
  },
  'keyup #skillExpertise': function(e) {
    var skills = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        skills:skills
      }
    });
  },
  'keyup #education': function(e) {
    var education = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        education:education
      }
    });
  },
  'keyup #emailDevProfile': function(e) {
    var email = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        email:email
      }
    });
  },
  'keyup #phoneDevProfile': function(e) {
    var phone = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        phone:phone
      }
    });
  },
  'keyup #addressDevProfile': function(e) {
    var address = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        address:address
      }
    });
  },
  'keyup #urlDevProfile': function(e) {
    var url = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        url:url
      }
    });
  },
  'keyup #additonalInfo': function(e) {
    var additional = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        additional:additional
      }
    });
  },
  'click #closeDevChangeName': function(e) {
    $('#changeDeveloperName').popover('hide');
  },
  'click #confirmDevNameBtn': function(e) {
    var name = $("#changeDevNameText").val();
    console.log(name);
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        name:name
      }
    });
  }

});

Meteor.autorun(function() {
  Meteor.subscribe("developers");

});

Template.developerProfileLoggedIn.rendered = function (){
  console.log("Rendered profileLoggedIn");
  $("#changeDeveloperName").popover({ title: 'Change Name to:<button class="close" id="closeDevChangeName">&times;</button>', content: '<input type="text" id="changeDevNameText"><center><button type="button" class="btn btn-primary" id="confirmDevNameBtn">Change</button></center>', html:'true' });

  $("#personalStatement").popover({ title: 'Write Title', content: 'Write Content', trigger:'focus' });
  $("#experience").popover({ title: 'Write Title', content: 'Write Content', trigger:'focus' });
  //initialize();
}
