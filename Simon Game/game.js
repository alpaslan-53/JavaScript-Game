var gamePattern=[];
var userClickedPattern=[];
var buttonColors =["red","blue","green","yellow"];
var randomChosenColour;
var level=0;
var started=false;

//PRESS A KEY TO START
$(document).keypress(function(){
    if(!started){
        $("body").addClass(".body");
        $("h2").hide();
        $("#level-title").text("LEVEL"+level);
        nextSequence();
        started=true;
    }

})

//1 RANDOM BOX LIGHTS

//USER'S CLICK ON BUTTON


    $(".btn").click(function(){
        var userChosenColor=$(this).attr("id");
        userClickedPattern.push(userChosenColor);
        console.log("Seçilenrenk "+userClickedPattern);
       animatePress(userChosenColor);
       checkAnswer(userClickedPattern.length-1);

    });

    function checkAnswer(index){
        if(gamePattern[index] === userClickedPattern[index]){
            console.log("success");
             
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                nextSequence();
                }, 1000);
            }
           
    
        } 
        else{
           
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            $("h1").after( `<h2>Your SCORE:${level} </h2>` );
            $("h2").addClass("game-over");
           
      
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 300);
      
            startOver();
        }
}
function nextSequence()
{
    userClickedPattern = [];
    level++;
   
    $("#level-title").text("LEVEL"+level);
var randomNumber=Math.floor(Math.random()*4);
randomChosenColour=buttonColors[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(80).fadeOut(80).fadeIn(80);
console.log("renkdizisi: "+gamePattern);

// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
}
function startOver(){
    started=false;
    level=0;
    gamePattern=[];
}

//ANIMATE FOR BOX
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    
    }, 100);
}


