Template.loginForm.events({
    'click #githubBtn': function(evt) {
      loginWithGithub();
    }
});

Template.login.events({
    'click #logoutBtn': function(evt) {
      console.log("Logout");
      Meteor.logout();
    }
});

Template.login.username = function() {
  var username;
  var user = Meteor.user().services;
  if(user){
    username = user.github.username;
  }

  return username;
};


Accounts.loginServiceConfiguration.remove({
  service: "github"
});

Accounts.loginServiceConfiguration.insert({
  service: "github",
  clientId: "a58e1cea5292b37efc70",
  secret: "00cbada705bc01935daeb4d1bf867775cab6237c"
});

function loginWithGithub(){
  Meteor.loginWithGithub({
  requestPermissions: []

  }, function (err) {
    if (err){
      Session.set('errorMessage', err.reason || 'Unknown error');
      console.error(err);
      return;
    }
    $('.modal').modal('hide');
    console.log("we logged in");
  });
}

Meteor.autorun(function() {
  Meteor.subscribe("githubUser");
  
});

//Meteor.user().


