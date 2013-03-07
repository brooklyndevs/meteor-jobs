Template.loginButton.events({
  'click #loginBtn': function(evt) {
      console.log("login Button Clicked");

    },

    'click #githubBtn': function(evt) {
      loginWithGithub();

    }
  
});

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
  requestPermissions: ['user']

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