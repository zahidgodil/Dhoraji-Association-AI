
// var arry = []


// function Detail(studentName, rollNumber, feesPaid){
//  this.studentName = studentName ;
//  this.rollNumber = rollNumber  ;
//  this.feesPaid  = feesPaid;

// }

// Detail.prototype.remainingfee=function(monthlyFee){
//     // console.log('hello world')
//     var annualFee = monthlyFee * 12;
//     var remainingfee = annualFee - this.feesPaid;
//     console.log('Remaining Fee:', remainingfee);

// }


// function addvalue(){
//     var name = document.getElementById('stdName').value;
//     var rollnum = document.getElementById('rollNumber').value;
//     var fees = document.getElementById('feesPaid').value;
    
    
//     var val = new Detail(name, rollnum, fees);

//     val.remainingfee(5000);


//     arry.push(val)



//     console.log(val)

// }
    
// for (var i=0; i<arry.length; i++){
//     var eachStudent = arry[i];
// }



// function Detail(name, price, space, transfer, pages, discountedMonths){
//      this.name = name ;
//      this.price = price  ;
//      this.space  = space;
//      this.transfer = transfer;
//      this.pages = pages;
//      this.discountedMonths = discountedMonths


//      var newPlan1 = new Detail('Basic', 3.99, '100', '1000', '10', [6,7]);
//      var newPlan2 = new Detail('Professional', 5.99, '500', '5000', '50', [6,7,11]);
//      var newPlan3 = new Detail('Ultimate', 9.99, '2000', '20000', '500', [6,7])









//      function Students(studentName, rollNumber, feesPaid){
//          this.studentName = studentName ;
//          this.rollNumber = rollNumber  ;
//          this.feesPaid  = feesPaid;
//      }
// Students.prototype.institue = 'Dhoraji Association';

// var newStudent = new Students('zahid', '4545',5000);

// var isInstitue = 'institue' in newStudent;

// var isOwnProp = newStudent.hasOwnProperty('institue');

// console.log(isOwnProp,isInstitue);













var car ={
    name : 'corolla',
    modal : '2010',
    color : 'black'
}


for (var key in car){

    // console.log(key)  if accessing the property
    console.log(car[key]);    accessing the value
}
console.log(car['modal'])