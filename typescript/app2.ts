//Criação de uma classe
class Spacecraft{

    constructor (public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

//Herança de classe junto com interface
class MileniumFalcon extends Spacecraft implements Containership {
    
    cargoContainers: number
    
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }
        else{
            console.log('Failed to jump into hyperspace')
        }
    }
}

let falcon = new MileniumFalcon()
falcon.jumpIntoHyperspace()

//Interface
interface Containership {
    cargoContainers: number
}

let goodForTheJob = ( ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'yes' : 'no' }`)