// const - constante
// let - bloque 
// var - global

// types
// numbers
let numero : number = 1
// strings
let txt : string = 'txt'
// booleans
let booleans : boolean = true
// any
let cualquierCosa: any = true
let cualquierCosa2: any = 'true'
let cualquierCosa3: any = 1
// Unión de tipos 
let id: number | string
id = 1
id = '1'
// Template union Types 
type HexadecimalColor = `#${string}`

// const color :HexadecimalColor = 'ececec' ---------------> Error
const color :HexadecimalColor = '#ececec'