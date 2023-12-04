// Escomo el type pero es enfocado a crear la estructura de una "cosa"

interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}
// Puedes extender una interfas de otra, para tomar de sus atributos
interface Zapatilla extends Producto {
    talla: number
}
interface CarritoDeCompras {
    totalPrice: number
    producto: (Producto | Zapatilla)[]
}
// -------------------------
interface CarritoOps{
    add: (product: Producto | Zapatilla) => void
    remove: (id: number) => void
    clear: () => void
}
// o tambien puede se de la siguiente manera
interface CarritoOps2{
    add(product: Producto | Zapatilla): void
    remove(id: number): void
    clear(): void
}
// -------------------------


const carrito: CarritoDeCompras = {
    totalPrice: 100,
    producto: [
        {
            id: 1,
            nombre: 'Reloj',
            precio: 50,
            quantity: 1
        },
        {
            id: 2,
            nombre: 'Zapato x',
            precio: 50,
            quantity: 1,
            talla: 40
        }
    ]
}

// Narrowing 

interface Mario {
    company: 'Nintendo'
    name: string
    jump(): void
}
interface Sonic {
    company: 'Sega'
    name: string
    run(): void
}

type Personaje = Mario | Sonic

function play(personaje: Personaje): void {
    if(personaje.company == 'Nintendo') {
        personaje.jump()
        return
    }
    personaje.run()
}
// tambien puede ser de la siguiente manera

// Type Guard
// supone que personaje es sonic y pregunta si el metodo correr esta dentro de el personaje
function checkIsSonic(personaje:Personaje): personaje is Sonic {
    return (personaje as Sonic).run !== undefined
}
function play2(personaje: Personaje): void {
    if(checkIsSonic(personaje)) {
        personaje.run()
        return
    }
    personaje.jump()
}