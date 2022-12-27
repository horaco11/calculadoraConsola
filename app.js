const {multiplicar} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');


console.clear();


//El process.argv trae los argumentos con los que ejecutamos el archivo .js
//El tercer argumento es el que agregamos nosotros con -- luego de node archivo.js. Los otros
//dos anteriores vienen por defecto.

//Dado que si consultamos process.argv este viene como un array lo desacoplamos y creamos
//una variable con el argumento que nos interesa, en nuestro caso el tercero. Al mismo le 
//asignamos un valor por defecto en nuestro caso base=5

//const [, , arg3 = "base=5"] = process.argv;

//Luego realizamos un split con el signo = como parametro y asignamos el valor
//numerico a la variable base a la cual se aplicará la lógica.

//const [, base] = arg3.split("=");

//let base = 3;

//TODO LO ANTERIOR TIENE MUCHAS DEBILIDADES Y EXISTEN MEJORES FORMAS DE HACERLO.
//LA SOLUCION ES IMPORTAR UN PAQUETE QUE NOS SIMPLIFICA ESTA TAREA: YARGS

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);


//Le paso como parámatro tanto la base como la bandera l (listar). Debo modificar la
//funcion para que pueda recibirla.
multiplicar(argv.base, argv.l, argv.h)
.then(consola=>console.log(consola.bgRed, "creado"))
.catch(err=>console.log(err));





