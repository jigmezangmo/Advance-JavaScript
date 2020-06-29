//Function constructor - the newly created object inherits from the constructure proto-type property.

/*let jigme = {
    name:'Jigme',
    yearOfBirth: 1990,
    job: 'teacher'
}

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.CalculateAge = function(){
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Zangmo';

 jigme = new Person('Jigme', 1990, 'teacher');

let pema = new Person('Pema', 1996, 'designer');
let yangden = new Person('Yangden', 1889, 'painter');

jigme.CalculateAge();
pema.CalculateAge();
yangden.CalculateAge();

console.log(jigme.lastName);
console.log(pema.lastName);
console.log(yangden.lastName);



let jigme = {
    name: 'jigme',
    yearOfBirth: 1996,
    dzongkha: 'mongar'
}

let Student = function(name, yearOfBirth, dzongkha) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.dzongkha = dzongkha;
}

Student.prototype.calculateAge = function (){
    console.log(2020 - this.yearOfBirth);
};
Student.prototype.favorite = 'blue';
jigme = new Student ('jigme', 1996, 'mongar');
let sonam = new Student ('sonam', 1889, 'tashi');

jigme.calculateAge();
sonam.calculateAge();

console.log(jigme.favorite);
console.log(sonam.favorite);
*/


// Object.create - builds an object that inherits directly from the one we passed the internal first argument.
/* It allows us to implemnt relly complex inheritance constructure in an easier way then function constructure.

let personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

let jigme = Object.create(personProto);
jigme.name = 'Jigme';
jigme.yearOfBirth = 1995;
jigme.job = 'teacher';

let zangmo = Object.create(personProto, {
    name: {value:'Zangmo'},
    yearOfBirth:{value:1993},
    job:{value:'designer'}
});


// Primitives vs Objects

// primitives - immutable
let a = 23;
let b = a;
a = 32;
console.log(a); // 23
console.log(b); // 32

// Objects - mutable
let obj1 = {
    name: 'Jigme',
    age: 26
};

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30


// Functions
let age = 34;
let obj = {
    name:'Pema',
    city: 'Mongar'
};
function change(a,b) {
    a = 40;
    b.city = 'Thimphu';
}

change (age, obj);

console.log(age);
console.log(obj.city);


// Passing functions as arguments

let years = [ 1990, 1965, 1937, 2005, 1998];

function arrayCalculation(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge (element) { 
    return 2020 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81){ 
        return Math.round(206.9 - (0.67 * element)) ;
    } else {
        return -1;
    }
    
}
let ages = arrayCalculation(years, calculateAge);
let fullAges = arrayCalculation(ages, isFullAge);
let rates = arrayCalculation(ages, maxHeartRate);
console.log(ages);
console.log(rates);


// Functions returning functions
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name + ', can you plese explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('what subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('desinger');

teacherQuestion('Jigme'); // what subject do you teach, jigme?
designerQuestion('Zangmo'); // Hello Zangmo, what do you do?

interviewQuestion('teacher')('Sonam'); // what subject do you teach, sonam?

// Example:2
function totalMarks (score) {
    if (score => 80) {
        return function (name) {
            console.log (name + ' scored 82 in maths');
        }
    } else if (score <= 80) {
        return function(name) {
            console.log(name + 'scored 75 in English');
        }
    }
}

let mathScore = totalMarks (87);
let englishScore = totalMarks (75);

mathScore('Sonam');

totalMarks (90) ('Jigme');


/////Function Return 
////Function are are first class
//Fuction can be trated as variables, can be assigned , can be passed, can be returned.

function generateRandomNumber(){

    return Math.random();    
}

function addWithRandom(){

   
    return function(x){
        console.log(x+ generateRandomNumber());
    }
    
}

let result=  addWithRandom()
console.log(result(9));



//Immediately invoked Function Expressions (IIFE)

function game(){
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();


( function (){
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    let score = Math.random() *5;
    console.log(score >= 5 - goodLuck);
})(5);


// Closures - An inner function has always access to the varables and parameters of its outer function, even after the outer function has returned.
          
function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;
 }


 let outerReturn = outer();
 console.log(outerReturn())
*/

// Bind, Call and Apply

let jigme = {
    name: 'Jigme',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentalemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === ' friendly '){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.             ');
        }
    }
};

let sonam = {
    name: 'Sonam',
    age: 27,
    job: 'developer'
};

jigme.presentation ('formal', 'morning');

jigme.presentation.call (sonam, 'friendly', 'afternoon');

//jigme.presentation.apply(sonam, ['friendly', 'afternoon']);

let jigmeFriendly = jigme.presentation.bind(jigme, 'friendly');

jigmeFriendly('morning');
jigmeFriendly('night');
 









