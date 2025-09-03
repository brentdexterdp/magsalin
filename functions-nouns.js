// Start of general use functions

function capFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// End of general use functions

// Start of Activity 1 Nouns functions

let numA1N = 0;
let numPrevA1N = 0;
let randStateA1N = 0;

function genA1N(increment){
    
    if (!randStateA1N){
        
        numA1N+=increment;

        if (numA1N < 0){
            numA1N = lengthNouns-1;
        } else if (numA1N == lengthNouns){
            numA1N = 0;
        }

    } else {
        
        numPrevA1N = numA1N;

        while (numA1N == numPrevA1N){
            numA1N = Math.floor(Math.random() * lengthNouns);
        }

    }

    document.getElementById("imageA1N").src = "images/nouns/" + nouns[numA1N].eng + ".jpg";
    document.getElementById("engTransA1N").innerHTML = capFirstLetter(nouns[numA1N].eng);
    document.getElementById("filTransA1N").innerHTML = capFirstLetter(nouns[numA1N].fil);
}

function hideA1N(){
    if (document.getElementById("filTransBoxA1N").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA1N").style.backgroundColor = "black";
        document.getElementById("filTransA1N").style.color = "black";
        document.getElementById("hideA1N").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA1N").style.backgroundColor = "white";                            
        document.getElementById("hideA1N").className = "btn btn-primary w-100";
    
    }
}

function randA1N(){
    
    randStateA1N = !randStateA1N;

    if (randStateA1N){
        document.getElementById("randA1N").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA1N").className = "btn btn-primary w-100";
    }

}

// End of Activity 1 Nouns functions

// Start of Activity 2 Nouns functions

let numA2N = 0;
let numPrevA2N = 0;
let randStateA2N = 0;
let ansA2N;
let engToFilA2N = 1;
let givenA2N;
let corAnsA2N;

function genA2N(){
    
    if (!randStateA2N){
        
        numA2N+=1;

        if (numA2N == lengthNouns){
            numA2N = 0;
        }

    } else {
        
        numPrevA2N = numA2N;

        while (numA2N == numPrevA2N){
            numA2N = Math.floor(Math.random() * lengthNouns);
        }

    }

    if (engToFilA2N){
        givenA2N = capFirstLetter(nouns[numA2N].eng);
    } else {
        givenA2N = capFirstLetter(nouns[numA2N].fil);
    }

    document.getElementById("givenA2N").innerHTML = givenA2N;
    document.getElementById("ansA2N").focus();
    document.getElementById("ansA2N").select();

}

function checkA2N(){

    ansA2N = document.getElementById("ansA2N").value.toLowerCase();
    
    if(engToFilA2N){
        corAnsA2N = nouns[numA2N].fil;
    } else {
        corAnsA2N = nouns[numA2N].eng;
    }

    if (ansA2N == corAnsA2N){

        document.getElementById("ansA2N").value = "";
        document.getElementById("ansA2N").placeholder = "Type your answer here";        
        genA2N();

    } else {

        document.getElementById("ansA2N").placeholder = "Wrong! Please try again";
        document.getElementById("ansA2N").value = "";

    }

    document.getElementById("ansA2N").focus();
    document.getElementById("ansA2N").select();

}

function randA2N(){

    randStateA2N = !randStateA2N;

    if (randStateA2N){
        document.getElementById("randA2N").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA2N").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA2N").focus();
    document.getElementById("ansA2N").select();

}

function switchA2N(){

    engToFilA2N = !engToFilA2N;

    if(engToFilA2N){

        document.getElementById("givenMarkerA2N").innerHTML = "English Word";
        document.getElementById("answerMarkerA2N").innerHTML = "Filipino Translation";
        document.getElementById("switchA2N").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA2N").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA2N").innerHTML = "English Translation";
        document.getElementById("switchA2N").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA2N){
        document.getElementById("switchA2N").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA2N").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA2N").placeholder = "Type your answer here";        
    genA2N();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA2N = document.getElementById("ansA2N");

inputA2N.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA2N").click();
    }

})

// End of Activity 2 Nouns functions