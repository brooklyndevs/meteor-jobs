Meteor.Router.add({ 
  '/developerProfile': 'developerProfile'
});

//USERS COLLECITONM
Template.developerProfileLoggedIn.user = function() {
  return Meteor.user();
};

//DEVELOPERS COLLECTION
Template.developerProfileLoggedIn.developer = function() {
  return Developers.findOne({_id:Meteor.userId()});
};


Template.developerProfileLoggedIn.events({
  'keyup #personalStatement': function(e) {
    var summary = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        summary:summary
      }
    });
  },
  'keyup #experience': function(e) {
    var experience = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        experience:experience
      }
    });
  },
  'keyup #skillExpertise': function(e) {
    var skills = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        skills:skills
      }
    });
  },
  'keyup #education': function(e) {
    var education = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        education:education
      }
    });
  },
  'keyup #emailDevProfile': function(e) {
    var email = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        email:email
      }
    });
  },
  'click #emailCheckboxDevProfile': function(e) {
    console.log("Email Allow Clicked");
    var checked;
    if(e.target.checked) {
      checked = true;
    }
    else {
      checked = false;
    }

    Developers.update({_id:Meteor.userId()}, {
      $set: {
        emailAllow:checked
      }
    });
  },
  'keyup #phoneDevProfile': function(e) {
    var phone = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        phone:phone
      }
    });
  },
  'click #phoneCheckboxDevProfile': function(e) {
    console.log("Phone Allow Clicked");
    var checked;
    if(e.target.checked) {
      checked = true;
    }
    else {
      checked = false;
    }

    Developers.update({_id:Meteor.userId()}, {
      $set: {
        phoneAllow:checked
      }
    });
  },
  'keyup #addressDevProfile': function(e) {
    var address = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        address:address
      }
    });
  },
  'keyup #urlDevProfile': function(e) {
    var url = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        url:url
      }
    });
  },
  'keyup #additonalInfo': function(e) {
    var additional = e.target.value;
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        additional:additional
      }
    });
  },
  'click #closeDevChangeName': function(e) {
    $('#changeDeveloperName').popover('hide');
  },
  'click #confirmDevNameBtn': function(e) {
    var name = $("#changeDevNameText").val();
    console.log(name);
    Developers.update({_id:Meteor.userId()}, {
      $set: {
        name:name
      }
    });
  }

});

Template.developerProfileLoggedIn.rendered = function (){
  var dev = Developers.findOne({_id:Meteor.userId()});
  var name, phoneAllow, emailAllow;
  if(dev){
    name = dev.name;
    phoneAllow = dev.phoneAllow;
    emailAllow = dev.emailAllow;
  }

  $('#phoneCheckboxDevProfile').attr('checked', phoneAllow); 
  $('#emailCheckboxDevProfile').attr('checked', emailAllow); 

  console.log(name);
  console.log("Rendered profileLoggedIn");
  $("#changeDeveloperName").popover({ title: 'Change Name to:<button class="close" id="closeDevChangeName">&times;</button>', content: '<input type="text" id="changeDevNameText" value="'+name+'"><center><button type="button" class="btn btn-primary" id="confirmDevNameBtn">Change</button></center>', html:'true' });

  $("#personalStatement").popover({ placement:"top", content: 'Tell me more about you!', trigger:'focus' });
  $("#experience").popover({ placement:"top", content: 'I wonder what you got!', trigger:'focus' });
  $("#skillExpertise").popover({ placement:"top", content: 'Show me your crafting skills!', trigger:'focus' });
  $("#education").popover({ placement:"top", content: 'Learning is the key of success', trigger:'focus' });
  $("#additionalInfo").popover({ placement:"top", content: 'More to impress?', trigger:'focus' });

  CheckForCheckboxes("phoneDevProfile", "phoneCheckboxDevProfile", "checkboxPhone");
  CheckForCheckboxes("emailDevProfile", "emailCheckboxDevProfile", "checkboxEmail");

  //initialize();
}

var CheckForCheckboxes = function(sel1, sel2, sel3){
  if($("#"+sel1).val().length == 0 ){
    document.getElementById(sel2).disabled=true;
    $("."+sel3).css("color","#aaa");
  }
}
