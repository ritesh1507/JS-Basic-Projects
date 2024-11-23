import {inject} from "@vercel/analytics"

inject()
let playerChoice;
let computerChoice;
let images=document.querySelectorAll('img');
let play=document.getElementById("btn-play");
// let playAgain=document.getElementById("playAgain");
let counterUser=0;
let counterCpu=0;
document.getElementById("cpuScore").value=0;
document.getElementById("userScore").value=0;

home();
function home (){
    document.getElementById("top-container").style.display="block";
    document.getElementById("play").style.display="block";
    document.getElementById("new-container").style.display="none";
    images.forEach(function(image){
        image.addEventListener('click',function(){
            playerChoice=image.id;
            document.querySelectorAll('img').forEach(function(img){
                img.style.opacity="0.5";
            })
            image.style.opacity="1";
            playerChoice=image.id;
            console.log(playerChoice)
        })
    })
}

play.addEventListener('click',function(){
    document.getElementById("top-container").style.display="none";
    document.getElementById("play").style.display="none";
    document.getElementById("new-container").style.display="flex";
    computerChoice = cpuChoice();
    document.querySelectorAll('img').forEach(function(img){
        img.style.opacity="1";
    })
    console.log(playerChoice);
    document.getElementById("user").src="image/"+playerChoice+".png";
    document.getElementById("cpu").src="image/"+computerChoice+".png";
    document.getElementById("display").innerHTML="";
    setTimeout(function(){
        showScore();
    },2000);
})

document.getElementById("btn-playagain").addEventListener('click',function(){
    home();
})

function cpuChoice(){
    let choice=Math.floor(Math.random()*3);
    console.log(`cpu choice ${images[choice].id}`);
    return images[choice].id;
}

function showScore(){
    if(playerChoice===computerChoice){
        document.getElementById("display").innerHTML="Its a Draw!!"
    }
    else if((playerChoice==="rock" && computerChoice==="paper")||(playerChoice==="paper" && computerChoice==="scissor")||(playerChoice==="scissor" && computerChoice==="rock")){
        document.getElementById("display").innerHTML="You Lost!!";
        counterCpu++;
        document.getElementById("cpuScore").value=counterCpu;
    }
    else if((playerChoice==="rock" && computerChoice==="scissor")||(playerChoice==="paper" && computerChoice==="rock")||(playerChoice==="scissor" && computerChoice==="paper")){
        document.getElementById("display").innerHTML="You Won!!";
        counterUser++;
        document.getElementById("userScore").value=counterUser;
    }
}