let frstInput = document.getElementById("firstInput");
let mathInput = document.getElementById("mathInput");
let secInput = document.getElementById("secondInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");


convertBtn.addEventListener("click", function() {
    let firstInputValue = frstInput.value;
    let secondInputValue = secInput.value;
    let mathInputValue = mathInput.value;
    if (firstInputValue === "") {
        errorMsg.textContent = "Please Enter a valid number of hours";
        timeInSeconds.textContent = "";
    }else if (mathInputValue === "" ) {
        errorMsg.textContent = "Please Enter a valid number of minutes";
        timeInSeconds.textContent = "";
    } else if (secondInputValue === "") {
        errorMsg.textContent = "Please Enter a valid number of minutes";
        timeInSeconds.textContent = "";
    } else {
        errorMsg.textContent = "";
        switch(mathInputValue){
            case "+":
                timeInSeconds.textContent = parseInt(firstInputValue) +  parseInt(secondInputValue) ;
                break;
            case "-":
                timeInSeconds.textContent = parseInt(firstInputValue) -  parseInt(secondInputValue) ;
        }
        
        timeInSeconds.classList.add("timeStyle");
    }
})