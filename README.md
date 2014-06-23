ES6 Tutorial
=================

##Setting Up Grunt and Traceur
###Install traceur
You can install traceur compiler using npm.

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
Here is the sample setup to run traceur from your grunt:

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
greet();                // return undefined, John
greet('Hello');         // return Hello, John
greet('Hello', 'Bill'); // return Hello, Bill
```



