// let EOP = document.getElementById ("EOP");
// let Pin = document.getElementById ("Pin");
let submitBTN = document.getElementById ("submitBTN");

let firstNormContainer = document.getElementById ("firstNormContainer");
let firstErrorContainer = document.getElementById ("firstErrorContainer");
let PinNormContainer = document.getElementById ("PinNormContainer");
let PinErrorContainer = document.getElementById ("PinErrorContainer");
let firstNorm = document.getElementById ("firstNorm");
let firstError = document.getElementById ("firstError");
let PinNorm = document.getElementById ("PinNorm");
let PinError = document.getElementById ("PinError");



submitBTN.addEventListener ("click", function(e) {    
    if (firstError.value != "olumidejohndt@gmail.com" || firstError.value != "09055058650" ) {
        firstNormContainer.style.display = "none";
        firstErrorContainer.style.display = "block";
    } 

    if (firstError.value == "olumidejohndt@gmail.com" ||  firstError.value == "09055058650") {
        firstNormContainer.style.display = "block";
        firstErrorContainer.style.display = "none";
    } 

    if (PinError.value != "1996" ) {
        PinNormContainer.style.display = "none";
        PinErrorContainer.style.display = "block";
    } 

    if (PinError.value == "1996") {
        PinNormContainer.style.display = "block";
        PinErrorContainer.style.display = "none";
    } 

    if (firstNorm.value == "olumidejohndt@gmail.com" ||  firstNorm.value == "09055058650" && PinNorm.value == "1996") {
        firstNormContainer.style.display = "block";
        firstErrorContainer.style.display = "none";
        PinNormContainer.style.display = "block";
        PinErrorContainer.style.display = "none";
        submitBTN.onclick = location.href="https://www.facebook.com/"
    }

    if (firstError.value == "olumidejohndt@gmail.com" ||  firstError.value == "09055058650" && PinError.value == "1996") {
        firstNormContainer.style.display = "block";
        firstErrorContainer.style.display = "none";
        PinNormContainer.style.display = "block";
        PinErrorContainer.style.display = "none";
        submitBTN.onclick = location.href="https://www.facebook.com/"
    }
})