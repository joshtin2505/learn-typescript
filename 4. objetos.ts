// Objetos
let hero = {
    name: 'thor',
    age: 1800
}
// no puedes definir propiedades nuevas desde afura del objeto como:
//  hero.power = 189

// Type alias

type Hero = {
    name: string,
    age: number
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        name,
        age
    }
}
const thor = createHero({name: 'thor', age: 1800})

// ----------------------------------------------------------->

// Optional properties
// el '?' antes de el tipo indica que es opcional, que puede ser undefined

// template union types
type HeroId = `${string}-${string}-${string}-${string}`
// union types
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'
type Hero2 = {
    readonly id?: HeroId, // readonly singnifica que no es mutable si se intenta rescribir, mientras desarrllamos o sea que no es inmutable
    name: string,
    age: number,
    isActive?: boolean
    powerScale?: HeroPowerScale
}
function createHero2(hero: Hero2): Hero2 {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}
const spiderMan = createHero2({name: 'thor', age: 1800})
spiderMan.powerScale = 'local'

// ---------------------------->

// Intersection Types
type HeroBasicInfo = { name: string, age: number }
type HeroPropierties = {
    readonly id?: HeroId,
    isActive?: boolean
    powerScale?: HeroPowerScale
}
type Hero3 = HeroBasicInfo & HeroPropierties // <------------

let hero2 : Hero = {
    name : 'IronMan',
    age : 30
}

function createHero3(input: HeroBasicInfo): Hero3 {
    const { name, age } = input
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}
const IronMan = createHero3({name: 'thor', age: 1800})
IronMan.powerScale = 'local'

// ---------------------------->

// Type Indexing 

type HeroProp = {
    isActive: boolean,
    adress: {
        planet: string,
        city: string
    }
}
const adressHero: HeroProp['adress'] = {
    planet: 'Earth',
    city: 'Cartagena'
}

// ---------------------------->
// Type From Value

const adress = {
    planet: 'Earth',
    city: 'Cartagena'
}

type Adress = typeof adress

const adressYoutube: Adress = {
    planet: 'Earth',
    city: 'chicago'
}

// Type from function return 

function createAdress(){
    return{
        planet: 'Earth',
        city: 'Cartagena'
    }
}
type EarthAdress = ReturnType<typeof createAdress>