
// Variable Declarations
var bill = document.querySelector(".bill");
var numberOfPeople = document.querySelector(".number-of-persons");
var totalAmount = document.querySelector(".total-amount");
var tipAmount = document.querySelector(".tip-amount");

var tipButton = document.querySelectorAll(".tip-btn").length;
var resetValue = document.querySelector(".tipReset");
var tipPercentage; // variable to be assigned whenever a button is clicked


// Reset button
resetValue.addEventListener("click", function() {
    bill.value = "";
    numberOfPeople.value = "";
    tipAmount.innerHTML = "$ 0.00";
    totalAmount.innerHTML = "$ 0.00";
    document.querySelector(".custom-tip-input").value = "";
    document.querySelector(".persons-input-box").classList.remove("error-border");
    document.querySelector(".bill-input-box").classList.remove("error-border");
    document.querySelector(".error-bill").style.visibility = "hidden";
    document.querySelector(".error-persons").style.visibility = "hidden";
})


// Event listeners for calculation
for (i=0; i<tipButton; i++){
    document.querySelectorAll(".tip-btn")[i].addEventListener("click", function() {
        var buttonClick = this.innerHTML;

        calculateTip(buttonClick);
    })
}

document.querySelector(".custom-tip-input").addEventListener("keydown", function(evt) {
    
    calculateTip(evt.key)
})



// Tip calculator
function tipCalculator() {
    if (bill.value > 0 && numberOfPeople.value > 0){
        document.querySelector(".persons-input-box").classList.remove("error-border");
        document.querySelector(".bill-input-box").classList.remove("error-border");
        document.querySelector(".error-bill").style.visibility = "hidden";
        document.querySelector(".error-persons").style.visibility = "hidden";

        var percentage = (tipPercentage/100);
        var amount = (bill.value/numberOfPeople.value);
        var tipValue = (percentage * amount);
        var totalAmountValue = tipValue+amount; 

        tipAmount.innerHTML = "$ " + tipValue.toFixed(2);
        totalAmount.innerHTML = "$ "+ totalAmountValue.toFixed(2);
    }  else {
       checkForInput(); 
}
}

// Check for blank inputs
function checkForInput () {
    if (bill.value > 0) {
        document.querySelector(".bill-input-box").classList.remove("error-border");
        document.querySelector(".error-bill").style.visibility = "hidden";
        document.querySelector(".persons-input-box").classList.add("error-border");
        document.querySelector(".error-persons").style.visibility = "visible";
       
    } else if (numberOfPeople.value > 0) {
        document.querySelector(".persons-input-box").classList.remove("error-border");
        document.querySelector(".error-persons").style.visibility = "hidden";
        document.querySelector(".bill-input-box").classList.add("error-border");
        document.querySelector(".error-bill").style.visibility = "visible";
    } else {
        document.querySelector(".persons-input-box").classList.add("error-border");
        document.querySelector(".bill-input-box").classList.add("error-border");
        document.querySelector(".error-bill").style.visibility = "visible";
        document.querySelector(".error-persons").style.visibility = "visible";

}
}


// Calculate tip based on button clicked
function calculateTip(key) {
    switch (key) {
        case '5%':
            tipPercentage = 5;
            tipCalculator();
            break;
        case '10%':
            tipPercentage = 10;
            tipCalculator();
            break;
        case '15%':
            tipPercentage = 15;
            tipCalculator();
            break;
        case '25%':
            tipPercentage = 25;
            tipCalculator();
            break;
        case '50%':
            tipPercentage = 50;
            tipCalculator();
            break;
        case 'Enter':
            tipPercentage = document.querySelector(".custom-tip-input").value;
            tipCalculator();
            break;

        default:
            console.log(key)
            break;
    }
}