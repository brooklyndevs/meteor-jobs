Meteor.Router.add({ 
  '/developers': 'viewMoreDevelopers'
});


//DEVELOPERS COLLECITONM
Template.showAllDevelopers.featuredAllDevelopers = function() {
	// var c = Employers.find({}).count();
	// var rand = Math.floor((Math.random()*(c+1))+0);
	// console.log(rand);
  	return Developers.find({});
};