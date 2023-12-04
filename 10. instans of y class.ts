interface Avengers{
    name: string
    powerScore: number
    wonBattles: number 
}
class Avengers implements Avengers {

    constructor(name: string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }
    get fullName(){
        return `${this.name}, \n ${this.powerScore}`
    }
    set power(newPower: number){
        if (newPower <= 100){
            this.power = newPower
        }else {
            throw new Error("Power must be greater than 100")
        }
    }
}
const avangers = new Avengers('Spidey', 30)

