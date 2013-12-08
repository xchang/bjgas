var order = (function () {
  'use strict';
  var url = '/orders/';
  return {
    create: function(values) {
      return asyncRequest(url, values, 'POST');
    }
  }
}());