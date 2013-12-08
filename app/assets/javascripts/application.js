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
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  var created = function(data, textStatus, jqXHR){
    alert("created!");
  };

  var invalidInputs = function(jqXHR, textStatus, errorThrown) {
    alert("invalidInputs!");
  };

  var internalError = function(jqXHR, textStatus, errorThrown) {
    alert("internalError!");
  };

  $("#signUpBtn").bind("click", function(){
    var email = $('#userEmail').val();
    var pwd = $('#userPassword').val();
    var confirmPwd = $('#userConfirmPassword').val();
    var data = {
      email: email,
      password: pwd,
      password_confirmation: confirmPwd
    }
      $.ajax({
          url: '/users',
          data: data,
          type: "POST",
          dataType: "JSON",
          statusCode: {
            201: created,
            400: invalidInputs,
            500: internalError
          }
      });
      return false;
  });
});