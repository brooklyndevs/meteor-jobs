var JobPost = {}; // used as a namespace

JobPost.Previews = new Meteor.Collection(null);

Meteor.startup(function() {


  Regulate.createJob.onSubmit(function (error, data) {
    $('#createJob input, #createJob textarea').removeClass('redError');

    if (error) {
      console.log('errors validating', error);
      _.each(error, function (v, k) {
        // TODO clean this, put a csss rule for this.
        $('#createJob [name='+k+']').addClass('redError');
      });
    }

    if (data) {
      Meteor.call('createJob', data, function () {
        alert('Created the Job. Do something');
      });
    }
  });

  JobPost.previewId = JobPost.Previews.insert({
    title: 'Looking for an amazing Meteor developer',
    employer: 'Your Company Name',
    date: (new Date).toString(),
    description: 'A description of what the job entails should go here. Feel free to use as much Markdown as you\'d like.',
    time: 'Full-time',
    location: 'Brooklyn, New York'
  });

  JobPost.expandPreview = false;
});

Template.job_form.events({

  'keyup #post-title': function(e) {
    var title = e.target.value;
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        title: title
      }
    });
    return false;
  },

  'keyup #post-location': function(e) {
    var location = e.target.value;
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        location: location
      }
    });
    return false;
  },

  'keyup #post-description': function(e) {
    var description = e.target.value;
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        description: description
      }
    });
    return false;
  },

  'click #post-full-time': function(e) {
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        schedule: 'Full-time'
      }
    });
  },

  'click #post-part-time': function(e) {
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        schedule: 'Part-time'
      }
    });
  },

  'click #post-other-time': function(e) {
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        schedule: ''
      }
    });
  },

  'click #tele-rb': function(e) {
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        telecommutable: e.target.checked
      }
    });
  },

  'click #contract-rb': function(e) {
    JobPost.Previews.update(JobPost.previewId, {
      $set: {
        contractBased: e.target.checked
      }
    });
  }
});

Template.post_a_job.events({
  'click #expand-preview': function(e) {

    var jobPost = $('#preview');
    var jobForm = $('#job-form');
    var toggleBtn = e.target;

    var expandedClasses = 'span12';
    var contractedClasses = 'offset1 span6';

    if (!JobPost.expandPreview) {
      JobPost.expandPreview = true;

      jobPost.removeClass(contractedClasses);
      jobPost.addClass(expandedClasses);

      toggleBtn.innerHTML = 'Show Post Form &raquo;'
      jobForm.hide();
    } else {
      JobPost.expandPreview = false;

      jobPost.removeClass(expandedClasses);
      jobPost.addClass(contractedClasses);

      toggleBtn.innerHTML = '&laquo; Expand Preview';
      jobForm.show();
    }
  }
});

Template.job_post_preview.helpers({
  shortDescription: function() {
    var post = JobPost.Previews.findOne();
    if (!post) return '';

    var bold = function(txt) {
      return '<b>' + txt + '</b>';
    };

    var desc = 'This is a';
    if (post.schedule) {
      desc += ' ' + bold(post.schedule);
    }
    desc += ' job in ' + bold(post.location);

    if (post.contractBased || post.telecommutable) {
      desc += ' that is';
    }

    if (post.contractBased) {
      desc += ' ' + bold('contract-based');
    }

    if (post.telecommutable) {
      if (post.contractBased) {
        desc += ' and'
      }
      desc += ' ' + bold('telecommutable');
    }

    desc += '.';
    return new Handlebars.SafeString(desc);
  }
});

Template.job_post_preview.post = function() {
  return JobPost.Previews.findOne();
};