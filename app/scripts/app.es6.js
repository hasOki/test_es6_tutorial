// Let Keyword
// ===========
console.log('---\nLet Keyword Sample\n===');
var fs=[];
for( var i = 0; i<10; i++){
  fs.push(function(){
    console.log(i);
  });
}
fs.forEach(function(f){
  f();
});

fs=[];
for( let i = 0; i<10; i++){
  fs.push(function(){
    console.log(i);
  });
}

fs.forEach(function(f){
  f();
});

// Arrow Function
// ==============
// Original function
console.log('---\nArrow Function Samples\n===');
var deliveryBoy = {
  name: 'Johny',

  handleMessage: function(message, handler){
    handler(message);
  },

  receive: function(){
    var that = this;

    this.handleMessage('Hello, ', function(message){
      console.log(message + that.name);
    });
  }
}
deliveryBoy.receive();

// Arrow function
var deliveryBoyArrow = {
  name: 'JohnyArrow',

  handleMessage: function(message, handler){
    handler(message);
  },

  receive: function(){
    this.handleMessage('Hello, ', message => console.log(message + this.name));
  }
}
deliveryBoyArrow.receive();

// Default Values for Function
// ===========================
console.log('---\nDefault Values Samples\n===');

// with no default
function greetNoDefault(greeting, name){
  console.log(greeting + ', ' + name);
};

// with default
function greet(greeting, name = 'John'){
  console.log(greeting + ', ' + name);
}

greetNoDefault();
greet();
greet('Hello');
greet('Hello', 'Bill');

// with function default
function receive( complete = ()=> console.log('complete')){
  // Call the function passed in the argument, use default if nothing is passed
  complete();
}

receive();
receive(function(){
  console.log('the other complete');
});

// Destructuring Assignment
// ===========================
console.log('---\nDestructuring Assignment\n===');

// grab attribute from object
function returnSomething(){
  return{
    first_name : 'Dexter',
    last_name  : 'Morgan',
    state      : 'Alaska',
    position   : 'Lumberjack'
  }
}
var {last_name:name, state} = returnSomething();

console.log(name);
console.log(state);

var people = [
  {
  first_name : 'Dexter',
  last_name  : 'Morgan',
  state      : 'Alaska',
  position   : 'Lumberjack'
}, {
  first_name : 'Hanibal',
  last_name  : 'Lechter',
  state      : 'Minnesota',
  position   : 'Therapist'
}, {
  first_name : 'Joe',
  last_name  : 'Caroll',
  state      : 'New York',
  position   : 'Literature Professor'
}, {
  first_name : 'Norman',
  last_name  : 'Bates',
  state      : 'California',
  position   : 'Motel Owner'
}
];

people.forEach(({first_name})=> console.log(first_name));

// Array Comprehesions
// ===========================
console.log('---\nArray Comprehensions\n===');
let positions = [for({position} of people) position];
let positionOnlyLechter = [for({position, last_name} of people) if(last_name==='Lechter') position];

console.log(positions);
console.log(positionOnlyLechter);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = [for( num of nums ) if( num > 5 ) num];

console.log(filtered);

var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var letters = ['a', 'b', 'c', 'd'];

var matrix = [for(num of nums)[for(letter of letters) num + letter]];

console.log(matrix);

// String Templates
// ===========================
console.log('---\nString Templates\n===');

