
// STOPWATCH
// var milliSecond = 0;
// var second = 0;
// var minute = 0;
// var intervalTime;
// var isTimerStarted = false;

// var currentTime = minute + ' : ' + second + ' : ' + milliSecond;
// // 0: 0: 0
// var stopwatch = document.getElementById('stopwatch');
// stopwatch.innerHTML = currentTime;

// function startTimer(){
//     if(isTimerStarted !==true){
//    intervalTime= setInterval(updateTime, 1);
// }
// }
// function updateTime(){
//     isTimerStarted = true;

//     if(milliSecond < 9){
//     milliSecond++;
//     currentTime = minute + ' : ' + second + ' : ' + milliSecond;
//     stopwatch.innerHTML = currentTime;
//     }

//     else if (second < 59){
//         milliSecond = 0;
//         second++;
//         currentTime = minute + ' : ' + second + ' : ' + milliSecond;
//     stopwatch.innerHTML = currentTime;
// }
    
    
//     else {
//         milliSecond = 0;
//         second = 0;
//         minute++;
//         currentTime = minute + ' : ' + second + ' : ' + milliSecond;
//     stopwatch.innerHTML = currentTime;
// }
// }

// function stopTimer(){
//     isTimerStarted = false;
//     clearInterval(intervalTime);
// }

// function clearTimer(){
//     isTimerStarted = false;
//     clearInterval(intervalTime);
//     minute = 0;
//     second = 0;
//     milliSecond = 0;
//     currentTime = minute + ' : ' + second + ' : ' + milliSecond;
//     stopwatch.innerHTML = currentTime;
// }


// PROTOTYPE

function Car(carName,modal, color){
    this.carName = carName;
    this.modal = modal;
    this.color = color;
}

Car.prototype.steering = true;

var corolla = new Car('Corolla', '2018','Black');
console.log(corolla)