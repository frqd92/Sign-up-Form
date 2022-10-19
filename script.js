


//let inputBox = document.querySelectorAll(".input-style");
let errorMessage = document.querySelectorAll(".error-message");
let checkInvalid = document.querySelector(".check-invalid");
let checkValid = document.querySelector(".check-valid");
let validity = false;


    document.addEventListener("focus",(e)=>{
        let className = e.target.className;
        let inputBox = document.querySelector("."+ className);
        if(className.includes("name")){
            if(className.includes("first")){
                names(inputBox, 0);
            }
            else{
                names(inputBox, 1);
            }
        };
    },true)



    function names (inputBox, index){
  
        inputBox.addEventListener("keydown", inputLogic);
        function inputLogic(e){
            errorMessage[index].textContent=""
            let key = e.key;
            inputBox.readOnly=false;
            let inputVal = inputBox.value;

            if(inputVal==" "){ //if first character is a space then it will automatically delete it
                inputVal = inputVal.slice(0,0);
                inputBox.value = inputVal;
            }
            else if(key.match(/[^a-zA-Z\s\-]/)){
            errorMessage[index].textContent="(only alphabetic characters)"
            inputBox.readOnly=true;
            setTimeout(()=>{
                errorMessage[index].textContent=""
            },2000)
            }
            console.log(inputVal);

        }
    
    }
















// window.onload= function checkValidity(){    //this is where you left off. It's sending both 0 and 1 because window loads both. You need to set an if statement that only passes that parameter if that specific input is focussed
//     inputBox[0].addEventListener("focus",inputString(0))
//     inputBox[1].addEventListener("focus",inputString(1))

// }


// function inputString (){

//     document.addEventListener("keydown", inputLogic)
//     function inputLogic(e){
    
//         errorMessage[index].textContent=""
//         let key = e.key;
//         inputBox[index].readOnly=false;
//         let inputVal = inputBox[index].value;
//         if(inputVal[index]==" "){ //if first character is a space then it will automatically delete it
//             inputVal = inputVal.slice(0,0);
//             inputBox[index].value = inputVal;
//         }
//         else if(key.match(/[^a-zA-Z\s\-]/)){

//             errorMessage[index].textContent="(only alphabetic characters)"
//             inputBox[index].readOnly=true;
//         }
//     }

// }





























// function textValidity(e){

//     //inputVal = inputBox[index].value;

//     // switch(inputVal){
//     //     case "": 
//     //     validity = false;
//     //     break;
        
//     //     case /[\d\W]/.test(inputVal) && inputVal:
//     //     validity = false;
//     //     break;

//     //     default:
//     //     validity = true;
//     //     break;
//     // }

//     inputString(e);

// }

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



