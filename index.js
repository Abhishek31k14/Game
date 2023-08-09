
var started=false;
var level=0;// must be zero as it set in computer turn ;
var colors=["red","green,","yellow","blue"];

var computerArr=[];
var humanArr=[];
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+ level);
        computerTurn();
        started=true;
    }
})

function computerTurn(){

    humanArr=[];

    //seting game level every time computer turn come;
  
    //level must be zero for upgrating it every time;
    level++;
    
    $("#level-title").text("Level "+level);
    //genrating random no.

    var randomNumber=Math.floor(Math.random()*4);//genrating number between 0 and 3;
    var computerChoise=colors[randomNumber];
   //computer turn will change apperence of button and store the class into arry
    computerArr.push(computerChoise);
    $("#"+computerChoise).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(computerChoise);
    
}

$(".btn").click(function(){
   var humanChoise=$(this).attr("id");
   humanArr.push(humanChoise);
  buttonChange(humanChoise);
  playSound(humanChoise);
  check(humanArr.length -1);
})

function check(last){
    if(humanArr[last]===computerArr[last])
    {
      if(humanArr.length===computerArr.length)
      {
       //computer turn comes very fast just after human ckicked delaying it
        setTimeout(function(){
            computerTurn();
        },1000);
      }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press a key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        startOver();
    }
}

// playsound // butttonChange // startOver;


function playSound(color){
   var sound=new Audio("sounds/"+color+".mp3");
   sound.play();
}

function buttonChange(button){
    $("#" + button).addClass("pressed");
    setTimeout(function(){
        $("#" + button).removeClass("pressed");
    },100);
}

function startOver(){
    level=0;// got to top for comment;
    started=false;
    computerArr=[];
}