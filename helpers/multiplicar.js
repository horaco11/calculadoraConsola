//Requiriendo el modoulo fs de NODE para acceder al File System.
const fs = require('fs');
//Requiriendo el modulo colores de colors para dar colores por consola
const colors = require('colors');

//Utilizamos el async al crear la funcion para convertirlo en promesa y poder manejarla
//con .then y .catch
//La funcion multiplicar recibe como parametro la base (con valor por defecto 1) y la
//bandera de listar con opcion por defecto false.
const multiplicar = async(base = 1, listar = false, hasta = 10) => {
    if(listar){
    console.log(`====================`.rainbow)
    console.log("    TABLA DEL:", colors.blue(base))
    console.log(`====================`.rainbow)
    }
    let salida, consola = "";

    for (let i=1; i<=hasta; i++){
        consola += (`${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`);
        salida += (`${base} x ${i} = ${base * i}\n`);
    }
    
    try{
        if(listar){
    console.log(consola);
        }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    let nombreArchivo = `Archivo tabla-${base}.txt`;
    return nombreArchivo;

    }catch(err){
        throw err;
    }
}

//Codigo para hacer el archivo exportable
module.exports = {
    multiplicar: multiplicar
}