// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-2.0.3
//= require jquery.cookie
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require async_request
//= require helpers
//= require models/user
//= require sign-up-form
//= require sign-in-form
//= require_tree .

$(document).ready(function () {
  $("#signOutBtn").bind('click', function(e){
    user.signOut().done(function(data){
      window.location.href = '/';
    });
  });
});