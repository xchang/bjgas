var user = (function () {
  'use strict';
  var signUpUrl = '/users/';
  var loginUrl = '/sessions/';
  var logoutUrl = '/sessions/logout';
  return {
    create: function(values) {
      return asyncRequest(signUpUrl, values, 'POST');
    },
    login: function(values){
      return asyncRequest(loginUrl, values, 'POST');
    },
    signOut: function(){
      return asyncRequest(logoutUrl, {}, 'DELETE').done(function(data){
        $.removeCookie("_bjgas_session");
      });
    }
  }
}());