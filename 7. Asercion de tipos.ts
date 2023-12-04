const canvas = document.getElementById('canvas')

// const ctx = canvas.getContext('2d') //  Incorecto

// Dado que no es TS no es capas de saber si existe dicho elemnto, solo da un elemnto default
// HTMLElement <-

// Para que nos de el elemento necesario podemos hacer esto ⬇️
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement

const ctx2 = canvas2.getContext('2d')

// Lo anterior es una asrcion valida pero puede darnos error porque puede que sea null y perdemos la oportunidad de validacion una ves lo hacemos de dicha manera

// Una de las maneras puede ser 
const canvas3 = document.getElementById('canvas') 

if (canvas3 != null) {
    const ctx3 = (canvas2 as HTMLCanvasElement).getContext('2d')
}

// Pero la anterior maneratambien tiene una falencia en que si estas recuperando el elemnto incorrencto TS no se esta dando cuenta, esto lo puede s arreglar de la siguiente manera
const canvas4 = document.getElementById('canvas') 

if (canvas4 != null && canvas3 instanceof HTMLCanvasElement) {
    const ctx4 = canvas2.getContext('2d')
}
// Lo anterior es inferencia ⬆️