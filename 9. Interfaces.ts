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