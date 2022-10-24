const hourHand = document.getElementById('hh')
const minuteHand = document.getElementById('mh')
const secondHand = document.getElementById('sh')
var d,h,m,s,hdeg,mdeg,sdeg
function setTime(){
    let d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    timeInterval = 6;
    hdeg = h * 30 + m/2;
    mdeg = m * timeInterval;
    sdeg = s * timeInterval;
    hourHand.style.transform= 'rotate('+hdeg+'deg)';
    minuteHand.style.transform= 'rotate('+mdeg+'deg)';
    secondHand.style.transform= 'rotate('+sdeg+'deg)';
    console.log(h + ":" + m + ":"+ s)
}
setInterval(setTime, 1000);


