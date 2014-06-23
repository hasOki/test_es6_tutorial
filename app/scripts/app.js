"use strict";
var __moduleName = (void 0);
console.log('---\nLet Keyword Sample\n===');
var fs = [];
for (var i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}
fs.forEach(function(f) {
  f();
});
fs = [];
{
  try {
    throw undefined;
  } catch ($i) {
    $i = 0;
    for (; $i < 10; $i++) {
      try {
        throw undefined;
      } catch (i) {
        i = $i;
        try {
          fs.push(function() {
            console.log(i);
          });
        } finally {
          $i = i;
        }
      }
    }
  }
}
fs.forEach(function(f) {
  f();
});
console.log('---\nArrow Function Samples\n===');
var deliveryBoy = {
  name: 'Johny',
  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    var that = this;
    this.handleMessage('Hello, ', function(message) {
      console.log(message + that.name);
    });
  }
};
deliveryBoy.receive();
var deliveryBoyArrow = {
  name: 'JohnyArrow',
  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    var $__0 = this;
    this.handleMessage('Hello, ', (function(message) {
      return console.log(message + $__0.name);
    }));
  }
};
deliveryBoyArrow.receive();
console.log('---\nDefault Values Samples\n===');
function greetNoDefault(greeting, name) {
  console.log(greeting + ', ' + name);
}
;
function greet(greeting) {
  var name = arguments[$traceurRuntime.toProperty(1)] !== (void 0) ? arguments[$traceurRuntime.toProperty(1)] : 'John';
  console.log(greeting + ', ' + name);
}
greetNoDefault();
greet();
greet('Hello');
greet('Hello', 'Bill');
