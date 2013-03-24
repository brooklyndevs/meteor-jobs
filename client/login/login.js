Template.loginForm.events({
  'click #githubBtn': function(evt) {
    LoginWithGithub();
  },
  'click #employerLoginBtn': function(evt) {
    var employerUsername = $("#usernameEmployerLogin").val();
    var employerPassword = $("#passwordEmployerLogin").val();
    Meteor.loginWithPassword(employerUsername, employerPassword,
      function (error){
        if(error){
          //alert("Failed to login");
          $("#employerLoginErroMsg").text('Warning: Incorrect Login');
        }else{
          $('#loginModal').modal('hide');
          $('#usernameEmployerLogin').val('');
          $('#passwordEmployerLogin').val('');
          $("#employerLoginErroMsg").text('');
        }

      });
  }
});

Template.login.events({
  'click #logoutBtn': function(evt) {
    console.log("Logout");
    Meteor.logout(function(){
      window.location.href="/";
    });
  }
});

Template.login.username = function() {
  var username;
  var user = Meteor.user();
  if(user){
    username = user.username;
  }
  return username;
};

Template.login.githubAvatar = function() {
  var userAvatar;
  var user = Meteor.user();
  if(user){
    userAvatar = user.githubAvatrUrl;
  }

  return userAvatar;
};

// Accounts.loginServiceConfiguration.remove({
//   service: "github"
// });

Accounts.loginServiceConfiguration.insert({
  service: "github",
  clientId: "a58e1cea5292b37efc70",
  secret: "54d1e27c0d94865ad74b5b328a7cd547bd1c2a42"
});

function LoginWithGithub(){
  Meteor.loginWithGithub({
  requestPermissions: []

  }, function (err) {
    if (err){
      Session.set('errorMessage', err.reason || 'Unknown error');
      console.error(err);
      return;
    }

    console.log("we logged in");
    $('#loginModal').modal('hide');
    ParseGitHubJSON();
    
    //Meteor.users.update( { _id:Meteor.userId() }, { $set:{ roles:["Developer"], username: } });

  });
}

Meteor.autorun(function() {
  Meteor.subscribe("githubUser");
  
});

function ParseGitHubJSON(){
  //Get username from actual Github Acct
  var username = Meteor.user().services.github.username;
  var gitHubData = $.getJSON("https://api.github.com/users/"+username, function() {
  })
  .success(function(data) { 
    console.log(data);

    if(Employers.findOne({_id:Meteor.userId()}) === undefined){
      Meteor.users.update( { _id:Meteor.userId() }, { $set:{ roles:["Developer"], username:data.login, githubAvatrUrl:data.avatar_url } });

      obtainGithubLanguages(data.login, function(langArray){
        console.log(langArray);
        Employers.insert( { _id:Meteor.userId(), 
          name:data.name, 
          summary:"I am a passionate Meteor Developer currently seeking for a job in "+ data.location + ". I am available for hiring at the moment. My Github username is "+data.login+" and I have "+data.followers+" followers and "+data.public_repos+" Repositories.", 
          experience:"experience", 
          skills:langArray, 
          education:"education", 
          email:data.email,
          phone:"",
          address:data.location, 
          url:data.url,
          additional:"additional", 

        });

      });

    }

  })
  .error(function() {
    console.log("Error Parsing"); 
  });
}

function obtainGithubLanguages(username, callback){
    var gitHubData = $.getJSON("https://api.github.com/users/"+username+"/repos", function() {
  })
  .success(function(data) { 
    var langArray = [];
    for(var i in data) {
      if(data[i].language !== null){
        if($.inArray(data[i].language, langArray) === -1)
          langArray.push(data[i].language);
      }
    }
    callback(langArray);
  })
  .error(function() {
    console.log("Error Parsing"); 
  });

}
