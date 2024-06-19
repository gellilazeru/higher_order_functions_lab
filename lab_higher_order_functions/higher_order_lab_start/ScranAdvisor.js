const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
const ScranAdvisorCount = function(restaurants){
    return restaurants.count;
};



module.exports = ScranAdvisor;