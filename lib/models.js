var Posts = new Meteor.Collection('posts');
var Employers = new Meteor.Collection('employers');
var Developers = new Meteor.Collection('developers');


/*

  Post: {
    title: X,
    location: X,
    type: X,
    description: X,
    apply_url:,
    apply_email:,
    employer: _id,    
  }

  Employer: {
    name: X,
    url: X,
    description: X,
  }
*/