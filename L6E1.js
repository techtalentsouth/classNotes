// function Teacher(name) {
//     this.name = name; //'this' assigns attributes to an objects property
//     this.teach = function(){
//         console.log(this.name + " says constructors are cool");
//     };
// }

// var teacher1 = new Teacher('Shane'); //Calls the function and returns and object
// var teacher2 = new Teacher('Assaf'); //Calls the function and returns and object

// teacher1.teach(); //Shane says constructors are cool
// teacher2.teach(); //Assaf says constructors are cool

//----------------------------------
//Exercise 1: Creating a Constructor
//----------------------------------

//-----Constructor------------------
// function Particle(startX,startY) {
//     this.x = startX;
//     this.y = startY;
//     this.velocity = {
//         x: 0,
//         y: 0
//     };
// }
// var particles = []; //Initializes an array
// for(var i=0; i<100; i++) {
//     particles.push(new Particle(i,Math.random()*500)); //Add 100 objects of type Particle to the array



// }
// console.log(particles); //log the array x = 0->99 and y=random


//--Inheritance------------------

/*
class Teacher extends Person
In this example, Teacher is able to get everything from the Person class
and add its own attributes
*/
//--------------------------
//Simple example
//Shane inherites properties from the Teacher prototype object
//--------------------------
// function Teacher(name, classRoomNumber) {
//     this.name = name;
//     this.classRoomNumber = classRoomNumber;
// }

// // var shane = new Teacher('shane');
// // shane.teach(); //This won't work because it doesn't exist yet

// // The prototype object is shared across all instances

// Teacher.prototype = { //The keyword prototype allows the extension of Teacher
//     teach: function(){
//         console.log('Prototypes are important, says ' + this.name);
//     }
    
// }

// Teacher.prototype.students = 45;

// var shane = new Teacher('shane',100);

// shane.teach();
// console.log(shane.students);
//--------------------------
//--------------------------
// function Teacher() {

// }

// // Notice how the prototype object is shared across all instances
// Teacher.prototype = {
//     disposition : 'evil'
// };

// var shane = new Teacher();
// var assaf = new Teacher();
// console.log(shane.disposition, assaf.disposition);

// Teacher.prototype.disposition = 'happy'; //change the property
// Teacher.prototype.disposition2 = 'confused and grumpy';
// console.log(shane.disposition, assaf.disposition2);


//--------------------------
//Constructors vs Prototypes
//--------------------------
// function Teacher() {
    
// }

// //The prototype adds a name property
// Teacher.prototype = {
//     name: 'John Doe'
// }


// var shane = new Teacher();
// var assaf = new Teacher();

// //Update the property
// shane.name = "Shane";
// console.log(shane.name, assaf.name); //Shane John Doe

//--------------------------
//Example 2
//--------------------------
// function Person(){
//     this.brain = true;
// };
// function Student(){
//     this.computer = true;
// };
// function Graduate(){
//     this.skillz = 'Mad'
// };

// var p = new Person();
// Student.prototype = p; //Add the Student class to the Person Class

// var s = new Student();
// Graduate.prototype = s; //Add the Graduate class to the Student class

// var g = new Graduate(); 

// console.log(g.skillz, g.computer, g.brain);


// //--------------------------
// //hasOwnProperty
// //--------------------------
// console.log(g.hasOwnProperty('skillz'), g.hasOwnProperty('computer'))

//--------------------------
//Exercise 2: Prototypes
//--------------------------

// var time = 0;  //1. Create a time variable and set it to 0
// var gravity = .5; //2. Create a gravity variable and set it to .5
// function Particle(startX, startY) {
//     this.x = startX;
//     this.y = startY;
// }
// Particle.prototype = { //3. Extend the particle class from earlier
//     getVelocity : function() { //4. Create a property that returns time * gravity
        
//         return time * gravity;
//     },
//     //4. Create a property called "move"
//     //move() should add the value from getVelocity to the existing y position
//     move : function() {
//         this.y = this.getVelocity() + this.y;  //Addition
//         //if and when y>= 500 then move() should do the following
//         // console.log(time);
//         if(this.y >= 500){
//             console.log('Particle is out of the array b/c y = ', this.y);
//         }
//     }

// }

// var particles = []; //Create a particles array
// var filteredArray = [];
// for(var i = 0; i<100; i++) {
//     //Math.Random is a number between 0-1...
//     //I changed from 500 to 5000 to get some numbers
//     particles.push(new Particle(i,Math.random()*5000));
// }
// // console.log(particles[3].y);
// //Create a function that runs every 100ms
// setInterval(function(){
//     //Increment the global time variable by 1
//     time = time + 1; //time++;
//     // console.log("Time = " , time);
//     // console.log(particles);
//     // for(var i = 0; i < particles.length;i++) {
//     //     //Log all the array's x values
//     //     // console.log("X = ", particles[i].x);

