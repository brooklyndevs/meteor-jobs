//Publish all Record 
Meteor.publish("users", function() { 
	return Meteor.users.find({}, {fields: {}});
});

Meteor.users.allow({
   remove: function () { return true; }, 
   insert: function () { return true; }, 
   update: function () {return true; }
});

var ValidationHelpers = {
	restructureData: function (data) {
		var restructuredData = {};

		_.each(data, function (fieldObj) {
			var name = fieldObj.name,
				val = fieldObj.value;
				restructuredData[name] = val;
		});

		return restructuredData;
	}
};

Meteor.methods({
	employersLogin: function (data) {
		var restructuredData;
		Regulate.registerHere.validate(data, function (error, data) {
			if (error) {
				console.log('Validation FAILED', error);
			} else {

				restructuredData = ValidationHelpers.restructureData(data);

				console.log('To be inserted into DB', restructuredData);

		        var options = {
		          username: restructuredData.usernameText,
		          password: restructuredData.password1Text,
		        };
		        Accounts.createUser(options);

		        console.log("DATA BEFORE RETURN 1",restructuredData);
		        
			}
		});
		console.log("DATA BEFORE RETURN 2",restructuredData);
		return restructuredData;
	}
});
