// function Students(name, rollNo, stClass) {
// this.StudentName = name;
// this.rollNumber = rollNo;
// this.studentClass = stClass; 
// }

// var student1 = new Students('zahid', '4564','Mobile & web development' );
// var student2 = new Students('asad', '4564','Mobile & web development' );

// // console.log(student1);
// console.log(student1, student2);


// function PricePlan(name, price, sitePages, discountedMonths){
// this.name = name;
// this.price =  price; 
// this.sitePages = sitePages;
// this.discountedMonths = discountedMonths;
// this.calcAnnual = function(discountedRate){
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth();
//     var bestPrice = this.price * 12;
//     for (var i=0; i < this.discountedMonths.length; i++){
//         if(this.discountedMonths[i] == currentMonth){

//             bestPrice = bestPrice * discountedRate; 
//             break;
//         }
//     }
//     return bestPrice;
// }

// }

// var basicPlan = new PricePlan('basic', 4, '10', [3,6]);
// var specialPlan = new PricePlan('special', 5, '20', [2,7]);
// var bestPriceBasic = basicPlan.calcAnnual(0.80);
// var bestPriceSpecial = specialPlan.calcAnnual(0.80);
// console.log(bestPriceBasic, bestPriceSpecial)









// var arr = []
// function getValues() {
//     var studentName = document.getElementById("stName").value;
//     var studentRollNumber = document.getElementById("stRollNo").value;
//     var studentClass = document.getElementById("stClass").value;

//     var student = {
//         name: studentName,
//         rollnumber: studentRollNumber,
//         stClass: studentClass

//     }

//     arr.push(student);
//     console.log(arr);
// }







// function Student(name, rollnumber, stClass) {
//     this.name = name;
//     this.rollnumber = rollnumber;
//     this.stClass = stClass;

// }
// var arr = []
// function getValues() {
//     var studentName = document.getElementById("stName").value;
//     var studentRollNumber = document.getElementById("stRollNo").value;
//     var studentClass = document.getElementById("stClass").value;


//     var studentObject = new Student(studentName, studentRollNumber, studentClass);

//     arr.push(studentObject);

//     console.log(arr);
// }

// var counter = 0;     -----> wil continue without stop

//  setInterval(function(){
//     counter++;
//     console.log(counter);

// },1000);

setTimeout(function(){
    console.log('welcome to our web');
    
},5000);


// var counter = 0;   -------------> to terminate

// var timer = setInterval(function(){
//     counter++;
//     console.log(counter);

// },1000);

// setTimeout(function(){
//     console.log('welcome to our web');
//     clearInterval(timer);
// },5000);






