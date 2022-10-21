
//bug: if both passwords match but you  highlight input box and delete it doesn't update validity background to not green
let errorMessage = document.querySelectorAll(".error-message");
let passBox = document.querySelector(".pass-box");
let passwordStorage ="";
let confirmInput = document.getElementById("user-pass-confirm");

document.addEventListener("focus",(e)=>{
    let idName = e.target.id;
    let inputBox = document.getElementById(idName);
    if(idName.includes("name")){
        if(idName.includes("first")){
            validations(inputBox, 0);
        }
        if(idName.includes("last")){
            validations(inputBox, 1);
        }
    };
    if(idName.includes("email")){
        validations(inputBox, 2);
    }
    if(idName.includes("phone")){
        validations(inputBox,3);
        if(inputBox.value===""){
            errorMessage[3].textContent="Min Length: 8"
        }
    }
    if(idName.includes("user-pass")){ //shows password box when password inputs are focussed
        passBox.style.display="block";
        if(idName.includes("confirm")){
            passwordConfirm(inputBox, 5);
            inputBox.onpaste = e => e.preventDefault(); //prevents copy pasting into password fields
            inputBox.addEventListener("click",()=>{passBox.style.display="block";})
        }
        else{
            passwordChecker(inputBox, 4);
            inputBox.onpaste = e => e.preventDefault();
            inputBox.addEventListener("click",()=>{passBox.style.display="block";})
        }
    }
    else{ //removes password box when focussing outside of password inputs
        passBox.style.display="none";
    }

},true)


function validations (inputBox, index){ //to check validity as user types
    inputCheck(inputBox, index); //updates green and red icon as user is typing
    inputBox.addEventListener("change", ()=>{ //if last character is whitespace when focus changes it will automatically delete it.
        let inputVal = inputBox.value;
        if(inputVal[inputVal.length-1]===" "){
            inputBox.value=inputVal.trim();
        }
    })
    inputBox.addEventListener("keydown", e=>{
        errorMessage[index].textContent=""
        let key = e.key;
        inputBox.readOnly=false;
        let inputVal = inputBox.value;
        if(inputVal[0]==" "){ //if first character is a space then it will automatically delete it
            inputVal = inputVal.slice(0,0);
            inputBox.value = inputVal;
        }
       
        if(index<2){ //if first or last names are selected
            if(key.match(/[^a-zA-Z\s\-]/)){
                errorMessage[index].textContent="(only alphabetic characters)"
                inputBox.readOnly=true;
                setTimeout(()=>{
                errorMessage[index].textContent=""
                },1300);
            }
        }
        if(index===3){ //if user phone input is selected
            if(key==="Backspace" || key==="Delete" || key==="Tab"){} //no idea why this fixes the backspace not working bug.. but fuck it it works lol
            else if(key.match(/[^\d\s\-\(\)\+\t]/)){
                errorMessage[index].textContent="only numbers and ()+-  "
                inputBox.readOnly=true;
                setTimeout(()=>{
                    errorMessage[index].textContent=""
                },1300);
            }
        }
    });
}
let iconContainer = document.querySelectorAll(".icon-container");
function inputCheck(inputBox, index){ //red and green check icons
    inputBox.addEventListener("input", checker, true);
        function checker(){
            if(inputBox.checkValidity()===true){
                iconContainer[index].innerHTML="";
                let icon = document.createElement("i");
                icon.classList.add("fa-solid", "fa-check", "check-valid");
                if(iconContainer[index].children.length<2){
                    iconContainer[index].appendChild(icon);
                };
            }
            else if(inputBox.checkValidity()===false){
                iconContainer[index].innerHTML="";
                let icon = document.createElement("i");
                icon.classList.add("fa-solid", "fa-x", "check-invalid");
                if(iconContainer[index].children.length<2){
                    iconContainer[index].appendChild(icon);
                };
            }
        }
}

