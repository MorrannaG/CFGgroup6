let age= "20";
let name = "John";
let futureJob = "Web Developer";

// let myIntro= "My name is " + name + "I am " + age + "I will soon become " + futureJob;

// console.log(myIntro)

// let age = prompt('please enter your age:');
// if (age>= 17){alert('you can drive in the UK')}




// (((let age = prompt('Please enter your age : ');

// if(age >= 17){
    
//     alert('You can drive in the UK');
// }else if(age < 17) {
//     alert('Sorry you cannot drive and have to get the bus  😃 ')

// }else {
//     alert('No Infos found')

// } 

let clickmebtn = document.getElementById('myButton')
clickmebtn.addEventListener('click',pressAlert)
function pressAlert(){
    alert('Howdy!')
    clickmebtn.innerHTML= 'Following'
}

let gotit= document.getElementById('testing')
gotit.addEventListener('click', clicked)
function clicked(){
    gotit.innerHTML= 'You got it!'
}