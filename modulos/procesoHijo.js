const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//   if(err) {
//     console.error('err');
//     return false;
//   }

//   console.log('Salida:', stdout);
// });

// exec('node modulos/console.js', (err, stdout, sterr) => {
//   if(err) {
//     console.error('err', err);
//     return false;
//   }

//   console.log('Salida:', stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', function (dato) {
  console.log('esta muerto?')
  console.log(proceso.killed)
  console.log(dato.toString())
})

proceso.on('exit', function() {
  console.log('El proceso termino');
  console.log(proceso.killed)
})