// Meteor.Router.add({ 
//   '/developers': 'showAllDevelopers'
// });


// //DEVELOPERS COLLECITONM
// Template.showAllDevelopers.developers = function() {
// 	// var c = Employers.find({}).count();
// 	// var rand = Math.floor((Math.random()*(c+1))+0);
// 	// console.log(rand);
//   	return Developers.find({});
// };


var developersPages = new Paginate(Developers, "showAllDevelopers", {perPage:10});