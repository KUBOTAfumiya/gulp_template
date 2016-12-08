require('jquery');
window.mockjax = require('jquery-mockjax')(jquery, window);

$(function() {
  var param = {
    'param1': 'test'
  };
  $.ajax({
      url: '/restful/api',
      dataType: 'json',
      type: 'GET',
      data: param
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