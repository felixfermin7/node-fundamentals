// const process = require('process');

process.on('beforeExit', () => {
  console.log('nead to end')
});

process.on('exit', () => {
  console.log('... process ended')
});

process.on('uncaughtException', (error, origen) => {
  console.error('no handled error');
  console.log(error);
})

//noExists();



process.on('uncaughtRejection')
