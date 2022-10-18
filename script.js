


let inputBox = document.querySelector(".input-style-name");
let errorMessage = document.querySelector(".error-message");
let checkInvalid = document.querySelector(".check-invalid");
let checkValid = document.querySelector(".check-valid");
let validity = false;

window.onload= function checkValidity(){
    inputBox.addEventListener("focus",textValidity)
}

function textValidity(e){
    inputVal = inputBox.value;

    //console.log("focus: " + inputVal)
    switch(inputVal){
        case "": 
        validity = false;
        break;
        
        case /[\d\W]/.test(inputVal) && inputVal:
        validity = false;
        break;

        default:
        validity = true;
        break;
    }

    inputString(e);



}
function inputString (e){
    document.addEventListener("keydown", inputLogic)
    function inputLogic(e){
        errorMessage.textContent=""
        let key = e.key;
        inputBox.readOnly=false;
        let inputVal = inputBox.value;
        if(inputVal[0]==" "){ //if first character is a space then it will automatically delete it
            inputVal = inputVal.slice(0,0);
            inputBox.value = inputVal;
        }
        else if(key.match(/[^a-zA-Z\s\-]/)){
            errorMessage.textContent="(only alphabetic characters)"
            inputBox.readOnly=true;
        }
    }
}






// function addRedCheck(){
//     let inputVal = inputBox.value;
//     if(inputVal.length === 0){
//         checkInvalid.classList.remove("check-invalid")
//         checkInvalid.classList.add("check-invalid-on")
//     }
//     else{
//         checkInvalid.classList.add("check-invalid")
//         checkInvalid.classList.remove("check-invalid-on")
//         console.log(checkInvalid.classList);
//     }
//     console.log(inputVal.length)
// }
// function removeRedCheck(){

// }

// inputBox.addEventListener("focus",addRedCheck);

// inputBox.addEventListener("keydown", addRedCheck)












let thisHover = document.querySelector(".this-hover");
let guitarShredGif = document.querySelector(".guitar-shred-gif");
thisHover.addEventListener("mouseover", ()=>{
    guitarShredGif.style.display="inline-block";

    thisHover.addEventListener("mouseleave", ()=>{
        guitarShredGif.style.display="none";
    })
})



