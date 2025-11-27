// Variabel 1 
const checkbox = document.getElementById("divStyle");

// Variabel 2 
const textFields = document.getElementsByClassName("textfield");

// Variabel 3 
const button = document.getElementById("button") //Hittar HTML element som har id=button och sparar som en variabel som heter button
button.addEventListener("click", function (e) { // Lyssnar efter funktion när knappen klickas, "click" = eventet vi lyssnar efter och e {...} är funktionen som ska köras. e står för event
    console.log("knappen klickades");
});

// Variabel 4
const outputDiv = document.querySelector("#divElement");