function passwordConfirm(){ //checks if passwords match as user types from Password Confirm field
    confirmInput.addEventListener("input", (e)=>{
        let confirmString = confirmInput.value;
        if(confirmString===passwordStorage && confirmString.length>0){
            li[5].classList.add("li-valid");
            passwordChecks(true);
        }
        else{
            li[5].classList.remove("li-valid");
            passwordChecks(false);
        }
    })
}

function passwordChecks(match){ //adds green checks to password boxes when all the requirements are met
    let sum= 0;
    for(let x=0; x<li.length-2;x++){
        sum += li[x].classList.length;
    }    
    if(sum===10 && iconContainer[4].childNodes.length==1){
        iconContainer[4].innerHTML="";
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-check", "check-valid");
        iconContainer[4].appendChild(icon);
        }
    if (sum<10){
        iconContainer[4].innerHTML="";
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-x", "check-invalid");
        iconContainer[4].appendChild(icon);
    }
    if(match){
        iconContainer[5].innerHTML="";
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-check", "check-valid");
        iconContainer[5].appendChild(icon);
    }
    else if(!match && confirmInput.value){
        iconContainer[5].innerHTML="";
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-x", "check-invalid");
        iconContainer[5].appendChild(icon);
    }
}

let li = document.querySelectorAll(".list");
function passwordChecker(inputBox, index){//checks password validity as user is typing... Could probably have written this cleaner 
    passwordHover(inputBox);
    inputBox.addEventListener("keydown", (e)=>{
        let key = e.key;
        if(inputBox.value.length>5){ //length
            li[0].classList.add("li-valid");
        }
        if(key.match(/^[A-Z]$/)){ //uppercase
            li[1].classList.add("li-valid");
         }
        if(key.match(/^[a-z]$/)){ //lowercase
           li[2].classList.add("li-valid");
        }
        if(key.match(/^[\W]$/)){ //characters
            li[3].classList.add("li-valid");
         }
        if(key.match(/^[\d]$/)){ //numbers
            li[4].classList.add("li-valid");
         }

        if(inputBox.value === confirmInput){
            li[5].classList.add("li-valid");
        }
        if(key==="Backspace"){
            let inputVal = inputBox.value;
            inputVal=inputVal.slice(0,-1);
            checker(inputVal);
        }
        inputBox.addEventListener("input",()=>{ //checks if passwords match as user types from Password field
            passwordStorage=inputBox.value;
            passwordChecks()
            if(inputBox.value === confirmInput.value && (confirmInput.value!=="" && inputBox.value !=="")){
                li[5].classList.add("li-valid");
            }
            else{
                li[5].classList.remove("li-valid");
            }
        })
    })
    function checker(inputVal){ //so it updates validity if user uses backspace
        if(inputVal.length<7){ //length
            li[0].classList.remove("li-valid");
        }
        if(!inputVal.match(/[A-Z]/)){//uppercase
            li[1].classList.remove("li-valid");
        }
        if(!inputVal.match(/[a-z]/)){//lowercase
            li[2].classList.remove("li-valid");
        }
        if(!inputVal.match(/[\W]/)){ //characters
            li[3].classList.remove("li-valid");
        }
        if(!inputVal.match(/[\d]/)){ //characters
            li[4].classList.remove("li-valid");
        }
    }
}

function passwordHover(inputBox){ //hover on this and reveal pass
    let passHover = document.getElementById("pass-reveal");
    passHover.addEventListener("mouseover", ()=>{
        inputBox.type="text";
        confirmInput.type="text";
        passHover.addEventListener("mouseleave",()=>{
            inputBox.type="password";
            confirmInput.type="password";
        })
    })
}

document.addEventListener("mousedown", (e)=>{ //removes password box when clicking outside of password inputs
    if(e.target.id!=="user-pass" || e.target.id!=="user-pass-confirm"){
        passBox.style.display="none";
    }
});

let thisHover = document.querySelector(".this-hover"); //guitar gif thing
let guitarShredGif = document.querySelector(".guitar-shred-gif");
thisHover.addEventListener("mouseover", ()=>{
    guitarShredGif.style.display="inline-block";
    thisHover.addEventListener("mouseleave", ()=>{
        guitarShredGif.style.display="none";
    })
})



