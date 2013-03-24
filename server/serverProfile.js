//Publish all Record 
Meteor.publish("employers", function() { 
	return Employers.find({}, {fields: {}});
});
