
let errorMessage = document.querySelectorAll(".error-message");
let passBox = document.querySelector(".pass-box");



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
        marketing();
    }
    if(idName.includes("phone")){
        validations(inputBox,3);
        if(inputBox.value===""){
            errorMessage[3].textContent="Min Length: 8"
        }
    }
    if(idName.includes("user-pass")){
        passBox.style.display="block";
    }
}, true)


function validations (inputBox, index){
    inputCheck(inputBox, index);
    passBox.style.display="none";
    inputBox.addEventListener("keydown", e=>{
        errorMessage[index].textContent=""
        let key = e.key;
        inputBox.readOnly=false;

        let inputVal = inputBox.value;
        if(inputVal==" "){ //if first character is a space then it will automatically delete it
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
            if(key==="Backspace" || key==="Delete"){} //no idea why this fixes the backspace not working bug.. but fuck it it works lol
            else if(key.match(/[^\d\s\-\(\)\+]/)){
                errorMessage[index].textContent="only numbers and ()+-  "
                inputBox.readOnly=true;
                setTimeout(()=>{
                    errorMessage[index].textContent=""
                },1300);
            }
        }
     
    });
}

// (key.match(/[^\b\d\s\-\(\)\+]/))

function inputCheck(inputBox, index){
    let iconContainer = document.querySelectorAll(".icon-container");
    inputBox.addEventListener("input", ()=>{
        if(inputBox.checkValidity()===true){
            iconContainer[index].innerHTML="";
            let icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-check", "check-valid");
            if(iconContainer[index].children.length<2){
                iconContainer[index].appendChild(icon);
            };
        }
        else{
            iconContainer[index].innerHTML="";
            let icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-x", "check-invalid");
            if(iconContainer[index].children.length<2){
                iconContainer[index].appendChild(icon);
            };
        }
    });
}
function marketing(){
    setTimeout(()=>{
        errorMessage[2].textContent="I will sell your data to third parties"
    },2300)
    setTimeout(()=>{
        errorMessage[2].textContent="";
    },3000);

}

let thisHover = document.querySelector(".this-hover");
let guitarShredGif = document.querySelector(".guitar-shred-gif");
thisHover.addEventListener("mouseover", ()=>{
    guitarShredGif.style.display="inline-block";
    thisHover.addEventListener("mouseleave", ()=>{
        guitarShredGif.style.display="none";
    })
})



