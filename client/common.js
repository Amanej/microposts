//Subscribe to Posts
Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");

Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',      // mandatory - path to redirect to after successful sign-in7
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });

    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    })
  });

// Global helper/function for retrieving the profile images of unique users
Template.registerHelper('getProfileImg', function(userId){
  var imgUrl = UserImages.findOne({userId: userId}).image;
  return imgUrl;
});
