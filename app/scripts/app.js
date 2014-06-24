"use strict";
var __moduleName = (void 0);
var $__0 = Object.freeze(Object.defineProperties(["Yo ", " is ", ""], {raw: {value: Object.freeze(["Yo ", " is ", ""])}})),
    $__1 = Object.freeze(Object.defineProperties(["Yo ", " is ", ""], {raw: {value: Object.freeze(["Yo ", " is ", ""])}}));
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
          $traceurRuntime.setProperty(fs, i, function() {
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
console.log('---\nConstant Variable Sample\n===');
var PI = 3.14159;
console.log(PI);
PI = 3;
console.log(PI);
var PI = 4;
console.log(PI);
var PI = 5;
console.log(PI);
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
    var $__2 = this;
    this.handleMessage('Hello, ', (function(message) {
      return console.log(message + $__2.name);
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
var $__9 = returnSomething(),
    name = $__9.last_name,
    state = $__9.state;
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
people.forEach((function($__9) {
  var first_name = $__9.first_name;
  return console.log(first_name);
}));
console.log('---\nArray Comprehensions\n===');
var positions = (function() {
  var $__4 = 0,
      $__5 = [];
  for (var $__6 = people[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__7; !($__7 = $__6.next()).done; ) {
    try {
      throw undefined;
    } catch (position) {
      position = $__7.value.position;
      $traceurRuntime.setProperty($__5, $__4++, position);
    }
  }
  return $__5;
}());
var positionOnlyLechter = (function() {
  var $__4 = 0,
      $__5 = [];
  for (var $__6 = people[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__7; !($__7 = $__6.next()).done; ) {
    try {
      throw undefined;
    } catch (last_name) {
      try {
        throw undefined;
      } catch (position) {
        try {
          throw undefined;
        } catch ($__10) {
          {
            $__10 = $__7.value;
            position = $__10.position;
            last_name = $__10.last_name;
          }
          if (last_name === 'Lechter')
            $traceurRuntime.setProperty($__5, $__4++, position);
        }
      }
    }
  }
  return $__5;
}());
console.log(positions);
console.log(positionOnlyLechter);
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = (function() {
  var $__4 = 0,
      $__5 = [];
  for (var $__6 = nums[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__7; !($__7 = $__6.next()).done; ) {
    try {
      throw undefined;
    } catch (num) {
      num = $__7.value;
      if (num > 5)
        $traceurRuntime.setProperty($__5, $__4++, num);
    }
  }
  return $__5;
}());
console.log(filtered);
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var letters = ['a', 'b', 'c', 'd'];
var matrix = (function() {
  var $__4 = 0,
      $__5 = [];
  for (var $__6 = nums[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__7; !($__7 = $__6.next()).done; ) {
    try {
      throw undefined;
    } catch (num) {
      num = $__7.value;
      $traceurRuntime.setProperty($__5, $__4++, (function() {
        var $__4 = 0,
            $__5 = [];
        for (var $__6 = letters[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__7; !($__7 = $__6.next()).done; ) {
          try {
            throw undefined;
          } catch (letter) {
            letter = $__7.value;
            $traceurRuntime.setProperty($__5, $__4++, num + letter);
          }
        }
        return $__5;
      }()));
    }
  }
  return $__5;
}());
console.log(matrix);
console.log('---\nString Templates\n===');
var greeting = 'Hallo';
console.log((greeting + " World"));
var i = 5,
    j = 10;
console.log((i + " + " + j + " = " + (i + j)));
function check(strings) {
  for (var values = [],
      $__8 = 1; $__8 < arguments.length; $__8++)
    $traceurRuntime.setProperty(values, $__8 - 1, arguments[$traceurRuntime.toProperty($__8)]);
  if (values[$traceurRuntime.toProperty(0)] === 'GabaGaba') {
    $traceurRuntime.setProperty(values, 1, 'awesome');
  } else {
    $traceurRuntime.setProperty(values, 1, 'cool');
  }
  return ("" + strings[$traceurRuntime.toProperty(0)] + values[$traceurRuntime.toProperty(0)] + strings[$traceurRuntime.toProperty(1)] + values[$traceurRuntime.toProperty(1)]);
}
var character = 'GabaGaba';
console.log(check($__0, character, ''));
character = 'Bro';
console.log(check($__1, character, ''));
console.log('---\nClasses\n===');
var Language = function Language(name, founder, year) {
  this.name = name;
  this.founder = founder;
  this.year = year;
};
($traceurRuntime.createClass)(Language, {summary: function() {
    return (this.name + " was created by " + this.founder + " in " + this.year);
  }}, {});
var MetaLanguage = function MetaLanguage(x, y, z, version) {
  $traceurRuntime.superCall(this, $MetaLanguage.prototype, "constructor", [x, y, z]);
  this.version = version;
};
var $MetaLanguage = MetaLanguage;
($traceurRuntime.createClass)(MetaLanguage, {}, {}, Language);
