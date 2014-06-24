ES6 Tutorial
=================

##Setting Up Grunt ( or Gulp ) and Traceur
###Install Traceur
You can install Traceur compiler using npm.

```
npm install -g traceur --save-dev
```
###Install Grunt Plugins
If you want to automate the build process you can also install `grunt-traceur` and
`grunt-contrib-watch`, and see it rebuild your ES6 to browser friendly ES5 on top of
`traceur-runtime`.

```
npm install grunt-traceur --save-dev
npm install grunt-contrib-watch --save-dev
```

###Setup Gruntfile.js
Here is the sample setup to run Traceur from your grunt:

```
...
  traceur: {
    options: {
      // traceur options here
      experimental: true,
      blockBinding: true,
      deferredFunctions: true,
      annotations: true,
      debug:true
    },
    custom: {
      files:[{
        expand: true,
        src: ['app/scripts/**/*.es6.js'],
        dest: 'app/scripts/app.js',
        ext: '.js'
      }]
    }
  }, 
...
```
The automation ( auto compile to ES5 ) can be set up inside the watcher area of 
your grunt files.

```
watch:{
  ...
  traceur:{
    files: ['app/scripts/**/*.es6.js'],
    tasks: 'traceur'
  },
  ...
}
```
To run your code, you can use `node` and `traceur`:

```
traceur app/scripts/app.js
```
Or you can also run it on your browser but you need to include
`traceur-runtime.js` in your page, this will allow you to run more advanced
compiled feature from ES6.

```
<!doctype html>
<script src="node_modules/traceur/bin/traceur-runtime.js"></script>
<script src="app/scripts/app.js"></script>
```
Run your grunt watch and you are ready to code in ES6.

```
grunt watch:traceur
```

###Install Gulp Plugins
In my opinion it's more make sense to use Gulp on the converting process since I
see this as a series of tubes and we need to process the files from one end to the
other.
// TODO: Add information on using Gulp in with Traceur
```
npm install -g gulp-traceur
```

// TODO: Add information on setting up Traceur in gulp

###Debugging ES6 Traceur
// TODO: Add information on setting up debugger for ES6


##New in ES6
###Let Keyword
We know about var in JavaScript, and it has gotchas when you use it in scoping.  
Take a look a this simple for loops example:

```
// Create array container for our print log
var logs = [];

// Append the logs array with functions
for( var i = 0; i < 5; i++ ){
  logs.push( function(){
    console.log(i);
  });
}

// Run through the function array
logs.forEach(function(fn){
  fn();
});
```

You would expect that the result will print out 
```
0
1
2
3
4
```
But since `i` got overridden at the end of the loop, it always showing the last
assigned value.
```
4
4
4
4
4
```
In ES6 they introduce a new syntax called `let` that will keep the scope within
the for loops. Try replace the `var` into `let` and re-run the code, you should
see the result showing the number sequence correctly
```
...
for( let i = 0; i < 5; i++ )
...
```
###Arrow Function
The Arrow `=>` is replacing the way you declare class in javascript. Here is a
sample translation from regular function declaration to the Arrow Function
declaration:

#####Original Function Declaration
```
var createGreetings = function(message, name){
  return message + name;
}
```

#####ES6 Function Declaration
```
var arrowGreeting = (message, name) => message + name;
```
Notice that you don't need the return declaration, ES6 will automatically return
the function with the last results.  
The `=>` also keeping the parent scope of the function, that way you don't have to
make additional closure variable and use `this` to get variable from the parent
scope.
```
var messageObj = {
  name: 'Johny',
    handleMessage: function(message, handler){
      handler(message);
    },
    receive: function(){
      // the second 'this' is keeping the scope of the first 'this'
      this.handleMessage('Hello, ', message => console.log(message + this.name));
    }
}
```

###Default Value for Function
ES6 introduce a capability to assign a default value to the function argument.
Here is an example:
```
function greetNoDefault(greeting, name){
  console.log(greeting + ', ' + name);
}
function greet(greeting, name='John'){
  console.log(greeting + ', ' + name);
}
```
When you call the function `greetNoDefault();` it will return:
```
undefined, undefined
```
because they don't have any default value assigned to the function argument.

Calling a function with default value without any argument in ES6 will
automatically use the default value assigned to function argument.
```
greet();                // it should 'print undefined, John'
greet('Hello');         // it should 'print Hello, John'
greet('Hello', 'Bill'); // it should 'print Hello, Bill'
```

A function can be assigned as a default value too:
```
function receive( complete = ()=> console.log('complete')) {
  // Call the function passed in the argument, use default if nothing is passed
  complete();
});

receive(); // it should print 'complete'
receive(function(){
  console.log('the other complete');
}); 
// it should print 'the other complete'
```

###Destructuring Assignment
This come handy if you want to weed out the data out of a return value from a
function, by grabbing certain attribute from an object
```
function returnSomething(){
  return{
    first_name : 'Dexter',
    last_name  : 'Morgan',
    state      : 'Alaska',
    position   : 'Lumberjack'
  }
}
var {first_name: name, state} = returnSomething();
console.log(name);
console.log(state);
```
This also works with arrays
```
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
```
The code above will walk through the array item and grab the `first_name`
attribute of the item and console it out.

###Array Comprehensions
Using the same data from above example we can create a new array and just picking
certain attribute as the new array member.
```
let positions = [for({position} of people) position];
let positionOnlyLechter = [for({position, last_name} of people) if(last_name==='Lechter') position];

console.log(positions);
console.log(positionOnlyLechter);
```
Previously you need to use library like underscore to process array, doing a
filter etc. now with ES6 you don't need external library to do array processing.
Here is another example on how filtering work on arrays with number as the array
items.
```
var nums = [1,2,3,4,5,6,7,8,9,10];
var filtered = [for( num of nums ) if( num > 5 ) num];

console.log(filtered); // it should print '[6, 7, 8, 9, 10]'
```
Using Array comprehensions you can easily build up the matrix from 2 arrays like
this:
```
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var letters = ['a', 'b', 'c', 'd', 'e'];

var matrix = [for(num of nums)[for(letter of letters) num + letter]];

console.log(matrix);
```
Notice how we can write array loop inside another array loop.

###String Templates

