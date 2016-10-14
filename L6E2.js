//--------------------------
//Exercise 2: Prototypes
//--------------------------

var time = 0;  //1. Create a time variable and set it to 0
var gravity = .5; //2. Create a gravity variable and set it to .5
function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
}


Particle.prototype = { //3. Extend the particle class from earlier
    getVelocity : function() { //4. Create a property that returns time * gravity
        
        return time * gravity;
    },
    //4. Create a property called "move"
    //move() should add the value from getVelocity to the existing y position
    move : function() {
        this.y = this.getVelocity() + this.y;  //Addition
        //if and when y>= 500 then move() should do the following
        // console.log(time);
        if(this.y >= 500){
            console.log('Particle is out of the array b/c y = ', this.y);
        }
    }

}

var particles = []; //Create a particles array
var filteredArray = [];
for(var i = 0; i<100; i++) {
    //Math.Random is a number between 0-1...
    //I changed from 500 to 5000 to get some numbers
    particles.push(new Particle(i,Math.random()*5000));
}
// console.log(particles[3].y);
//Create a function that runs every 100ms
// setInterval(function(){    }, 100);
setInterval(function(){
    //Increment the global time variable by 1
    time = time + 1; //time++;
    // console.log("Time = " , time);
    // console.log(particles);
    // for(var i = 0; i < particles.length;i++) {
    //     //Log all the array's x values
    //     // console.log("X = ", particles[i].x);

    //     if(particles[i].y < 500){
    //         // console.log("Y is recorded ", i, " = " ,particles[i].y);
    //         particleYArray.push(particles[i].y);
    //     }
    //     else{
    //         // console.log("Y is not recorded", i);
    //     }
    // }

    /*return an array with all y values 
        that are less than 500
    Remember that an array has a function called filter.
    array.filter(callback(element, index, array))
    filter will test each element individually

    Process
    1. Call the anonymous function for each element in the array
    2. Filter that array and return the values that are less than 500
    */
        filteredArray = particles.filter(function(particle,index, arrayValue){
            // console.log("Index = " , index);
            // console.log(arrayValue);
            // console.log("X = " , particle.x);
            return particle.y < 500; //Look for values less than 500.
        });
        console.log("Array Length = ", filteredArray.length);

        filteredArray.forEach(function(particle) {
            particle.move(); //This function increases the value of y using the time parameter
            // console.log("Velocity = " , particle.getVelocity());
        });

        console.log("-------------");
    
},100)

/*---------------------------------------------------*/