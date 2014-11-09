var VirtualMachine = function () {
  var registers = {
    rA: 0,
    rX: 0,
    rl1: 0,
    rl2: 0,
    rl3: 0,
    rl4: 0,
    rl5: 0,
    rl6: 0,
    rJ: 0
  },
  flags = {
    overflow: false,
    comparison: false
  },
  memory = [];
  
};

module.exports = VirtualMachine;
