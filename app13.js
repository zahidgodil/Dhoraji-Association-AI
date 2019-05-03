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


function foo(){
    return [1,2,3];

}

let [a,b,c]= foo();
console.log(a,b,c);

