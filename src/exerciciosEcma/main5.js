//THIS = É uma palavra chave que está disponível dentro de funções construtoras fazendo referência ao corpo da função

function Car(brand, price) {   
    this.brand = brand
    this.price = price
    console.log(this)
}

const civic = new Car("Honda", 130)
const bwm = new Car("BMW", 150)
const audi = new Car("Audi", 170)