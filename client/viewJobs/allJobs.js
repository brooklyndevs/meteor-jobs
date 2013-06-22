Deps.autorun(function () {
  Meteor.subscribe('posts');
});

Meteor.Router.add({
  '/jobs/:id': function (id) {
    Session.set('currPost', id);
    return 'viewJob';
  },
  '/jobs': 'allJobs'
});

Template.allJobs.jobs = function () {
    return Posts.find({});
};

Template.viewJob.post = function () {
  var postId = Session.get('currPost');
  return Posts.findOne(postId);
};