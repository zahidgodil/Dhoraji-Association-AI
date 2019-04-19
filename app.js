// function PricePlan(name ,price , sitesPages, dicountMonths){
//     this.name = name;
//     this.price=price;
//     this.sitesPages=sitesPages;
//     this.discountMonths=dicountMonths;
//     this.calAnnual = function (discountedRates){
//         var currentDate = new Date();
//         var currentMonth = currentDate.getMonth();
//         var bestPrice = this.price * 12 ;
//         for (var i= 0 ; i< this.discountMonths.length; i++){
//             if(currentMonth == this.discountMonths[i]){
//             bestPrice = bestPrice * discountedRates;
//         break;    
//         }
//         }
//         return bestPrice;
//     }
//         }

//         var student = new PricePlan('yasir', 4 , '10' , [3 ,5]);
//         var student1 = new PricePlan('aslam', 5 , '20' , [2 ,4]);
        
//         console.log(student,student1);

//         var basicPlan =student.calAnnual(0.80);
//         var specialPlan =student1.calAnnual(0.80);

//         console.log(basicPlan)
        
//         console.log(specialPlan)

// new thing
// var arr = []


// function Values(stdName, stdRoll , fees) {
//     this.stdName = stdName ;
//     this.stClass = stdRoll ;
//     this.fees = fees;
// }

// Values.prototype.remainingFees=function(totalfees){
//     this.totalfees=totalfees-this.fees;
//     console.log(this.totalfees); 
//     alert(this.stdName+"  "+"Your Remaining Fees Is "+"  "+this.totalfees)
// }

// function getValues(){  
// var studentName = document.getElementById("stName").value;
// var studentRollNumber = document.getElementById("stRollNo").value;
// var fees = parseInt( document.getElementById("stClass").value);


// var newValues = new Values(studentName, studentRollNumber,fees)
// arr.push(newValues);
// document.getElementById("stName").value="";
// document.getElementById("stRollNo").value="";
// document.getElementById("stClass").value="";


// newValues.remainingFees(60000)

// console.log(arr);

// }

// next project


// var Plans = function(name,price,space,transfer,pages,discountMonths){
//     this.name = name
//     this.price = price
//     this.space =space
//     this.transfer = transfer
//     this.pages = pages
//     this.discountMonths = discountMonths
// }
// Plans.prototype.cancellable = true;
// var plan1 = new Plans("Basic",3.99,100,1000,10,["July","August"])
// var plan2 = new Plans("Professional",5.99,500,5000,50,["July","August","December"])
// var plan3 = new Plans("Ultimate",9.99,2000,20000,500,["July","August"])

// plan3.cancellable=false

// console.log(plan3)
// console.log(plan1)

// var fruits =["apple","banana","orange"]

// var car= {
//     name:"toyota",
//     model:"2011",
//     color:"green",
// }
// for (var key in car){
//     console.log(car[key]);
// }

// function checkForLastName() {
//   var lastName1= document.getElementById("lastNameField");
//   if(lastName1.value.length===0) {
     
//     lastName1.focus();
//     errE1.innerHTML = 'last name field is required';
//     lastName1 ='1px dotted red';
//     setTimeout{function(){
//         errE1.innerHTML='';},3000);
//     }}
     
     
     
     
     
//      return false;
//      }
//      }



// function checkForSelection(){
//     var dropE1 = document.getElementById('states');
//     if (dropE1.selectedIndex===0){
//         errE1.innerHTML = 'you must select atleast 1 index';
//         setTimeout(function(){
//             errE1.innerHTML='';

//         },3000);
//         return false;
//     }
// }







// function validateRadios() {
//      var radios = document.getElementsByName("r1");
//      for (var i = 0; i < radios.length; i++) {
//      if (radios[i].checked) {
//      return true;
//      }
//      }
//      errE1.innerHTML = 'you must select 1 radio';
//      setTimeout(function(){
//                     errE1.innerHTML='';
        
//                 },3000);
               
//      return false;
//      }


// function greetWorld() {
//     try{ 
//     var greeting = "Hello world!";
//      aler(greeting);
//      }
// catch(error){
//     alert("something went wrong..")
// }
// }

function greetWorld() {
        try{ 
        var greeting = "Hello world!";
         throw 'Welcome to Error World!'
         }
    catch(error){
       console.error(error);
       console.log(error);
       console.warn(error);
    }
    }