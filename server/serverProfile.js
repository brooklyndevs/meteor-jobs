//Publish all Record 
Meteor.publish("developers", function() { 
	return Developers.find({}, {fields: {}});
});

Meteor.publish("employers", function() { 
	return Employers.find({}, {fields: {}});
});
