//DEVELOPERS COLLECITONM
Template.home.featuredDevelopers = function() {
	// var c = Employers.find({}).count();
	// var rand = Math.floor((Math.random()*(c+1))+0);
	// console.log(rand);
  	return Developers.find({}, {sort :{ _id: -1}, limit: 3}).fetch();
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
		console.log("clicked");
		if(Meteor.user() === null){
			window.document.getElementById('loginBtn').click();
			//console.log("not loggin");
		}else{
			Meteor.Router.to('/developers');
			// console.log("login");
		}
		
	},

	'click #viewMoreJobs': function (e) {
		Meteor.Router.to('/jobs');
	}
});