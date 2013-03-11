var Server = {};
Server.isValidPost = function(post) {

};

Meteor.methods({
  'createJobPost': function(post) {
    var valid = Server.isValidPost(post);
  }
});