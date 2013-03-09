Meteor.Router.add({
  '/': 'home',
  '/post-a-job': 'post_a_job'
});

Meteor.startup(function() {
  console.log('This is the startup fro the client.js');
});