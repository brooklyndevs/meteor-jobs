Meteor.startup(function() {
	filepicker.setKey('AbTgGoHxXQ8iuPS3b2mq9z');

});

Meteor.autorun(function() {
  Meteor.subscribe("users");
  Meteor.subscribe('posts');
  Meteor.subscribe("developers");
  Meteor.subscribe("employers");
});

// Deps.autorun(function () {
//   Meteor.subscribe('posts');
// });
