function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function serompeasync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en la funcion asincrona')
      cb(error);
    }

  }, 1000)
}

try {
  //otraFuncion();
  serompeasync(function () {
    console.log('Hay error');
  })
} catch (error) {
  console.log('Algo esta roto');
  console.error(error.message);
  console.error('Pero no hay problema');
}

console.log('Esto esta al final');
