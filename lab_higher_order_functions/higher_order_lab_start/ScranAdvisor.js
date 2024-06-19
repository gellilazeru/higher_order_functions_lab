const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function(restaurants){
    return this.restaurants.length;
};

ScranAdvisor.prototype.restaurantByName = function(restaurantName){
    return this.restaurants.find((restaurant) => restaurant.name === restaurantName);
};

ScranAdvisor.prototype.nameRestaurant = function(restaurant){
    return this.restaurants.map((restaurant) => restaurant.name);
}

ScranAdvisor.prototype.nameRestaurantsInCity = function (restaurantGlasgow) {
    return this.restaurants.filter((restaurant) => restaurant.location.town == restaurantGlasgow);
}

module.exports = ScranAdvisor;