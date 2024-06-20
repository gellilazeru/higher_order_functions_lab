const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

// count all restaurants
ScranAdvisor.prototype.count = function(restaurants){
    return this.restaurants.length;
};

// give full details on given restaurant
ScranAdvisor.prototype.restaurantByName = function(restaurantName){
    return this.restaurants.find((restaurant) => restaurant.name === restaurantName);
};

//naming all restaurants
ScranAdvisor.prototype.nameRestaurant = function(restaurant){
    return this.restaurants.map((restaurant) => restaurant.name);
}

//cities in Glasgow
ScranAdvisor.prototype.nameRestaurantsInCity = function (restaurantGlasgow) {
    return this.restaurants.filter((restaurant) => restaurant.location.town == restaurantGlasgow);
}

// EXTENSION SOLUTION:

ScranAdvisor.prototype.mostCommonCuisine = function() {
    // loop through each restaurant
    // loop through the cuisines for each restaurant
    // count instances of cuisines as I go
    // store these values .... object/dictionary
    const countCuisine = {};
    this.restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            // if the cuisine exists in the object already, add 1 to the tally
            if (cuisineCounter[cuisine]){
                cuisineCounter[cuisine]++;
            } else {
                cuisineCounter[cuisine] = 1;
            }
        })
    })
    // return the cuisine withe most tallies
    // trackingCuisine is the accumulator
    const mostCommonCuisine = Object.keys(cuisineCounter).reduce((trackingCuisine, nextCuisine) => cuisineCounter[trackingCuisine] > cuisineCounter[nextCuisine] ? trackingCuisine : nextCuisine);

    return mostCommonCuisine;
}

module.exports = ScranAdvisor;