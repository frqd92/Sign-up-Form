let thisHover = document.querySelector(".this-hover");
let guitarShredGif = document.querySelector(".guitar-shred-gif");
thisHover.addEventListener("mouseover", ()=>{
    guitarShredGif.style.display="inline-block";

    thisHover.addEventListener("mouseleave", ()=>{
        guitarShredGif.style.display="none";
    })
})



