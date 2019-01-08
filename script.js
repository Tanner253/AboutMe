//5 yes or no questions, feeding off of eachother
//to submit, create a repo, and clone and send link to repo after master origin push

    var question1 = prompt("do i like steak?"); //declare variable and value

        console.log('do i like steak?:', question1); //console log the answer

    var  question2= prompt('do i play video Games?');  //declare variable and value


        console.log('do i play video games:', question2);//console log the answer


    var question3= prompt('do i like to go for walks?')  //declare variable and value


        console.log('do i like to go for walks:', question3 ) ;  //console log the answer


    var question4= prompt('do i like to ride bikes?')  //declare variable and value


        console.log('do i like to ride bikes:', question4 ) ;//console log the answer

        
    var question5 = prompt ('do i love coding?')  //declare variable and value

        console.log('do i like coding:', question5);//console log the answer





        if(question1.toUpperCase() === 'N' ||  question1.toUpperCase() === 'NO'){
    alert('you are correct! i do not like steak!');

}else {
    alert(' sorry! you are incorrect :( ');
}


if(question2.toLowerCase() === "y" || question2.toLowerCase() === 'yes' ) {
    alert('you are correct i Do play video games!');
} else {
    alert('you are incorrect :( ' );
}


if(question3.toUpperCase() === "N" || question3.toUpperCase() === 'NO'){
    alert('you are correct! i hate walks.')
}else{
    alert('you are incorrect :(')

}


if(question4.toUpperCase() === 'Y' || question4.toUpperCase() === 'YES'){
    alert('you are correct! i love riding my bike!')
}else{
    alert('sorry you are incorrect :( ')
}


if(question5.toUpperCase() === "Y" || question5.toUpperCase() === "YES"){
    alert('you are correct! i love coding')
}else{
    alert('sorry you are incorrect :( ')
    
}