//5 yes or no questions, feeding off of eachother
//to submit, create a repo, and clone and send link to repo after master origin push
'use strict';


    var score = 0;
    var guessesLeft1 = 3;
    var guessesLeft2 = 5;


    var aboutMe = alert('I am an outgoing student, with expirience in construction work out of Tacoma washington out of wilson high school')
        console.log('about me' , aboutMe)

    var user = prompt('what is your name?')
             alert(user+  ' i will be asking you a series of short questions based on my life.')


    var question1 = prompt("do i like steak?"); //declare variable and value

        console.log('do i like steak?:', question1); //console log the answer

        if(question1.toUpperCase() === 'N' ||  question1.toUpperCase() === 'NO'){   //if variaable is equal to the string "N" || "NO" and make input caps
    alert(user + ' you are correct! i do not like steak!'); //if answer correctly then display correct alert
    score++
}else { //otherwise run you did not get it correct
    alert(' sorry!' + user + 'you are incorrect :( '); }


     var  question2= prompt(user + ' do i play video Games?');  //declare variable and value


        console.log('do i play video games:', question2);//console log the answer

        if(question2.toLowerCase() === "y" || question2.toLowerCase() === 'yes' ) { //if input is equal to the string "Y " || "YES" make input caps.
    alert(user + ' you are correct i Do play video games!'); 
    //if correct then run this code
    score++
} else { //otherwise run this code
    alert('you are incorrect :( ' );
}


     var question3= prompt('do i like to go for walks?')  //declare variable and value


        console.log('do i like to go for walks:', question3 ) ;  //console log the answer

        if(question3.toUpperCase() === "N" || question3.toUpperCase() === 'NO'){ //if input is equal to the string "N" || "NO" make input caps

        alert(user + ' you are correct! i hate walks.') //if correct then run this code
        score++
    } else{ //otherwise run this code
        alert('you are incorrect :(') }
    



     var question4= prompt('do i like to ride bikes?')  //declare variable and value


        console.log('do i like to ride bikes:', question4 ) ;//console log the answer



            
    if(question4.toUpperCase() === 'Y' || question4.toUpperCase() === 'YES'){ //check if input is equal to the string "Y" || "YES" make input caps
    alert(user + ' you are correct! i love riding my bike!') //if correct run this code 
        score++
}else{ //otherwise run this code
    alert('sorry you are incorrect :( ')
}


    var question5 = prompt ('do i love coding?')  //declare variable and value

        console.log('do i like coding:', question5);//console log the answer

        
    if(question5.toUpperCase() === "Y" || question5.toUpperCase() === "YES"){ //check if the input is equal to the string "Y" || "YES"
    alert(user + ' you are correct! i love coding') //if correct run this code
    score++

}else{ //otherwise run this code
    alert('sorry you are incorrect :( ')
    
}       



var randomNum = Math.floor(Math.random() * 21); //assign random number to randomNum


        

        console.log("answer to math.random", randomNum); //log answer to random num

    while(guessesLeft1 > 0 ){
        for (var i = 4; i>0 ; i--) {
var question6 = parseInt(prompt('Hey ' + user +' What is my favorite number?')) //ask question


    console.log('what is my favorite number', question6) //log answer

   
    if (randomNum < question6){
        alert('OOPS! ' + user + ', you guessed too high!' + ' number of guesses left: ' + guessesLeft1) //if input is higher than randomNum, display this
        guessesLeft1--
    }else if (randomNum > question6){
    
        alert('OOPS! ' + user + ', you guessed too low!' +' number of guesses left: ' + guessesLeft1) // if input is lower than randomNum, display this
        guessesLeft1--
    }else if (question6 === randomNum){
        alert('WOW! ' + user + ' i cannot believe you guessed my favorite number!') //if you got the answer right display this
        var i = 0;
        score++
    } } }

    while(guessesLeft2 > 0){
 var sports = ['Soccer', 'Wrestling', 'Baseball', 'Basketball', 'Tennis' , 'hockey', 'badmitten', 'table tennis']
    for (var i = 6 ; i > 0 ; i--){
    var question7 = prompt(' which of the following sports have i played? Soccer, Wrestling, Baseball, Basketball, Tennis')
    
    console.log("which of the sports do i play" , question7); 


if (question7.toLowerCase() === 'soccer' || question7.toLowerCase() === 'wrestling'){
    alert(user + ' you are correct! (correct answeres are Soccer and Wrestling')
     var i = 0;
     score++;
}else {
    alert(user + ' you are not correct! ' + 'you have ' + guessesLeft2 +' guesses left ' )
    guessesLeft2--
    
}
    }
}
    console.log("which of the sports do i play" , question7); 

    alert('congratulations! ' + user + ' you got '     +score       +     ' answers correct')
