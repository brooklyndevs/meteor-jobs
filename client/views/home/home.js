//DEVELOPERS COLLECITONM
Template.home.featuredDevelopers = function() {
	// var c = Employers.find({}).count();
	// var rand = Math.floor((Math.random()*(c+1))+0);
	// console.log(rand);
  	return Developers.find({}, {sort :{ _id: -1}, limit: 5}).fetch();
};
//POSTS COLLECITONM
Template.home.featuredJobs = function() {
	// var c = Employers.find({}).count();
	// var rand = Math.floor((Math.random()*(c+1))+0);
	// console.log(rand);
  	return Posts.find({}, {sort :{ _id: -1}, limit: 5}).fetch();
};

Template.home.events({
	'click #createProfileBtn': function(e) {
		if(Meteor.user() === null){
			window.document.getElementById('loginBtn').click();
			//console.log("not loggin");
		}else{
			window.document.getElementById('profile').click();
			console.log("login");
		}
		
	},
	'click #viewMoreDevelopersBtn': function(e) {
		// if(Meteor.user() === null){
		// 	window.document.getElementById('loginBtn').click();
		// 	//console.log("not loggin");
		// }else{
		// 	Meteor.Router.to('/developers');
		// 	// console.log("login");
		// }

		Meteor.Router.to('/developers');
		
	},
	'click #viewMoreJobs': function (e) {
		Meteor.Router.to('/jobs');
	},
	'click #findDevelopersBtn': function (e) {
		Meteor.Router.to('/developers');
	},
	'click #findEmployersBtn': function(e) {
		Meteor.Router.to('/employers');
	},
	'click #findJobsBtn': function (e) {
		Meteor.Router.to('/jobs');
	}
});