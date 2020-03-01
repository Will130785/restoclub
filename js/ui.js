class UI {
    constructor() {
        this.result = document.querySelector(".http-result");
    }

    displayResult(restaurant) {
        let output = "";

        restaurant.restaurants.forEach(function(item, index){
            let image = restaurant.restaurants[index].restaurant.featured_image;
        let name = restaurant.restaurants[index].restaurant.name;
        let location = restaurant.restaurants[index].restaurant.location.address;
        let rating = restaurant.restaurants[index].restaurant.user_rating.aggregate_rating;

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

        this.result.innerHTML = output;

        


    }
}