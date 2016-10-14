/*------------------------------------------*/
/* Exercise 3: Mixins */
/* A mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.
/*------------------------------------------*/

//Create a User profile that contains properties for name, address, city, state, zipcode, avatar
//I'm using the constructor 

function UserProfile(name, address,city,state,zip,avatar) { //Constructor
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zip;
    this.avatar = avatar;
} 

UserProfile.prototype.getProfileUpdate = function () {
    return {
        name : "Jamie",
        city: "Charlotte",
        state: "NC"
    }
}

UserProfile.prototype.updateProfile = function(updates) {
    return Object.assign(this, updates);
}


var userKen = new UserProfile('Ken', '123 Main Street', 'Atlanta', 'GA', '30319', 'superman.jpg'); //Initialize a new object
console.log("--Original Profile--");
console.log("1 ",userKen);
var updates = userKen.getProfileUpdate(); //Get an update on the profile
console.log("--Updates--");
console.log("2 ", updates);
userKen.updateProfile(updates); //Update the profile

console.log("--Profile has been updated--");
console.log("3 ", userKen);