const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //Leido
    cb(data.toString());
  })
};

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error('No se ha podido escribir');
    } else {
      console.log('Si se escribio')
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log);

borrar(__dirname + '/archivo1.txt', console.log);