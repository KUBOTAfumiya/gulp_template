require('jquery');
var mockjax = require('jquery-mockjax')(jquery, window);

var successJson;
$.getJSON('/api/item/success.json', function(json) {
  successJson = json;
});

mockjax({
  url: '/api.do',
  responseTime: 1000,
  type: 'get',
  status: 200,
  response: function(settings) {
    if (!settings.data) {
      this.responseText = {
        "result": "1",
        "errors": [{
          "code": "E_01",
          "message": "Lack of parameters"
        }]
      };
      return;
    }
    // Failure with 1/10
    if (Math.random() * 10 < 1) {
      this.status = 404;
      return;
    }
    //default
    this.responseText = successJson || {};
  }
});

$(function() {
  var param = {
    'param1': 'test'
  };
  $.ajax({
      url: '/api.do',
      dataType: 'json',
      type: 'GET',
      data: param
    })
    .then(
      function(data) {
        console.log(data);
        $('#output').text(data.text);
      },
      function(data, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown.message);
      }
    );
});