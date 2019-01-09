//5 yes or no questions, feeding off of eachother
//to submit, create a repo, and clone and send link to repo after master origin push
'use strict';
    var aboutMe = prompt('I am an outgoing student, with expirience in construction work out of Tacoma washington out of wilson high school')
        console.log('about me' , aboutMe)

        var user = prompt('what is your name?')


        alert(user+  'i will be asking you a sereies of short questions based on my life.')


    var question1 = prompt("do i like steak?"); //declare variable and value

        console.log('do i like steak?:', question1); //console log the answer

        if(question1.toUpperCase() === 'N' ||  question1.toUpperCase() === 'NO'){   //if variaable is equal to the string "N" || "NO" and make input caps
    alert('you are correct! i do not like steak!'); //if answer correctly then display correct alert

}else { //otherwise run you did not get it correct
    alert(' sorry! you are incorrect :( '); }






    var  question2= prompt('do i play video Games?');  //declare variable and value


        console.log('do i play video games:', question2);//console log the answer

        if(question2.toLowerCase() === "y" || question2.toLowerCase() === 'yes' ) { //if input is equal to the string "Y " || "YES" make input caps.
    alert('you are correct i Do play video games!'); //if correct then run this code
} else { //otherwise run this code
    alert('you are incorrect :( ' );
}





    var question3= prompt('do i like to go for walks?')  //declare variable and value


        console.log('do i like to go for walks:', question3 ) ;  //console log the answer

        if(question3.toUpperCase() === "N" || question3.toUpperCase() === 'NO'){ //if input is equal to the string "N" || "NO" make input caps

        alert('you are correct! i hate walks.') //if correct then run this code
    
    } else{ //otherwise run this code
        alert('you are incorrect :(') }
    







    var question4= prompt('do i like to ride bikes?')  //declare variable and value


        console.log('do i like to ride bikes:', question4 ) ;//console log the answer



            
    if(question4.toUpperCase() === 'Y' || question4.toUpperCase() === 'YES'){ //check if input is equal to the string "Y" || "YES" make input caps
    alert('you are correct! i love riding my bike!') //if correct run this code 
}else{ //otherwise run this code
    alert('sorry you are incorrect :( ')
}



        
    var question5 = prompt ('do i love coding?')  //declare variable and value

        console.log('do i like coding:', question5);//console log the answer

        
    if(question5.toUpperCase() === "Y" || question5.toUpperCase() === "YES"){ //check if the input is equal to the string "Y" || "YES"
    alert('you are correct! i love coding') //if correct run this code

}else{ //otherwise run this code
    alert('sorry you are incorrect :( ')
    
}



    

//         if(question1.toUpperCase() === 'N' ||  question1.toUpperCase() === 'NO'){   //if variaable is equal to the string "N" || "NO" and make input caps
//     alert('you are correct! i do not like steak!'); //if answer correctly then display correct alert

// }else { //otherwise run you did not get it correct
//     alert(' sorry! you are incorrect :( ');
// }




//     if(question2.toLowerCase() === "y" || question2.toLowerCase() === 'yes' ) { //if input is equal to the string "Y " || "YES" make input caps.
//     alert('you are correct i Do play video games!'); //if correct then run this code
// } else { //otherwise run this code
//     alert('you are incorrect :( ' );
// }


//     if(question3.toUpperCase() === "N" || question3.toUpperCase() === 'NO'){ //if input is equal to the string "N" || "NO" make input caps

//     alert('you are correct! i hate walks.') //if correct then run this code

// } else{ //otherwise run this code
//     alert('you are incorrect :(')

// }


//     if(question4.toUpperCase() === 'Y' || question4.toUpperCase() === 'YES'){ //check if input is equal to the string "Y" || "YES" make input caps
//     alert('you are correct! i love riding my bike!') //if correct run this code 
// }else{ //otherwise run this code
//     alert('sorry you are incorrect :( ')
// }



//     if(question5.toUpperCase() === "Y" || question5.toUpperCase() === "YES"){ //check if the input is equal to the string "Y" || "YES"
//     alert('you are correct! i love coding') //if correct run this code

// }else{ //otherwise run this code
//     alert('sorry you are incorrect :( ')
    
// 
