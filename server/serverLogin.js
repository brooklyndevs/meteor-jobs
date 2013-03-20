//Publish all Record 
Meteor.publish("githubUser", function() { 
	return Meteor.users.find({}, {fields: {}});
});

Meteor.users.allow({
   remove: function () { return true; }, 
   insert: function () { return true; }, 
   update: function () {return true; }
});

