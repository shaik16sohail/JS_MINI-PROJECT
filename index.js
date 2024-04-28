let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let high=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function user(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let ranColor=btns[ran];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    console.log(gameseq);
    setTimeout(function(){
        flash(ranBtn);
    },500);
    
}
function checkAns(){
    let ind=userseq.length-1;
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length)
            levelUp();
    }
    else{
        if(high<level)
            high=level;
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press any key to start<br>Highest score is ${high}`;
        started=false;
        level=0;
        gameseq=[];
        userseq=[];
        document.body.style.backgroundColor="red";
        setTimeout(function(){
            document.body.style.backgroundColor="white";
        },300);
        // levelUp();
    }
}
function btnPress(){
    let btn=this;
    user(btn);
    userseq.push(this.getAttribute("id"));
    checkAns();
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}