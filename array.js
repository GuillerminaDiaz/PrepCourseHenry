//var listaSuper = [];
//listaSuper[3]= 'Papas';
//listaSuper[1]= 'pepinos'
 //console.log(listaSuper[3]);
 //console.log(listaSuper.length);
 /////////////*
// var palabra = 'henri';
 //var palabraSeparada = palabra.split('');
 
 //palabraSeparada.pop();
 //palabraSeparada.push('y');
 
 //var palabraArreglada= palabraSeparada.join('');
 //console.log(palabraArreglada);

 //var numeros = [1,2,3,4];
 //numeros.forEach((num)=> console.log(num));
                 //muestra cada numero por separado
//numeros.forEach((num) => {
    //if (num ===3) {
    //console.log(num);
  //  }
//});           
                //para que muestre cuando sea solo igual a 3


//PARA HACER UN CAMBIO SOBRE EL ARREGLO
//var masUno= numeros.map((num)=>{
  //  return num+1;
//});
//console.log(masUno);
                //a cada elemento se le sumo 1
 
// PUSH y UNSHIFT
//var colores = ['Amarillo', 'Azul'];
//colores.push('Rojo');
//colores.unshift('Verde');
//console.log(colores);

// POP y SHIFT
//colores.shift();
//colores.pop();

//console.log(colores);

// INCLUDES
//var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
//var existeDali = pintores.includes('Dalí');

//console.log(existeDali);

// EVERY
//var numeros = [ 1, 6, 8, 9, 43 ];
//var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

//console.log(cumplenCondicion);

// SPLIT
//var palabra = 'Henri';
//var palabraSeparada = palabra.split('');

//console.log(palabraSeparada);
// JOIN
//var palabraArreglada = palabraSeparada.join('');

//console.log(palabraArreglada);
// FOREACH
//var numeros = [ 1, 2, 3, 4 ];
//numeros.forEach( (num) => { console.log(num) } )
// MAP
//var numeros = [ 1, 2, 3, 4 ];
//var masUno = numeros.map( (num) => { return num + 1 } );

//console.log(masUno);
/////////////////////////////*

//var arr =[1,2,3,4,5];
//for(var i=0; i< arr.length; i++){
//  console.log(arr[i]);
//}

//function encontrarLetraP(string){
  //var letras= string.split('');

  //for (var i=0; i<letras.length;i++){
   // if(letras[i]==='p'){
     // console.log('Si contirne p');
    //}
  //}
//}
//encontrarLetraP('pedro');
//encontrarLetraP('jose');

var arr=[];
while(arr.length < 5){
  arr.push('BOOM');
}
console.log(arr);