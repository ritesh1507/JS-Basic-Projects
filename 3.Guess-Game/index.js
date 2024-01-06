let guesses=1;
const num=Math.floor(Math.random()*10+1);
let result=document.getElementById("result");
document.getElementById("submit").onclick = function(){
    let yourGuess=document.getElementById("guessText").value;
    yourGuess=Number(yourGuess)
    console.log(yourGuess,num);
    if(yourGuess===num){
        if(guesses===1){
            document.getElementById("celebrate").style.display='block';
            result.innerHTML = `Congo!! You guessed it in ${guesses}st try.`
        }
        else if(guesses===2){
            document.getElementById("celebrate").style.display='block';
            result.innerHTML = `Congo!! You guessed it in ${guesses}nd try.`
        }
        else if(guesses===3){
            document.getElementById("celebrate").style.display='block';
            result.innerHTML = `Congo!! You guessed it in ${guesses}rd try.`
        }
        else
        result.innerHTML = `Too bad!! You guessed it in ${guesses}th try.`
        guesses=0;
        
    }
    else if(yourGuess>num){
        document.getElementById("celebrate").style.display='none';
        result.innerHTML="Too large!!"
    }
    else{
        document.getElementById("celebrate").style.display='none';
        result.innerHTML="Too small!!"
    }
    guesses++;
}