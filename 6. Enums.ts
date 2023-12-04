enum Error_Types {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDEN
}
function mostrarErr(tipoDeError: Error_Types): void {
    if (tipoDeError === Error_Types.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    }
    else if (tipoDeError === Error_Types.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }
    else if (tipoDeError === Error_Types.FORBIDEN){
        console.log('No tienes permisos para acceder')
    }
}

// Genera menos codigo JavaScript en su compilacion si antes del enum pones un 'const'

const enum Error_Types2 {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDEN
}
function mostrarErr2(tipoDeError: Error_Types2): void {
    if (tipoDeError === Error_Types2.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    }
    else if (tipoDeError === Error_Types2.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }
    else if (tipoDeError === Error_Types2.FORBIDEN){
        console.log('No tienes permisos para acceder')
    }
}

// Al comila a Javascript pasa a comparar en la condicion indices de un array, si tienes otro tipo de indices o traes la informacion de una base de datos, puedes hacer de la siguiente manera para que compare en la condicion las cadenas de texto que trae de la base de datos
const enum Error_Types3 {
    NOT_FOUND = "Not Found",
    UNAUTHORIZED = "Authorized",
    FORBIDEN = "Forbidden"
}
function mostrarErr3(tipoDeError: Error_Types3): void {
    if (tipoDeError === Error_Types3.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    }
    else if (tipoDeError === Error_Types3.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }
    else if (tipoDeError === Error_Types3.FORBIDEN){
        console.log('No tienes permisos para acceder')
    }
}