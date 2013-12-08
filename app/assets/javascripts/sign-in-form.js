var signInForm = (function () {
  'use strict';
  var errors = [];

  function validEmpty(name){
    var value = $.trim($("#" + name, $('#signInFormContainer')).val());
    if (value === '') {
      var err = {};
      err['name'] = name;
      err['error'] = '不能为空';
      errors.push(err);
    } 
  }

  function handleErrors(errs) {
    errors = [];
    $.each(errs, function(index, value){
      var err = {};
      err['name'] = getName(value['field']);
      err['error'] = helpers.getError(value['error']);
      errors.push(err);
    });
  }

  function getName(field) {
    var names = {
      'email': 'userEmail'
    }
    return names[field];
  }

  return {
    validInputs: function(){
      validEmpty('userEmail');
      validEmpty('userPassword');
      return errors.length === 0;
    },
    displayErrors: function(){
      $.each(errors, function(index, value){
        var el = $('#' + value['name'], $('#signInFormContainer')).parents('.form-item')[0];
        $('.warning', el).html(value['error']);
        $(el).addClass('has-error');
      });
    },
    submit: function(){
      var self = this;
      var values = {};
      values['email'] = $.trim($('#userEmail', $('#signInFormContainer')).val());
      values['password'] = $.trim($('#userPassword', $('#signInFormContainer')).val());
      return user.login(values).done(function(data){
        window.location.href = "/";
      }).fail(function(data){
        handleErrors(data.responseJSON['errors']);
        self.displayErrors();
      });
    },
    clearErrors: function(){
      errors = [];
      $('.form-item', $('#signInFormContainer')).removeClass('has-error');
      $('.warning', $('#signInFormContainer')).html('');
    },
    clearInputs: function(){
      $('.inline-input', $('#signInFormContainer')).val('');
    }
  }
}());

$(document).ready(function () {
  $('#signInFormContainer').on('hidden.bs.modal', function () {
    signInForm.clearErrors();
    signInForm.clearInputs();
  });

  $("#signInBtn").bind('click', function(e){
    signInForm.clearErrors();
    var isValid = signInForm.validInputs();
    if(isValid) {
      signInForm.submit();
    } else {
      signInForm.displayErrors();
    }
  });
});