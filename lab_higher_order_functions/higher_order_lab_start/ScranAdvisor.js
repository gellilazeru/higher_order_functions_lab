const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function(restaurants){
    return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurant = function(restaurants) {
    return this.restaurants.fin
}


module.exports = ScranAdvisor;