// let userName = 'Ahmed Raza';
// console.log(userName);


// let greet = () => {
//     return 'hellow es6'
// }

// setInterval(()=>{
//     console.log('hellow es6')
// }, 1000)


/////////////////////////////////////////////////////////////////////////////






// let greet = ()=> 'hellow es6';
// setTimeout(()=>{
//     console.log('hellow es6')
// }, 1000)


// function Person(){
//     this.age=0;
//     var self = this;
//     setInterval (function(){
//         self.age++;
//         console.log(self.age);

//     }, 1000);
// }
// var p = new Person();


// function Person(){
//         this.age=0;
        
//         setInterval (()=>{
//             this.age++;
//             console.log(this.age);
    
//         }, 1000);
//     }
//     var p = new Person();

// const getFinalPrice = (price = 800, tax = 1.5, totalParam = price + tax) => {
//     console.log(price + price*tax);
//     console.log(totalParam);
// }

// getFinalPrice(400,2,500);

// var breadType = 'brown';
// var topping1 = 'jalepino';
// var topping2 =  'cheese';

// var meal = `I had ${breadType} toast with ${topping1} and ${topping2}
// it was yummy
// `
// console.log(meal);

// const makeToast = (breadType, topping1, topping2) =>{
//     return `I had ${breadType} toast with ${topping1} and ${topping2}`;
// };
// const ingredients = ['wheat','butter', 'jam'];
// // makeToast(ingredients[0],ingredients[1], ingredients[2])
// var toast1 = makeToast(...ingredients);
// var toast2 = makeToast(...['sourdough','avocade','kale']);

// console.log(toast1)
// console.log(toast2)


// const defaults = {avatar: 'placeholder.jpg', active: false}
// const userData = {userName: 'foo', avatar:'bar.jpg'}
// let mergeObject = {userName:'haider', ...userData,...defaults, roll: 2643}

// console.log(mergeObject);

// let initnumber = [0,1,2];
// let endNumber = [7,8,9];
// let firstTenNumber = [...initnumber,3,4,5,6,...endNumber];
// console.log(firstTenNumber);


// function getCar(make, model, value){
//     return{
//         make,
//         model,
//         value,
//         ['make'+ make]: true,
//         depreciate(){
//             this.value -= 2500;

//         }
//     };
// }

// let car = getCar('kia', 'Sorento',40000);
// console.log(car);
// car.depreciate()

// var arr = ['jon', 'ducket'];
// var winnerIndx = Math.ceil(Math.random()*2);
// var winnderName;

// console.log(winnerIndx);
// if (winnerIndx === 1){
//     winnderName = arr[0];
// }
// else{
//     winnderName = arr[1];
// }
// var winner = {
//     [winnderName]: true
// }

// console.log(winner);


// function getCar(){
//     return {

//         make:'tesla',
//         model: 'g95',
//         metadata :{
//             vin: '123abc',
//             miles: '12000'
//         },
//         electricCar: true
//     };

// } 

// const {electricCar,} = getCar();
// console.log(electricCar);


// function foo(){
//     return [1,2,3];

// }

// let [a,b,c]= foo();
// console.log(a,b,c);

// class Car {
//     constructor(){
//         console.log('car is being made.');
//     }

// speed(){
//     console.log('car is in speed.');
// }
// }

// var newCar = new Car();
// newCar.speed()






// class Car {
//     constructor(color, make, modal){
//        this.color = color;
//        this.make = make;
//        this.modal = modal;
//     }
//     hybrid = true;
// speed(){
//     console.log('car is in speed.');
// }
// }

// var newCar = new Car('red', 'suzuki',2010);
// console.log(newCar)






// class Car {
//     constructor(wheelsCount){
//         this.wheel = wheelsCount
       
//     }
// }

// class Suzuki extends Car{
// constructor(color, modal, wheelsCount){
//     super(wheelsCount);
//     this.color=color;
//     this.make = 'suzuki';
//     this.modal = modal;
// }
// }
// class Cultus extends Suzuki{
// constructor(manualtransmission){   
//     super(manualtransmission);

// }

// var suzukiCar = new Car('red', 2010, 4);
// console.log(suzukiCar)



// function printSum(sumValue){
//     console.log(sumValue);
// }

// function sum(num1, num2, cb){
    
//     var sum = num1 + num2;

//     cb(sum);
// }

// sum(2,4, printSum);


// function sum(num1, num2, cb){
    
//     var sum = num1 + num2;

//     cb(sum);
// }

// sum(2, 4, function(sumValue){
//     setTimeout(function(){
//         console.log(sumValue)
//     }, 3000);
// });

// var iftarParty = new Promise((resolve, reject) =>{
//     var randomNumber = Math.ceil(Math.random()*2)
//     setTimeout(() => {
//         if(randomNumber ===1){
//         resolve();
//     }
//     else{
//         reject();
//     }

//     }, 3000)
// });

// iftarParty
//     .then(() => {
//         var username = prompt('what is your name');
//         document.write(`Welcome ${username}`);
//     }) 
//     .catch(() =>{
//         console.error('something went wrong');
//     });


    
// var iftarParty = new Promise((resolve, reject) =>{
//     var randomNumber = Math.ceil(Math.random()*2)
   
//         if(randomNumber ===1){
//         resolve('welcome to promises');
//     }
//     else{
//         reject('it was not number 1');
//     }
// })


// iftarParty
//     .then((msg) => {
//         document.write(msg);
//         return 'no error occurred'
//    }) 
//     .catch((err) =>{
//         console.error(err);
//         return 'some error occurred'
//     })
//     .then((promiseResponse) => {
//         console.log(promiseResponse);
//     })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) =>{
//         // console.log(response)
//         returnresponse.json()
//     })
//     .then((jsonData)=>{
//         console.log(jsonData);
//         document.write(`Stori title is ${jsonData.title}`);
//     }
//     )




var iftarBazar = ['apple', 'banana', 'tarbooz', 'khajoor'];
iftarBazar.map((fruit, index)=>{
    console.log(fruit, index);
})