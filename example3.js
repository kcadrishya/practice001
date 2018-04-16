function printHelloWorld(){
    let userInput=prompt("Please enter a number between 1 & 10");
    if(userInput>=1 && userInput<=10){
        for(var i=1;i<=userInput;i++)
        document.write("<br> " + i + ". That message has been written. <br>");
         
    }
    else{
        console.log("You entered: "+ userInput +". Please enter a number between 1 & 10!");
    }
}