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

  $("#placeOrderBtn").bind("click", function(){
      $.ajax({
          url: '/orders',
          data: $('#placeOrderForm').serialize(),
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