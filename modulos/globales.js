let i = 0;
let intervalo = setInterval(()=>{
  if(i === 3) {
    clearInterval(intervalo)
  }
  i++;
  console.log('Hola');
}, 1000)

setImmediate(function (){
  console.log('Holas');
})

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = 'Valor global';

console.log(miVariable);