
let themeColorChange = "Light";
labelThemeToggler = document.getElementById("labelThemeToggler");

exampleColorInput = document.getElementById("exampleColorInput");
exampleColorInput.addEventListener("change", ()=>{
    document.querySelector("body").style.backgroundColor = exampleColorInput.value;
})
function themeToggler(){
    flexSwitchCheckDefault = document.getElementById("flexSwitchCheckDefault");
    labelThemeToggler = document.getElementById("labelThemeToggler");
    if(themeColorChange === "Dark"){
        themeColorChange = "Light";
        labelThemeToggler.innerHTML = "Light Theme?";
        labelThemeToggler.style.color = "rgb(53, 48, 44)"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#formHeading").style.color = "rgb(53, 48, 44)";
    }
    else if(themeColorChange === "Light"){
        themeColorChange = "Dark";
        labelThemeToggler.innerHTML = "Dark Theme?";
        labelThemeToggler.style.color = "white"
        document.querySelector("body").style.backgroundColor = "rgb(53, 48, 44)";
        document.querySelector("#formHeading").style.color = "white";
    }
}