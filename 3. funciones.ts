// Tipado de parametros
function saludar(name: string){
    console.log(`hola ${name}`)
}
function saludarAvanzado({name, age}: {name: string, age: number}){
    
    console.log(`hola, mi nombre es ${name}, tengo ${age} años`)
}
function saludarAvanzado2(persona: {name: string, age: number}){
    const {name, age} = persona
    console.log(`hola, mi nombre es ${name}, tengo ${age} años`)
}
// Tipado de retorno                               ⬇️

function sumar ({a, b}: {a: number, b: number}): number {
    return a + b
}

// si retorna una funcion   'fn: (name: string) => void'
// void = si devuelve algo, no me importa, omitelo!!!
const sayHiFunction =(fn: (name: string) => void) =>{
    fn('justin')
}
const sayHi = (name: string)=>{
    console.log(name)
}
sayHiFunction(sayHi)

// never = una funcion que nunca devuelve nada, no se espera que de vuelva algo

function throwError(message: string): never{
    throw new Error(message)
}

// inferencia de funciones anonimas segun el contexto 

const avengers = ['spidey', 'hulk', 'Thor']

avengers.forEach(function (avenger) {
    console.log(avenger.toLocaleUpperCase())
})