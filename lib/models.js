Posts = new Meteor.Collection('posts');
Employers = new Meteor.Collection('employers');
Developers = new Meteor.Collection('developers');

/*

  User: {
    profile: {
      employerId: '',
      developerId: ''
    }
  }

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