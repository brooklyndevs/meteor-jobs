//Publish all Record 
Meteor.publish("users", function() { 
	return Meteor.users.find({}, {fields: {}});
});

Meteor.users.allow({
   remove: function () { return true; }, 
   insert: function () { return true; }, 
   update: function () {return true; }
});


Meteor.methods({
	employersLogin: function (data) {
		Regulate.registerHere.validate(data, function (error, data) {
			if (error) {
				console.log('Validation FAILED', error);
			} else {
				console.log('To be inserted into DB', data);

				//console.log(data.companyText);
				// $('#registerModal').modal('hide');
		  //       $('#clearBtn').trigger('click');

		  //       var options = {
		  //         username: username,
		  //         password: password1,
		  //       };
		  //       Accounts.createUser(options, function(){
		  //         console.log(Meteor.userId());
		  //         Meteor.users.update( { _id:Meteor.userId() }, { $set:{ roles:["Employer"] } });
		  //         //Employers Creation
		  //         Employers.insert( { 
		  //           _id:Meteor.userId(), 
		  //           username:username,
		  //           company:companyName, 
		  //           avatarUrl:"/images/unknown.jpg",
		  //           description:"description info by desfault here",
		  //           email:email,
		  //           phone:phone,
		  //           address:address, 
		  //           url:url,
		  //           jobList:[]
		  //         });

		  //       });

			}
		});
	}
});