require('jquery');
window.mockjax = require('jquery-mockjax')(jquery, window);

$(function() {
  $.ajax({
      url: '/restful/api',
      dataType: 'json',
      type: 'GET',
      data: {'param1': 'test'}
    })
    .then(
      function(data) {
        $('#output').text(data.text);
      },
      function(data, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown.message);
      }
    );
});