Meteor.methods({
  createJob: function(post) {
    Regulate.createJob.validate(post, function (error, data) {
      if (error) return;

      var post = {};
      _.each(data, function (o) {
        post[o.name] = o.value;
      });

      Posts.insert(post);
    });
  }
});