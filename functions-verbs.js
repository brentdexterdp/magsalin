// Start of general use functions

function capFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// End of general use functions

// Start of Activity 1 Verbs functions

let numA1V = 0;
let numPrevA1V = 0;
let randStateA1V = 0;

function genA1V(increment){
    
    if (!randStateA1V){
        
        numA1V+=increment;

        if (numA1V < 0){
            numA1V = lengthVerbs-1;
        } else if (numA1V == lengthVerbs){
            numA1V = 0;
        }

    } else {
        
        numPrevA1V = numA1V;

        while (numA1V == numPrevA1V){
            numA1V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    document.getElementById("imageA1V").src = "images/verbs/" + verbs[numA1V].eng + ".jpg";
    document.getElementById("engTransA1V").innerHTML = capFirstLetter(verbs[numA1V].eng);
    document.getElementById("filTransA1V").innerHTML = capFirstLetter(verbs[numA1V].fil);
}

function hideA1V(){
    if (document.getElementById("filTransBoxA1V").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA1V").style.backgroundColor = "black";
        document.getElementById("filTransA1V").style.color = "black";
        document.getElementById("hideA1V").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA1V").style.backgroundColor = "white";                            
        document.getElementById("hideA1V").className = "btn btn-primary w-100";
    
    }
}

function randA1V(){
    
    randStateA1V = !randStateA1V;

    if (randStateA1V){
        document.getElementById("randA1V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA1V").className = "btn btn-primary w-100";
    }

}

// End of Activity 1 Verbs functions

// Start of Activity 2 Verbs functions

let numA2V = 0;
let numPrevA2V = 0;
let randStateA2V = 0;
let ansA2V;
let engToFilA2V = 1;
let givenA2V;
let corAnsA2V;

function genA2V(){
    
    if (!randStateA2V){
        
        numA2V+=1;

        if (numA2V == lengthVerbs){
            numA2V = 0;
        }

    } else {
        
        numPrevA2V = numA2V;

        while (numA2V == numPrevA2V){
            numA2V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    if (engToFilA2V){
        givenA2V = capFirstLetter(verbs[numA2V].eng);
    } else {
        givenA2V = capFirstLetter(verbs[numA2V].fil);
    }

    document.getElementById("givenA2V").innerHTML = givenA2V;
    document.getElementById("ansA2V").focus();
    document.getElementById("ansA2V").select();

}

function checkA2V(){

    ansA2V = document.getElementById("ansA2V").value.toLowerCase();
    
    if(engToFilA2V){
        corAnsA2V = verbs[numA2V].fil;
    } else {
        corAnsA2V = verbs[numA2V].eng;
    }

    if (ansA2V == corAnsA2V){

        document.getElementById("ansA2V").value = "";
        document.getElementById("ansA2V").placeholder = "Type your answer here";        
        genA2V();

    } else {

        document.getElementById("ansA2V").placeholder = "Wrong! Please try again";
        document.getElementById("ansA2V").value = "";

    }

    document.getElementById("ansA2V").focus();
    document.getElementById("ansA2V").select();

}

function randA2V(){

    randStateA2V = !randStateA2V;

    if (randStateA2V){
        document.getElementById("randA2V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA2V").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA2V").focus();
    document.getElementById("ansA2V").select();

}

function switchA2V(){

    engToFilA2V = !engToFilA2V;

    if(engToFilA2V){

        document.getElementById("givenMarkerA2V").innerHTML = "English Word";
        document.getElementById("answerMarkerA2V").innerHTML = "Filipino Translation";
        document.getElementById("switchA2V").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA2V").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA2V").innerHTML = "English Translation";
        document.getElementById("switchA2V").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA2V){
        document.getElementById("switchA2V").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA2V").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA2V").placeholder = "Type your answer here";        
    genA2V();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA2V = document.getElementById("ansA2V");

inputA2V.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA2V").click();
    }

})

// End of Activity 2 Verbs functions

// Start of Activity 3 Verbs functions

let numA3V = 0;
let numPrevA3V = 0;
let randStateA3V = 0;

function genA3V(increment){
    
    if (!randStateA3V){
        
        numA3V+=increment;

        if (numA3V < 0){
            numA3V = lengthVerbs-1;
        } else if (numA3V == lengthVerbs){
            numA3V = 0;
        }

    } else {
        
        numPrevA3V = numA3V;

        while (numA3V == numPrevA3V){
            numA3V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    document.getElementById("imageA3V").src = "images/verbs/" + verbs[numA3V].eng + ".jpg";
    document.getElementById("engTransA3V").innerHTML = capFirstLetter(verbs[numA3V].engPast);
    document.getElementById("filTransA3V").innerHTML = capFirstLetter(verbs[numA3V].filPast);
}

function hideA3V(){
    if (document.getElementById("filTransBoxA3V").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA3V").style.backgroundColor = "black";
        document.getElementById("filTransA3V").style.color = "black";
        document.getElementById("hideA3V").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA3V").style.backgroundColor = "white";                            
        document.getElementById("hideA3V").className = "btn btn-primary w-100";
    
    }
}

function randA3V(){
    
    randStateA3V = !randStateA3V;

    if (randStateA3V){
        document.getElementById("randA3V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA3V").className = "btn btn-primary w-100";
    }

}

// End of Activity 3 Verbs functions

// Start of Activity 4 Verbs functions

let numA4V = 0;
let numPrevA4V = 0;
let randStateA4V = 0;
let ansA4V;
let engToFilA4V = 1;
let givenA4V;
let corAnsA4V;

function genA4V(){
    
    if (!randStateA4V){
        
        numA4V+=1;

        if (numA4V == lengthVerbs){
            numA4V = 0;
        }

    } else {
        
        numPrevA4V = numA4V;

        while (numA4V == numPrevA4V){
            numA4V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    if (engToFilA4V){
        givenA4V = capFirstLetter(verbs[numA4V].engPast);
    } else {
        givenA4V = capFirstLetter(verbs[numA4V].filPast);
    }

    document.getElementById("givenA4V").innerHTML = givenA4V;
    document.getElementById("ansA4V").focus();
    document.getElementById("ansA4V").select();

}

function checkA4V(){

    ansA4V = document.getElementById("ansA4V").value.toLowerCase();
    
    if(engToFilA4V){
        corAnsA4V = verbs[numA4V].filPast;
    } else {
        corAnsA4V = verbs[numA4V].engPast;
    }

    if (ansA4V == corAnsA4V){

        document.getElementById("ansA4V").value = "";
        document.getElementById("ansA4V").placeholder = "Type your answer here";        
        genA4V();

    } else {

        document.getElementById("ansA4V").placeholder = "Wrong! Please try again";
        document.getElementById("ansA4V").value = "";

    }

    document.getElementById("ansA4V").focus();
    document.getElementById("ansA4V").select();

}

function randA4V(){

    randStateA4V = !randStateA4V;

    if (randStateA4V){
        document.getElementById("randA4V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA4V").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA4V").focus();
    document.getElementById("ansA4V").select();

}

function switchA4V(){

    engToFilA4V = !engToFilA4V;

    if(engToFilA4V){

        document.getElementById("givenMarkerA4V").innerHTML = "English Word";
        document.getElementById("answerMarkerA4V").innerHTML = "Filipino Translation";
        document.getElementById("switchA4V").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA4V").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA4V").innerHTML = "English Translation";
        document.getElementById("switchA4V").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA4V){
        document.getElementById("switchA4V").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA4V").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA4V").placeholder = "Type your answer here";        
    genA4V();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA4V = document.getElementById("ansA4V");

inputA4V.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA4V").click();
    }

})

// End of Activity 4 Verbs functions

// Start of Activity 5 Verbs functions

let numA5V = 0;
let numPrevA5V = 0;
let randStateA5V = 0;

function genA5V(increment){
    
    if (!randStateA5V){
        
        numA5V+=increment;

        if (numA5V < 0){
            numA5V = lengthVerbs-1;
        } else if (numA5V == lengthVerbs){
            numA5V = 0;
        }

    } else {
        
        numPrevA5V = numA5V;

        while (numA5V == numPrevA5V){
            numA5V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    document.getElementById("imageA5V").src = "images/verbs/" + verbs[numA5V].eng + ".jpg";
    document.getElementById("engTransA5V").innerHTML = capFirstLetter(verbs[numA5V].engPresent);
    document.getElementById("filTransA5V").innerHTML = capFirstLetter(verbs[numA5V].filPresent);
}

function hideA5V(){
    if (document.getElementById("filTransBoxA5V").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA5V").style.backgroundColor = "black";
        document.getElementById("filTransA5V").style.color = "black";
        document.getElementById("hideA5V").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA5V").style.backgroundColor = "white";                            
        document.getElementById("hideA5V").className = "btn btn-primary w-100";
    
    }
}

function randA5V(){
    
    randStateA5V = !randStateA5V;

    if (randStateA5V){
        document.getElementById("randA5V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA5V").className = "btn btn-primary w-100";
    }

}

// End of Activity 5 Verbs functions

// Start of Activity 6 Verbs functions

let numA6V = 0;
let numPrevA6V = 0;
let randStateA6V = 0;
let ansA6V;
let engToFilA6V = 1;
let givenA6V;
let corAnsA6V;

function genA6V(){
    
    if (!randStateA6V){
        
        numA6V+=1;

        if (numA6V == lengthVerbs){
            numA6V = 0;
        }

    } else {
        
        numPrevA6V = numA6V;

        while (numA6V == numPrevA6V){
            numA6V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    if (engToFilA6V){
        givenA6V = capFirstLetter(verbs[numA6V].engPresent);
    } else {
        givenA6V = capFirstLetter(verbs[numA6V].filPresent);
    }

    document.getElementById("givenA6V").innerHTML = givenA6V;
    document.getElementById("ansA6V").focus();
    document.getElementById("ansA6V").select();

}

function checkA6V(){

    ansA6V = document.getElementById("ansA6V").value.toLowerCase();
    
    if(engToFilA6V){
        corAnsA6V = verbs[numA6V].filPresent;
    } else {
        corAnsA6V = verbs[numA6V].engPresent;
    }

    if (ansA6V == corAnsA6V){

        document.getElementById("ansA6V").value = "";
        document.getElementById("ansA6V").placeholder = "Type your answer here";        
        genA6V();

    } else {

        document.getElementById("ansA6V").placeholder = "Wrong! Please try again";
        document.getElementById("ansA6V").value = "";

    }

    document.getElementById("ansA6V").focus();
    document.getElementById("ansA6V").select();

}

function randA6V(){

    randStateA6V = !randStateA6V;

    if (randStateA6V){
        document.getElementById("randA6V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA6V").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA6V").focus();
    document.getElementById("ansA6V").select();

}

function switchA6V(){

    engToFilA6V = !engToFilA6V;

    if(engToFilA6V){

        document.getElementById("givenMarkerA6V").innerHTML = "English Word";
        document.getElementById("answerMarkerA6V").innerHTML = "Filipino Translation";
        document.getElementById("switchA6V").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA6V").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA6V").innerHTML = "English Translation";
        document.getElementById("switchA6V").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA6V){
        document.getElementById("switchA6V").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA6V").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA6V").placeholder = "Type your answer here";        
    genA6V();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA6V = document.getElementById("ansA6V");

inputA6V.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA6V").click();
    }

})

// End of Activity 6 Verbs functions

// Start of Activity 7 Verbs functions

let numA7V = 0;
let numPrevA7V = 0;
let randStateA7V = 0;

function genA7V(increment){
    
    if (!randStateA7V){
        
        numA7V+=increment;

        if (numA7V < 0){
            numA7V = lengthVerbs-1;
        } else if (numA7V == lengthVerbs){
            numA7V = 0;
        }

    } else {
        
        numPrevA7V = numA7V;

        while (numA7V == numPrevA7V){
            numA7V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    document.getElementById("imageA7V").src = "images/verbs/" + verbs[numA7V].eng + ".jpg";
    document.getElementById("engTransA7V").innerHTML = capFirstLetter(verbs[numA7V].engFuture);
    document.getElementById("filTransA7V").innerHTML = capFirstLetter(verbs[numA7V].filFuture);
}

function hideA7V(){
    if (document.getElementById("filTransBoxA7V").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA7V").style.backgroundColor = "black";
        document.getElementById("filTransA7V").style.color = "black";
        document.getElementById("hideA7V").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA7V").style.backgroundColor = "white";                            
        document.getElementById("hideA7V").className = "btn btn-primary w-100";
    
    }
}

function randA7V(){
    
    randStateA7V = !randStateA7V;

    if (randStateA7V){
        document.getElementById("randA7V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA7V").className = "btn btn-primary w-100";
    }

}

// End of Activity 7 Verbs functions

// Start of Activity 8 Verbs functions

let numA8V = 0;
let numPrevA8V = 0;
let randStateA8V = 0;
let ansA8V;
let engToFilA8V = 1;
let givenA8V;
let corAnsA8V;

function genA8V(){
    
    if (!randStateA8V){
        
        numA8V+=1;

        if (numA8V == lengthVerbs){
            numA8V = 0;
        }

    } else {
        
        numPrevA8V = numA8V;

        while (numA8V == numPrevA8V){
            numA8V = Math.floor(Math.random() * lengthVerbs);
        }

    }

    if (engToFilA8V){
        givenA8V = capFirstLetter(verbs[numA8V].engFuture);
    } else {
        givenA8V = capFirstLetter(verbs[numA8V].filFuture);
    }

    document.getElementById("givenA8V").innerHTML = givenA8V;
    document.getElementById("ansA8V").focus();
    document.getElementById("ansA8V").select();

}

function checkA8V(){

    ansA8V = document.getElementById("ansA8V").value.toLowerCase();
    
    if(engToFilA8V){
        corAnsA8V = verbs[numA8V].filFuture;
    } else {
        corAnsA8V = verbs[numA8V].engFuture;
    }

    if (ansA8V == corAnsA8V){

        document.getElementById("ansA8V").value = "";
        document.getElementById("ansA8V").placeholder = "Type your answer here";        
        genA8V();

    } else {

        document.getElementById("ansA8V").placeholder = "Wrong! Please try again";
        document.getElementById("ansA8V").value = "";

    }

    document.getElementById("ansA8V").focus();
    document.getElementById("ansA8V").select();

}

function randA8V(){

    randStateA8V = !randStateA8V;

    if (randStateA8V){
        document.getElementById("randA8V").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA8V").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA8V").focus();
    document.getElementById("ansA8V").select();

}

function switchA8V(){

    engToFilA8V = !engToFilA8V;

    if(engToFilA8V){

        document.getElementById("givenMarkerA8V").innerHTML = "English Word";
        document.getElementById("answerMarkerA8V").innerHTML = "Filipino Translation";
        document.getElementById("switchA8V").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA8V").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA8V").innerHTML = "English Translation";
        document.getElementById("switchA8V").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA8V){
        document.getElementById("switchA8V").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA8V").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA8V").placeholder = "Type your answer here";        
    genA8V();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA8V = document.getElementById("ansA8V");

inputA8V.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA8V").click();
    }

})

// End of Activity 8 Verbs functions