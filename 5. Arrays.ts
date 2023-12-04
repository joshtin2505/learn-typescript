// const languages = [] // Al dejarlo vacio infiere que es un array de never

// Asi se tipa un array correctamente
const languages: string[] = []

languages.push('JavaScript')

// Si quieres que tenga otros tipos de datos

const numAndStr: (number | string)[] = []
numAndStr.push('str')
numAndStr.push(1)

// Definir matrices 

const matriz: string[][] = []

// Tuplas para limitar el numero de pociciones en un array

type CellValue = 'x' | 'O' | ''

// Esto Es Una Tupla ⬇️
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['', 'O', 'x'],
    ['', 'O', 'x'],
    ['', 'O', 'x']
]