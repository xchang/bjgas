var signUpForm = (function () {
  'use strict';
  var errors = [];
  var values = {};

  function validEmpty(name){
    var value = $.trim($("#" + name).val());
    if (value === '') {
      var err = {};
      err['name'] = name;
      err['error'] = '不能为空';
      errors.push(err);
    } 
  }

  function validSame(val1, val2){
    var v1 = $.trim($("#" + val1).val());
    var v2 = $.trim($("#" + val2).val());
    if (v1 !== v2) {
      var tmp1 = {};
      var tmp2 = {};
      tmp1['name'] = val1;
      tmp1['error'] = '密码两次输入不相同';
      errors.push(tmp1);
      tmp2['name'] = val2;
      tmp2['error'] = '密码两次输入不相同';
      errors.push(tmp2);
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
      validEmpty('userPasswordConfirm');
      validSame('userPassword', 'userPasswordConfirm');
      return errors.length === 0;
    },
    displayErrors: function(){
      $.each(errors, function(index, value){
        var el = $('#' + value['name']).parents('.form-item')[0];
        $('.warning', el).html(value['error']);
        $(el).addClass('has-error');
      });
    },
    submit: function(){
      var self = this;
      var values = {};
      values['email'] = $.trim($('#userEmail').val());
      values['password'] = $.trim($('#userPassword').val());
      values['password_confirm'] = $.trim($('#userPasswordConfirm').val());
      return user.create(values).done(function(data){
        window.location.href = "/";
      }).fail(function(data){
        handleErrors(data.responseJSON['errors']);
        self.displayErrors();
      });
    },
    clearErrors: function(){
      errors = [];
      $('.form-item', $('#signUpFormContainer')).removeClass('has-error');
      $('.warning', $('#signUpFormContainer')).html('');
    }
  }
}());

$(document).ready(function () {
  $("#signUpBtn").bind('click', function(e){
    signUpForm.clearErrors();
    var isValid = signUpForm.validInputs();
    if(isValid) {
      signUpForm.submit();
    } else {
      signUpForm.displayErrors();
    }
  });
});