class Veiculo { //classe generica
    constructor(rodas) {
        this.rodas = rodas
    }

    acelerar() {
        console.log("Acelerou!!")
    }
}

class Moto extends Veiculo { //classe especifica
    constructor (rodas, capacete) {
        super(rodas)
        this.capacete = capacete
    }
    
    empinar() {
        console.log(`Empinhou com as ${this.rodas} rodas.`)
    }
    
    taUsandoCapacete() {
        console.log(this.capacete)
    }
}

const bross = new Moto(2, true)

bross.taUsandoCapacete() 