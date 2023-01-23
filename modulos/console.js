console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');

var table = [{
  a: 'una',
  b: 'bur',
}, {
  a: 'dos',
  b: 'tres',
}]

console.table(table);

console.group();

console.log('Conversacion: ')
console.group('conver');
console.log('Hola')
console.log('Bla bla bla')
console.log('Adios')
console.groupEnd('conver');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
