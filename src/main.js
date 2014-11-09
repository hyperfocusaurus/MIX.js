var $ = require('jquery'),
    vm = require('./vm');

$(function () {
  vm.load().then(function () {
    $('.loading').remove();
  });
});
