//Publish all Record 
Meteor.publish("users", function() { 
	return Meteor.users.find({}, {fields: {}});
});

Meteor.users.allow({
   remove: function () { return true; }, 
   insert: function () { return true; }, 
   update: function () {return true; }
});

