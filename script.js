
let errorMessage = document.querySelectorAll(".error-message");



document.addEventListener("focus",(e)=>{
    let idName = e.target.id;
    let inputBox = document.getElementById(idName);
    if(idName.includes("name")){
        if(idName.includes("first")){
            names(inputBox, 0);
        }
        else{
            names(inputBox, 1);
        }
    };
}, true)



function inputCheck(inputBox, index){
    console.log(index);
    let iconContainer = document.querySelectorAll(".icon-container");
    inputBox.addEventListener("change", ()=>{
        if(inputBox.checkValidity()===true){
            iconContainer[index].innerHTML="";
            let icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-check", "check-valid");
            console.log(iconContainer[index].children.length)
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

function names (inputBox, index){
    inputCheck(inputBox, index);
    inputBox.addEventListener("keydown", e=>{
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
        },1300);
        }
    },true);
}


let thisHover = document.querySelector(".this-hover");
let guitarShredGif = document.querySelector(".guitar-shred-gif");
thisHover.addEventListener("mouseover", ()=>{
    guitarShredGif.style.display="inline-block";

    thisHover.addEventListener("mouseleave", ()=>{
        guitarShredGif.style.display="none";
    })
})



