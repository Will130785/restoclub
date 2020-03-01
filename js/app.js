//JavaScript for HTTP request
//Grab search input
const searchInput = document.querySelector("#searchInput");
//init restaurant object
let restaurant = new Restaurant();

//init UI
let ui = new UI();

//Handle data
document.querySelector("#searchBtn").addEventListener("click", () => {
    //Capture data from search
    restaurant.changeLocation(searchInput.value);
    //make http request and handle the result
    restaurant.getRestaurant()
    .then(result => {
    console.log(result);
    //Display result in UI
    ui.displayResult(result);
    //Clear search input
    searchInput.value = "";

})
.catch(err => console.log(err));


});

//Clear search reults
document.querySelector("#clearResultBtn").addEventListener("click", () => {
    ui.result.innerHTML = "";
})


//JavaScript for dropdown menu
//Get user pic
const drop = document.querySelector("#drop");

//Get site container
const site = document.querySelector(".body-content");

//Get dropdown menu
const menu = document.querySelector("#menu");

//Open dropdown when user clicks user picture
drop.addEventListener("click", function(){
    menu.style.display = "block";
});

//Close dropdown when user clicks
site.addEventListener("click", function(e){
    if(e.target !== drop) {
        menu.style.display = "none";
    }
    
});

//JavaScript code for tip calculator modal

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

//JavaScript for cart
//UI variables
//Get cart
let cart = document.querySelector(".cart");

//Get cart list
let cartList = document.querySelector(".cart__list");

//Get plan buttons
let starter = document.querySelector("#starter");
let advanced = document.querySelector("#advanced");
let pro = document.querySelector("#pro");

//Get clear button
let clear = document.querySelector("#clear");

//Event listeners for plan buttons
starter.addEventListener("click", addToCart);
advanced.addEventListener("click", addToCart);
pro.addEventListener("click", addToCart);

//Event listener for clear button
clear.addEventListener("click", function(e){
    cartList.innerHTML = "";
    cart.style.display = "none";

    e.preventDefault();
})

//Function for adding to cart
function addToCart(e){
    cart.style.display = "block";

    let li = document.createElement("li");

    if(e.target === starter){
        li.textContent = "Starter Plan - £150";
    } else if(e.target === advanced) {
        li.textContent = "Advanced Plan - £250";
    } else {
        li.textContent = "Professional Plan - £350";
    }

    cartList.appendChild(li);

    e.preventDefault();
}
