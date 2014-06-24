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
function receive() {
  var complete = arguments[$traceurRuntime.toProperty(0)] !== (void 0) ? arguments[$traceurRuntime.toProperty(0)] : (function() {
    return console.log('complete');
  });
  complete();
}
receive();
receive(function() {
  console.log('the other complete');
});
console.log('---\nDestructuring Assignment\n===');
function returnSomething() {
  return {
    first_name: 'Dexter',
    last_name: 'Morgan',
    state: 'Alaska',
    position: 'Lumberjack'
  };
}
var $__5 = returnSomething(),
    name = $__5.last_name,
    state = $__5.state;
console.log(name);
console.log(state);
var people = [{
  first_name: 'Dexter',
  last_name: 'Morgan',
  state: 'Alaska',
  position: 'Lumberjack'
}, {
  first_name: 'Hanibal',
  last_name: 'Lechter',
  state: 'Minnesota',
  position: 'Therapist'
}, {
  first_name: 'Joe',
  last_name: 'Caroll',
  state: 'New York',
  position: 'Literature Professor'
}, {
  first_name: 'Norman',
  last_name: 'Bates',
  state: 'California',
  position: 'Motel Owner'
}];
people.forEach((function($__5) {
  var first_name = $__5.first_name;
  return console.log(first_name);
}));
console.log('---\nArray Comprehensions\n===');
var positions = (function() {
  var $__1 = 0,
      $__2 = [];
  for (var $__3 = people[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__4; !($__4 = $__3.next()).done; ) {
    try {
      throw undefined;
    } catch (position) {
      position = $__4.value.position;
      $traceurRuntime.setProperty($__2, $__1++, position);
    }
  }
  return $__2;
}());
var positionOnlyLechter = (function() {
  var $__1 = 0,
      $__2 = [];
  for (var $__3 = people[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__4; !($__4 = $__3.next()).done; ) {
    try {
      throw undefined;
    } catch (last_name) {
      try {
        throw undefined;
      } catch (position) {
        try {
          throw undefined;
        } catch ($__6) {
          {
            $__6 = $__4.value;
            position = $__6.position;
            last_name = $__6.last_name;
          }
          if (last_name === 'Lechter')
            $traceurRuntime.setProperty($__2, $__1++, position);
        }
      }
    }
  }
  return $__2;
}());
console.log(positions);
console.log(positionOnlyLechter);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = (function() {
  var $__1 = 0,
      $__2 = [];
  for (var $__3 = nums[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__4; !($__4 = $__3.next()).done; ) {
    try {
      throw undefined;
    } catch (num) {
      num = $__4.value;
      if (num > 5)
        $traceurRuntime.setProperty($__2, $__1++, num);
    }
  }
  return $__2;
}());
console.log(filtered);
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var letters = ['a', 'b', 'c', 'd'];
var matrix = (function() {
  var $__1 = 0,
      $__2 = [];
  for (var $__3 = nums[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__4; !($__4 = $__3.next()).done; ) {
    try {
      throw undefined;
    } catch (num) {
      num = $__4.value;
      $traceurRuntime.setProperty($__2, $__1++, (function() {
        var $__1 = 0,
            $__2 = [];
        for (var $__3 = letters[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__4; !($__4 = $__3.next()).done; ) {
          try {
            throw undefined;
          } catch (letter) {
            letter = $__4.value;
            $traceurRuntime.setProperty($__2, $__1++, num + letter);
          }
        }
        return $__2;
      }()));
    }
  }
  return $__2;
}());
console.log(matrix);
console.log('---\nString Templates\n===');
