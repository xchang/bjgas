var placeOrderForm = (function () {
  'use strict';
  var errors = [];

  function validEmpty(name){
    var value = $.trim($("#" + name, $('#placeOrderFormContainer')).val());
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
    }
    return names[field];
  }

  return {
    clearErrors: function(){
      errors = [];
      $('.form-item', $('#placeOrderFormContainer')).removeClass('has-error');
      $('.warning', $('#placeOrderFormContainer')).html('');
    },
    clearInputs: function(){
      $('.inline-input', $('#placeOrderFormContainer')).val("");
    },
    validInputs: function(){
      validEmpty('orderContact');
      validEmpty('orderAddress');
      validEmpty('orderSpecification');
      validEmpty('orderNumber');
      validEmpty('orderMobile');
      return errors.length === 0;
    },
    submit: function(){
      var self = this;
      var values = {};
      values['contact'] = $.trim($('#orderContact', $('#placeOrderFormContainer')).val());
      values['address'] = $.trim($('#orderAddress', $('#placeOrderFormContainer')).val());
      values['specification'] = $.trim($('#orderSpecification', $('#placeOrderFormContainer')).val());
      values['number'] = $.trim($('#orderNumber', $('#placeOrderFormContainer')).val());
      values['mobile'] = $.trim($('#orderMobile', $('#placeOrderFormContainer')).val());
      values['telphone'] = $.trim($('#telphone', $('#placeOrderFormContainer')).val());
      return order.create(values).done(function(data){
        alert("我们已经收到您的订单，会尽快为您处理。");
        window.location.href = "/";
      }).fail(function(data){
        handleErrors(data.responseJSON['errors']);
        self.displayErrors();
      });
    },
    displayErrors: function(){
      $.each(errors, function(index, value){
        var el = $('#' + value['name'], $('#placeOrderFormContainer')).parents('.form-item')[0];
        $('.warning', el).html(value['error']);
        $(el).addClass('has-error');
      });
    }
  }
  
}());

$(document).ready(function () {
  $('#placeOrderFormContainer').on('hidden.bs.modal', function () {
    placeOrderForm.clearErrors();
    placeOrderForm.clearInputs();
  });

  $("#placeOrderBtn").bind('click', function(e){
    placeOrderForm.clearErrors();
    var isValid = placeOrderForm.validInputs();
    if(isValid) {
      placeOrderForm.submit();
    } else {
      placeOrderForm.displayErrors();
    }
  });
});