var when = require('when'),
    VirtualMachine = require('./VirtualMachine');

module.exports = function () {
  return when.promise(function (resolve, reject) {
    resolve(new VirtualMachine());
  });
}
