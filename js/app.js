//JavaScript code for modal

//Get modal
const modal = document.querySelector("#modal");

//Get the link that opens the modal
const openTipCalc = document.querySelector("#open-tip-calc");

//Get close button
const close = document.querySelector(".close");

//open modal when user clicks tip calculator link
openTipCalc.addEventListener("click", function (){
    modal.style.display = "block";
});

//close modal when user clicks cross
close.addEventListener("click", function(){
    modal.style.display = "none";
});

//close modal when user clicks outside modal content
modal.addEventListener("click", function(e){
    if(e.target === modal) {
        modal.style.display = "none";
    }

});


//JavaScript code for tip calculator
//UI variables
//Amount
const amount = document.querySelector("#amount");

//Percentage
const percentage = document.querySelector("#percentage");

//Number of people
const numPeople = document.querySelector("#split");

//Calculate button
const calcBtn = document.querySelector("#btn");

//Reset button
const resetBtn = document.querySelector("#btn-clr");

//Tip output
const output = document.querySelector("#output");

//Listen for calculate
calcBtn.addEventListener("click", calcTip);

//Listen for clear
resetBtn.addEventListener("click", clearTip);

//Function to calculate tip
function calcTip() {
    let bill = amount.value;
    let tip = percentage.value;
    let num = numPeople.value;

    let tipEach = (tip / 100) * bill / num;

    output.textContent = "The tip comes to £" + tipEach + " per person";
};

//Function to clear tip calculator
function clearTip() {
    amount.value = "";
    percentage.value = "";
    numPeople.value = ""
    output.textContent = "";
}; 