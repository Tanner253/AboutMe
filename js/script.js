/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
//5 yes or no questions, feeding off of eachother
//to submit, create a repo, and clone and send link to repo after master origin push
"use strict";

var score = 0; //keeps track of how many answers are correct
var guessesLeft1 = 4; //keep track of how many guesses are left for question 6
var guessesLeft2 = 6; //keep track of how many guesses are left for question 7

alert("I am an outgoing student, with expirience in construction work out of Tacoma washington out of wilson high school");

var user = prompt("what is your name?");
alert(user + " I will be asking you a series of short questions based on my life.");

function questionOne() {
    var question1 = prompt("Do I like steak?"); //declare variable and value
    console.log("Do I like steak?:", question1); //console log the answer

    if(question1.toUpperCase() === "N" || question1.toUpperCase() === "NO") { //if variaable is equal to the string "N" || "NO" and make input caps
        alert(user + " you are correct! I do not like steak!"); //if answer correctly then display correct alert
        score++;
    } else { //otherwise run you did not get it correct
    alert("Sorry! " + user + " you are incorrect :( ");
    }
}

function questionTwo() {
    var question2= prompt(user + " do i play video Games?"); //declare variable and value
    console.log("do i play video games:", question2);//console log the answer

    if(question2.toLowerCase() === "y" || question2.toLowerCase() === "yes" ) { //if input is equal to the string "Y" || "YES" make input lower case.
        alert(user + " you are correct I do play video games!");
        //if correct then run this code
        score++;
    } else { //otherwise run this code
        alert("you are incorrect :( ");
    }
}

function questionThree() {
     var question3= prompt("do i like to go for walks?"); //declare variable and value


        console.log("do i like to go for walks:", question3 ) ; //console log the answer

            if(question3.toUpperCase() === "N" || question3.toUpperCase() === "NO"){ //if input is equal to the string "N" || "NO" make input caps

            alert(user + " you are correct! i hate walks."); //if correct then run this code
            score++;
            } else{ //otherwise run this code
            alert("you are incorrect :("); 
        }
    }


function questionFour() {
    var question4= prompt("do i like to ride bikes?"); //declare variable and value

     console.log("do i like to ride bikes:", question4 ) ;//console log the answer

        if(question4.toUpperCase() === "Y" || question4.toUpperCase() === "YES"){ //check if input is equal to the string "Y" || "YES" make input caps
        alert(user + " you are correct! i love riding my bike!"); //if correct run this code 
        score++;
        }else{ //otherwise run this code
    alert("sorry you are incorrect :( ");
    }
}

function questionFive() {
    var question5 = prompt ("do i love coding?"); //declare variable and value
     console.log("do i like coding:", question5);//console log the answer

        
         if(question5.toUpperCase() === "Y" || question5.toUpperCase() === "YES"){ //check if the input is equal to the string "Y" || "YES"

         alert(user + " you are correct! i love coding"); //if correct run this code
         score++;

        }else{ //otherwise run this code
    alert("sorry you are incorrect :( ");
    
    }
}       



var randomNum = Math.floor(Math.random() * 21); //assign random number to randomNum
        console.log("answer to math.random", randomNum); //log answer to random num

function questionSix() {
    while(guessesLeft1 > 0 ){
        for (var i = 4; i>0 ; i--) {

            var question6 = parseInt(prompt("Hey " + user +" What is my favorite number?")); //ask question

            console.log("what is my favorite number", question6); //log answer

   
            if (randomNum < question6){
                guessesLeft1--;

                alert("OOPS! " + user + ", you guessed too high!" + " number of guesses left: " + guessesLeft1);
                //if input is higher than randomNum, display this
            }else if (randomNum > question6){
                guessesLeft1--;

                alert("OOPS! " + user + ", you guessed too low!" +" number of guesses left: " + guessesLeft1); // if input is lower than randomNum, display this
            
            }else if (question6 === randomNum){
                    score++;
                    alert("WOW! " + user + " i cannot believe you guessed my favorite number!"); //if you got the answer right display this
                
            break; //end loop
            } 
        } 
    }
}
function questionSeven() {
    // while(guessesLeft2 > 0){ //if condition is truthy then run code again, until false.
//  var sports = ['Soccer', 'Wrestling', 'Baseball', 'Basketball', 'Tennis' , 'hockey', 'badmitten', 'table tennis']
    for (var i = 6 ; i > 0 ; i--){ //i is equal to 6, as long as i is greater than 0, -1 from i

    // }

         var question7 = prompt(" which of the following sports have i played? Soccer, Wrestling, Baseball, Basketball, Tennis , Hockey , Badmitten, Table tennis"); //take input
    
         console.log("which of the sports do i play" , question7); //log question and input 

 
         if (question7.toLowerCase() === "soccer" || question7.toLowerCase() === "wrestling"){ 
         alert(user + " you are correct! (correct answeres are Soccer and Wrestling"); //if correct run this line
         score++; //incriment score by one
        
        }else { //otherwise run this code
        guessesLeft2--; //-1 from guesses

        alert(user + " you are not correct! " + "you have " + guessesLeft2 +" guesses left " ); // prompt how many guesses are left if incorrect
    
        }
        console.log("which of the sports do i play" , question7); //log ans and value
    }
}


    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
    
    alert("congratulations! " + user + " you got " + score + " answers correct out of the possible 7. Better luck next time! :D "); //end
