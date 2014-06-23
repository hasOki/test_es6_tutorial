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

function greetNoDefault(greeting, name){
  console.log(greeting + ', ' + name);
};

function greet(greeting, name = 'John'){
  console.log(greeting + ', ' + name);
}

greetNoDefault();
greet();
greet('Hello');
greet('Hello', 'Bill');

