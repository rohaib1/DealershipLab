const carsForSale = [];


//Count cars method
Dealership.prototype.countCars = function(){
    return carsForSale.length
}

//Add car
Dealership.prototype.addCar = function(){
    carsForSale.push(car)
}

//Find all the cars from a given manufacturer
Dealership.prototype.getCarManufacturers = function(){
    return carsForSale.map(car => car.manufacturer);
}

//Get total price of all cars
Dealership.prototype.totalPrice = function(){
    return carsForSale.reduce((total))
}

module.exports = Dealership;