$(function() {
  var param = {'param1': 'test'};
  $.ajax({
    url: '/api.do',
    dataType: 'json',
    type: 'GET',
    data: param
  })
  .then(
    function (data) {
      console.log(data);
      $('#output').text(data.text);
    },
    function (data, textStatus, errorThrown){
      console.log(textStatus);
      console.log(errorThrown.message);
    }
  );
});