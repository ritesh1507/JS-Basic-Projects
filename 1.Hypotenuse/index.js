let sideA;
let sideB;
let sideC;

document.getElementById("submit").onclick = function(){
    sideA=document.getElementById("sideAText").value;
    sideB=document.getElementById("sideBText").value;
    sideC=Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
    document.getElementById("sideC").innerHTML="Side C: " + sideC;
}