// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function(){
 var result=$("#input").val();
 result.toLowerCase();
 $("#userChoice").text(result);
 //the computer's choice
 var fortune= Math.random();

 if(fortune<1/3){
     $("#computerChoice").text("paper");
    if(result==="rock"){
    $("#result").html("User Wins")
    }
    if(result==="paper"){
    $("#result").html("It is a Draw")
    } 
    if(result==="scissors"){
    $("#result").html("You lose")
    } 
}
 else if (fortune>1/3 && fortune<2/3){
    $("#computerChoice").text("rock");
    if(result==="rock"){
        $("#result").html("It is a Draw");
    }
    if(result==="paper"){
        $("#result").html("User Wins");
    } 
    if(result==="scissors"){
        $("#result").html("computer wins");
    }  
 }
 else if (fortune>2/3){
    $("#computerChoice").text("scissors");
    if(result==="rock"){
        $("#result").html("User Wins");
    }
    if(result==="paper"){
        $("#result").html("Computer Wins");
    } 
    if(result==="scissors"){
        $("#result").html("It is a Draw");
    }  
}
 else{
      $("#computerChoice").text("redoo..you cheated");
       $("#result").html("Computer demands a rematch");
    };
});
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

