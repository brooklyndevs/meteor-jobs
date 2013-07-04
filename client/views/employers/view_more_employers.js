Meteor.Router.add({ 
  '/employers': 'viewMoreEmployers'
});


//EMPLOYERS COLLECITONM
Template.showAllEmployers.featuredAllEmployers = function() {
  	return Employers.find({});
};