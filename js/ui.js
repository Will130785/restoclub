//Create UI class
class UI {
    constructor() {
        this.result = document.querySelector(".http-result");
    }
    //Method for displaying result in the UI
    displayResult(restaurant) {
        //initiate output variable
        let output = "";

        //Loop through array of returned restaurants
        restaurant.restaurants.forEach(function(item, index){
            //Extract data from returned object to display in UI
            let image = restaurant.restaurants[index].restaurant.featured_image;
            let name = restaurant.restaurants[index].restaurant.name;
            let location = restaurant.restaurants[index].restaurant.location.address;
            let rating = restaurant.restaurants[index].restaurant.user_rating.aggregate_rating;

            //Add each iteration to the output variable
            output += `
        <div class="http-result__card">
                        <div class="http-result__card--head">
                            <img src=${image} class="rest-pic">
                        </div>
                        <div class="http-result__card--body">
                            <p class="r-name">${name}</p>
                            <p class="r-location">${location}</p>
                            <p class="r-rating">${rating}</p>
                        </div>
                    </div>
        `;

        });

        //Display in UI
        this.result.innerHTML = output;

        


    }
}