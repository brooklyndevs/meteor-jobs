var ProfileHelpers = {
	getUser : function(user) {
		return Developers.findOne({username:user});		
	}
};

Meteor.Router.add({ 
  '/profile/developer/:user': function(user) {
    console.log('we are at ' + this.canonicalPath);
    // access parameters in order a function args too

    Session.set('userProfile', user);
    console.log(user);

    var userExist = ProfileHelpers.getUser(user);

    return (userExist) ? 'publicDeveloperProfile' : 'publicDeveloperProfileError';
  }

});

Template.publicDeveloperProfile.developer = function() {
  var userprofile = Session.get("userProfile");
  return ProfileHelpers.getUser(userprofile);
};

Template.publicDeveloperProfile.users = function() {
  var userprofile = Session.get("userProfile");
  return Meteor.users.findOne({username:userprofile});
};