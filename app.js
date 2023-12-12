let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    let options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame =()=>{
   //console.log("game was draw");
   msg.innerText="Game was draw Play Again?"
   msg.style.backgroundColor="rgb(139, 129, 129)";
}
const showWinner =(userwin,userchoice,compchoice)=>{
   if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
   
    msg.innerText=`You Win ! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
   }
   else{
    compscore++;
    compscorepara.innerText=compscore;
   
    msg.innerText=`You Lose ! ${compchoice}  beats ${userchoice} `;
    msg.style.backgroundColor="red";
   }
}
const playGame= (userchoice)=>{
    const compchoice=gencompchoice();
    
    if (userchoice===compchoice){
         drawGame();
    }
    else{
      let userwin=true;
      if(userchoice=="rock"){
        //scissors,paper
        userwin=compchoice==="paper"?false:true;

      }
      else if(userchoice=="paper"){
        //rock,scissors
        userwin=compchoice==="scissors"?false:true;
      }
      else{
         //rock,paper
         userwin=compchoice==="rock"?false:true;
      }
      showWinner(userwin,userchoice,compchoice);
    }
}
   
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       
        playGame(userchoice);
        
    })
})