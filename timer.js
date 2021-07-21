/**
 * Demonstrate Async nature of JavaScript.
 * Note: It is similar to Main thread invoking another Activity 
 * which are processed by child Thread.Run the JS code using Node Compiler
 */

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "Secs:";
}

function showSessionExpire(){
    console.log("Activity-B: Your session expired at "+ showTime());
}

console.log("Activity-A: Trigerring Activity-B ay " + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A: Trigerring Activity-B ay " + showTime() + " Will execute after 5 seconds");   