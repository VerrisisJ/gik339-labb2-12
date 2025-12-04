// Uppgift 4

// Variabel 1 
const checkbox = document.getElementById("divStyle");

// Variabel 2 
const textFields = document.getElementsByClassName("textfield");

// Variabel 3 
const button = document.getElementById("button") //Hittar HTML element som har id=button och sparar som en variabel som heter button

// Variabel 4
const outputDiv = document.querySelector("#divElement");

//Uppgift 5

function handleDiv(e) {
    console.log(e.target); // Loggar vilket element som triggar funktionen

    const textBox = e.target.name; // Hämtar texten som står i name-attributet på det inputfält som triggat eventet

    if (textBox === "content") {
    outputDiv.innerHTML = e.target.value;
    }
}

//Uppgift 6

checkbox.addEventListener("change", function (e) {    // Lyssnar när checkboxen ändras
    const colorChange = textFields[0].value;          // Hämtar värdet från första textfältet som är "color"
    outputDiv.style.backgroundColor = colorChange;    // Ändrar bakgrundsfärgen på div elementet
});

textFields[0].addEventListener("input", handleDiv); //Color textfield
textFields[1].addEventListener("input", handleDiv); //content textfield

button.addEventListener("click", function () { 
    outputDiv.remove();
});