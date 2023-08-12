const rot = document.getElementById('num1');
var s,sdeg
function setRot(){
    let d = new Date();
    s = d.getSeconds();
    sdeg = s*6;
    rot.style.transform = 'rotate('+sdeg+'deg)';
}
// setInterval(setRot, 1000)