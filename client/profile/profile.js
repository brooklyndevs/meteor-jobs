Meteor.Router.add({
  '/profile': 'profile'
});


Template.profileLoggedIn.realname = function() {
  var name;
  var user = Meteor.user().profile;
  if(user){
    name = user.name;
  }
  return name;
};


Template.profileLoggedIn.githubAvatar = function() {
  var userAvatar;
  var user = Meteor.user();
  if(user){
    userAvatar = user.githubAvatrUrl;
  }

  return userAvatar;
};
