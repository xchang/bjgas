var helpers = (function () {
  'use strict';
  var errors = {
    'is invalid': '邮箱不合法',
    'is already taken': '邮箱已经存在'
  }
  return {
    getError: function(en){
      return errors[en];
    }
  }
}());