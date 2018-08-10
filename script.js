const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//convert above into degrees.

let hrPosition = (hr*30)+(min*.5);
let minPosition = (min*6)+(sec*.1);
let secPosition = sec*6;



function runTheClock(){

    secPosition = secPosition+6;
    minPosition = minPosition+(6/60);
    hrPosition  = hrPosition+(3/360);


    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    
}

//Every second, we run the function
var interval = setInterval(runTheClock, 1000);
