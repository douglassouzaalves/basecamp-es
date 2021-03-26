class Car {
    //função da classe, ele é executado assim que a classe é instanciada(iniciada).
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }

    run() {
        console.log("correr")
    }
}

const civic = new Car("Honda", 130)
    
console.log(civic.brand)