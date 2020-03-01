//Get HTTP request
class Restaurant {
    constructor(location){
        this.apiKey = "32655ce31c3429efdd2fce55960d7e05";
        this.location = location;
    }

    async getRestaurant(){
        const response = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=${this.location}`, {
            "method": "GET",
            "headers": {
                "user-key": "32655ce31c3429efdd2fce55960d7e05"
            }
        });

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(location) {
        this.location = location;
    }
}