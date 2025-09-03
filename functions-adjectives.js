// Start of general use functions

function capFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// End of general use functions

// Start of Activity 1 Adjectives functions

let numA1A = 0;
let numPrevA1A = 0;
let randStateA1A = 0;

function genA1A(increment){
    
    if (!randStateA1A){
        
        numA1A+=increment;

        if (numA1A < 0){
            numA1A = lengthAdjectives-1;
        } else if (numA1A == lengthAdjectives){
            numA1A = 0;
        }

    } else {
        
        numPrevA1A = numA1A;

        while (numA1A == numPrevA1A){
            numA1A = Math.floor(Math.random() * lengthAdjectives);
        }

    }

    document.getElementById("imageA1A").src = "images/adjectives/" + adjectives[numA1A].eng + ".jpg";
    document.getElementById("engTransA1A").innerHTML = capFirstLetter(adjectives[numA1A].eng);
    document.getElementById("filTransA1A").innerHTML = capFirstLetter(adjectives[numA1A].fil);
}

function hideA1A(){
    if (document.getElementById("filTransBoxA1A").style.backgroundColor == "white"){
       
        document.getElementById("filTransBoxA1A").style.backgroundColor = "black";
        document.getElementById("filTransA1A").style.color = "black";
        document.getElementById("hideA1A").className = "btn btn-primary w-100 active";
    
    } else {
        
        document.getElementById("filTransBoxA1A").style.backgroundColor = "white";                            
        document.getElementById("hideA1A").className = "btn btn-primary w-100";
    
    }
}

function randA1A(){
    
    randStateA1A = !randStateA1A;

    if (randStateA1A){
        document.getElementById("randA1A").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA1A").className = "btn btn-primary w-100";
    }

}

// End of Activity 1 Adjectives functions

// Start of Activity 2 Adjectives functions

let numA2A = 0;
let numPrevA2A = 0;
let randStateA2A = 0;
let ansA2A;
let engToFilA2A = 1;
let givenA2A;
let corAnsA2A;

function genA2A(){
    
    if (!randStateA2A){
        
        numA2A+=1;

        if (numA2A == lengthAdjectives){
            numA2A = 0;
        }

    } else {
        
        numPrevA2A = numA2A;

        while (numA2A == numPrevA2A){
            numA2A = Math.floor(Math.random() * lengthAdjectives);
        }

    }

    if (engToFilA2A){
        givenA2A = capFirstLetter(adjectives[numA2A].eng);
    } else {
        givenA2A = capFirstLetter(adjectives[numA2A].fil);
    }

    document.getElementById("givenA2A").innerHTML = givenA2A;
    document.getElementById("ansA2A").focus();
    document.getElementById("ansA2A").select();

}

function checkA2A(){

    ansA2A = document.getElementById("ansA2A").value.toLowerCase();
    
    if(engToFilA2A){
        corAnsA2A = adjectives[numA2A].fil;
    } else {
        corAnsA2A = adjectives[numA2A].eng;
    }

    if (ansA2A == corAnsA2A){

        document.getElementById("ansA2A").value = "";
        document.getElementById("ansA2A").placeholder = "Type your answer here";        
        genA2A();

    } else {

        document.getElementById("ansA2A").placeholder = "Wrong! Please try again";
        document.getElementById("ansA2A").value = "";

    }

    document.getElementById("ansA2A").focus();
    document.getElementById("ansA2A").select();

}

function randA2A(){

    randStateA2A = !randStateA2A;

    if (randStateA2A){
        document.getElementById("randA2A").className = "btn btn-primary w-100 active";
    } else {
        document.getElementById("randA2A").className = "btn btn-primary w-100";
    }

    document.getElementById("ansA2A").focus();
    document.getElementById("ansA2A").select();

}

function switchA2A(){

    engToFilA2A = !engToFilA2A;

    if(engToFilA2A){

        document.getElementById("givenMarkerA2A").innerHTML = "English Word";
        document.getElementById("answerMarkerA2A").innerHTML = "Filipino Translation";
        document.getElementById("switchA2A").title = "Switch to Filipino-to-English";        

    } else {

        document.getElementById("givenMarkerA2A").innerHTML = "Filipino Word";
        document.getElementById("answerMarkerA2A").innerHTML = "English Translation";
        document.getElementById("switchA2A").title = "Switch to English-to-Filipino";                

    }

    if (engToFilA2A){
        document.getElementById("switchA2A").className = "btn btn-primary w-100";
    } else {
        document.getElementById("switchA2A").className = "btn btn-primary w-100 active";
    }

    document.getElementById("ansA2A").placeholder = "Type your answer here";        
    genA2A();

}

// Submit on "Enter"
// I got this from W3Schools

let inputA2A = document.getElementById("ansA2A");

inputA2A.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("checkA2A").click();
    }

})

// End of Activity 2 Adjectives functions

// BELOW IS THE UNFINISHED CODE FOR THE NUMBER TRANSLATOR

// // Start of Activity 3 Adjectives functions

// let givenA3A;
// let numTransAnsA3A;
// let onesTensBasicTransA3A = ["filler", "isa", "dalawa", "tatlo", "apat", "lima", "anim", "pito", "walo", "siyam", "sampu", "labingisa", "labindalawa", "labintatlo", "labingapat", "labinlima", "labinganim", "labinpito", "labinwalo", "labinsiya"];
// let tensTransA3A = ["dalawmpu", "tatlumpu", "apatnapu", "limampu", "animnapu", "pitumpu", "walumpu", "siyamnapu"];

// function numTransA3A(toBeTransA3A){

//     thoPartA3A = toBeTransA3A - toBeTransA3A % 1000;
//     hunPartA3A = toBeTransA3A - toBeTransA3A % 100 - thoPartA3A;
//     tenPartA3A = toBeTransA3A - toBeTransA3A % 10 - thoPartA3A - hunPartA3A;
//     onePartA3A = toBeTransA3A - toBeTransA3A % 1 - thoPartA3A - hunPartA3A - tenPartA3A;

//     function numTransTens(toBeTransTensA3A){

//         if (toBeTransTensA3A < 20){
//             return onesTensBasicTransA3A[toBeTransTensA3A];
//         } else {
//             return tensTransA3A[toBeTransTensA3A]
//         }

//     }

//     numTransAnsA3A = String(thoPartA3A) + " " + String(hunPartA3A) + " " + String(tenPartA3A) + " " + String(onePartA3A);

//     return numTransAnsA3A;

// }

// function genA3A(){

//     givenA3A = parseInt(document.getElementById("givenA3A").value);
//     document.getElementById("ansA3A").innerHTML = numTransA3A(givenA3A);

//     document.getElementById("givenA3A").focus();
//     document.getElementById("givenA3A").select();

// }

// // Submit on "Enter"
// // I got this from W3Schools

// let inputA3A = document.getElementById("givenA3A");

// inputA3A.addEventListener("keypress", function(event){

//     if (event.key === "Enter"){
//         event.preventDefault();
//         document.getElementById("genA3A").click();
//     }

// })

// // End of Activity 3 Adjectives functions