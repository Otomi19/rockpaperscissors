// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function(){
 var result=$("#input").val();
 $("#userChoice").text(result);
 //the computer's choice
 var fortune= Math.random();
 if(fortune>.65&&fortune<.7){
     $("#computerChoice").text("paper");
 }
 else if (fortune>.39 && fortune<.65){
    $("#computerChoice").text("rock");
 }
 else if (fortune>.01 && fortune<.39){
    $("#computerChoice").text("scissors");
 }
 else{
      $("#computerChoice").text("redoo..you cheated");
 };

});
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

