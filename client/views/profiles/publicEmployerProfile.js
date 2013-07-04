var employerProfileHelpers = {
	getUser : function(user) {
		return Employers.findOne({username:user});		
	}
};

Meteor.Router.add({ 
  '/employer/profile/:user': function(user) {
    console.log('we are at ' + this.canonicalPath);
    // access parameters in order a function args too

    Session.set('userProfile', user);
    console.log(user);

    var userExist = employerProfileHelpers.getUser(user);

    return (userExist) ? 'publicEmployerProfile' : 'publicProfileError';
  }

});

Template.publicEmployerProfile.employer = function() {
  var userprofile = Session.get("userProfile");
  return employerProfileHelpers.getUser(userprofile);
};
