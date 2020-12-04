const { resolveCname } = require('dns');
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor ${limite} para el limite no es un numero`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += (`${base} * ${i} = ${base*i}\n`);

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });

}
let listar = (base, limite) => {

    //return new Promise((resolve, reject) => {
    /* if (!Number(base)) {
         reject(`El valor ${base} apra la base no es un numero`);
         return;
     }
     if (!Number(limite)) {
         reject(`El valor ${limite} para el limite no es un numero`);
         return;
     }*/
    console.log('================'.cyan);
    console.log(`Tabla de ${base}`.magenta);
    console.log("================".cyan);
    for (let i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base*i}`));
    }
    //resolve(true);
    //});

}
module.exports = {
    crearArchivo,
    listar
}