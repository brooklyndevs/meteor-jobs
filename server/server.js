//Publish all Record 
Meteor.publish("githubUser", function() { 
	return Meteor.users.find({}, {fields: {}});
});