let randomNumber= Math.trunc(Math.random()*20)+1;
console.log("Random number:",randomNumber);
let guessNumber=document.querySelector(".guess");
let message=document.querySelector(".message");
let enterNumber=document.querySelector(".check-btn");
let updatedScore=document.querySelector(".score");
let updatedhighScore=document.querySelector(".HighScore");
let answer=document.querySelector(".answer");
let reset=document.querySelector(".reset");

let totalScore=20;

function checkNumber(){
    let getValue=Number(guessNumber.value);
    if(getValue===randomNumber){
        if(totalScore>0){
            message.textContent="Correct!!";
            document.querySelector("body").style.backgroundColor="green";
            updatedhighScore.textContent=totalScore;
            answer.textContent=randomNumber;
            message.style.color="white";
        }
        else{
            document.querySelector("body").style.backgroundColor="red";     
            message.textContent="You Lost the game";
            message.style.color="red";
        }

    }
    else if(getValue<randomNumber){
        if(totalScore>0){
            message.textContent="Too Low!!";
            message.style.color="red";
            totalScore--;
            updatedScore.textContent=totalScore;
        }
        else{
            document.querySelector("body").style.backgroundColor="red"; 
            message.textContent="You Lost the game";
            message.style.color="red";
        }
    }
    else{
        if(totalScore>0){
            message.textContent="Too High";
            message.style.color="red";
            totalScore--;
            updatedScore.textContent=totalScore;
        }
        else{
            document.querySelector("body").style.backgroundColor="red"; 
            message.textContent="You Lost the game";
            message.style.color="red";
        }
    }
}

enterNumber.addEventListener("click",checkNumber);

function resetfunction(){
    answer.textContent="?";
    message.textContent="start guessing...."
    message.style.color="white";
    updatedhighScore.textContent=0;
    totalScore=20;
    updatedScore.textContent=totalScore;
    guessNumber.value="";
    document.querySelector("body").style.backgroundColor="#494848"; 
    randomNumber= Math.trunc(Math.random()*20)+1;
    
}

reset.addEventListener("click",resetfunction);