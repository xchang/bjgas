$(document).ready(function () {
  var createNewsForm = $('#createNewsForm');
  var createNewsBtn = $("#createNewsBtn");

  createNewsForm.find('#content').keydown(function() {
    createNewsBtn.attr('disabled', !$(this).val());
  });
  createNewsBtn.bind('click', function(){
    createNewsForm.submit();
  });

  var editNewsForm = $('#editNewsForm');
  var editNewsBtn = $("#editNewsBtn");

  createNewsForm.find('#content').keydown(function() {
    createNewsBtn.attr('disabled', !$(this).val());
  });
  editNewsBtn.bind('click', function(){
    editNewsForm.submit();
  });
});