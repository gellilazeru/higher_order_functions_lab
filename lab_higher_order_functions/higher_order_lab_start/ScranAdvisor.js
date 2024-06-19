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

module.exports = ScranAdvisor;