const Car = require('./car');

const car1 = new Car("BMW", 18000, "Diesel");

describe('get properties',() => {

    test('Can get make', () =>{
        //ASSERET
        expect(car1.manufacturer).toBe('BMW')
    }
    )
    
    test('Can get price', () =>{
        //ASSERET
        expect(car1.price).toBe(18000)
    }
    )

    test('Can get enginetype', () =>{
        //ASSERET
        expect(car1.engineType).toBe('Diesel')
    }
    )

})

describe('set properties',() => {

    test('Can set manufactuerer', () => {
        car1.manufacturer = "Mercedes";
        expect(car1.manufacturer).toBe('Mercedes')
    })

    test('Can set price', () => {
        car1.price = 20000;
        expect(car1.price).toBe(20000)
    })

    test('Can set engineType', () => {
        car1.engineType = "Petrol";
        expect(car1.engineType).toBe("Petrol")
    })

    
})