//     //     if(particles[i].y < 500){
//     //         // console.log("Y is recorded ", i, " = " ,particles[i].y);
//     //         particleYArray.push(particles[i].y);
//     //     }
//     //     else{
//     //         // console.log("Y is not recorded", i);
//     //     }
//     // }

//     /*return an array with all y values 
//         that are less than 500
//     Remember that an array has a function called filter.
//     array.filter(callback(element, index, array))
//     filter will test each element individually

//     Process
//     1. Call the anonymous function for each element in the array
//     2. Filter that array and return the values that are less than 500
//     */
//         filteredArray = particles.filter(function(particle,index, arrayValue){
//             // console.log("Index = " , index);
//             // console.log(arrayValue);
//             // console.log("X = " , particle.x);
//             return particle.y < 500; //Look for values less than 500.
//         });
//         console.log("Array Length = ", filteredArray.length);

//         filteredArray.forEach(function(particle) {
//             particle.move(); //This function increases the value of y using the time parameter
//             // console.log("Velocity = " , particle.getVelocity());
//         });

//         console.log("-------------");
    
// },100)

/*---------------------------------------------------*/

/*
    Object Composition
*/

var lion = {
    roar: function() {console.log('roar')}
}
var goat = {
    kick: function() {console.log('kick')}
}

var lizard = {
    tail: true
}
var chimera = {

}

Object.assign(chimera,lion,goat,lizard);

chimera.roar();
chimera.kick();
console.log(chimera.tail);

// var baseConfig = {
//     appName: 'Slick',
//     apiKey: 'secretPassword',
//     apiBaseUrl: 'http://slickapp.co/api'
// }

// //
// var localConfig = Object.assign({},baseConfig, {
//     apiKey : 'localPassword',
//     apiBaseUrl : 'http://localhost:3000/api'
// });
// //Extend the localConfig object with baseconfig object and a new object
// console.log(localConfig.appName, localConfig.apiBaseUrl); //undefined and http://localhost:3000/api

/*------------------------------------------*/
/* Exercise 3: Mixins */
/* A mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.
/*------------------------------------------*/

//Create a User profile that contains properties for name, address, city, state, zipcode, avatar
//I'm using the constructor 



/*
RECAP: Ways to create objects

1. Literal Notation

var UserProfile = {}

//add properties
UserProfile.name = 'Ken';
UserProfile.address = '123 Main Street';
UserProfile.city = 'Atlanta';
UserProfile.state = 'GA';
UserProfile.zipCode = '30319';
UserProfile.avatar = 'coolguy.jpg';

//Add Methods
UserProfile.getProfileUpdate = function() {
    return {
        name : "Jamie",
        city: "Charlotte",
        state: "NC"
}

UserProfile.updateProfile = function(updates) {
    return Object.assign(this, updates);
}

2. Object Constructor Notation

var UserProfile = new Object();

//add properties
UserProfile.name = 'Ken';
UserProfile.address = '123 Main Street';
UserProfile.city = 'Atlanta';
UserProfile.state = 'GA';
UserProfile.zipCode = '30319';
UserProfile.avatar = 'coolguy.jpg';

//Add Methods
UserProfile.getProfileUpdate = function() {
    return {
        name : "Jamie",
        city: "Charlotte",
        state: "NC"
}

UserProfile.updateProfile = function(updates) {
    return Object.assign(this, updates);
}

--Creating an object with properies and methods--

3. Literal Notation

var UserProfile = {  
//add properties
name = 'Ken';
address = '123 Main Street';
city = 'Atlanta';
state = 'GA';
zipCode = '30319';
avatar = 'coolguy.jpg';

//Add Methods
getProfileUpdate = function() {
    return {
        name : "Jamie",
        city: "Charlotte",
        state: "NC"
}

updateProfile = function(updates) {
    return Object.assign(this, updates);
}

}


4. Object Constructor Notation

function UserProfile(name, address,city,state,zip,avatar) { //Constructor
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zip;
    this.avatar = avatar;

//Add Methods
    this.getProfileUpdate = function() {
    return {
        name : "Jamie",
        city: "Charlotte",
        state: "NC"
}

    this.updateProfile = function(updates) {
    return Object.assign(this, updates);
}


} 

/*
This(IT IS A KEYWORD)

The keyword "this" is commonly used inside functions and objects.
Where the function is declared alters what this means.  It always refers to one object, usually the object in which the function operates.

Example
function windowSize() {
    var width = this.innerWidth; //Refers to the Window object
    var height = this.innerHeight: //Refers to the window object
    return [height,width];

}

//--Global Variables--

var width = 600;
var shape = (width: 300);

var showWidth = function(){
    document.write(this.width);
}
showWidth();

//--A Method of an Object--

var shape = {
    width: 600,
    height: 400,
    getArea: function() {
        return this.width * this.height;
    }
};

//--A Functional Expression as a method --
var width = 600;
var shape = {
    width: 300
};

var showWidth = function(){
    document.write(this.width);
};

shape.getWidth = showWidth; //Sets the function showWidth to getWidth.  Notice the missing ()
shape.getWidth();  Calls the function



*/