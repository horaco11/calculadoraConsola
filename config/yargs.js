const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Define la base de la tabla de multiplicar. Ejemplo: Tabla del 5"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: "Utilice este flag para mostrar la tabla por pantalla."
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: "Utilice este flag para indicar hasta que multiplicador crea la tabla."
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw "La base tiene que ser un número";
        }
        return true;
    })
    .argv;  

    module.exports = {argv};