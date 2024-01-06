let counter=0;
document.getElementById("dec").onclick = function(){
    counter--;
    document.getElementById("count").innerHTML=counter;
}
document.getElementById("reset").onclick = function(){
    counter=0;
    document.getElementById("count").innerHTML=counter;
}
document.getElementById("inc").onclick = function(){
    counter++;
    document.getElementById("count").innerHTML=counter;
}

