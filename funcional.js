function duplicar(num) {
  return num * 2;
}

function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}
/----FILTER----------------------------------------------/;
function filter(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
/----CONTAINS----------------------------------------------/;

function contains(colecc, num) {
  if (!Array.isArray(colecc)) {
    let valores = [];
    valores = Object.values(colecc);
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] === num) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < colecc.length; i++) {
      if (colecc[i] === num) {
        return true;
      }
    }
  }
  return false;
}

/----CUENTA PALABRAS----------------------------------------------/;

function cuentaPalabras(str) {
  let resultado = str.split(" ").length;
  return resultado;
}

/----SUMA DE PALABRAS SIN REDUCE----------------------------------------------/;

function cuentaPalabrasReduce(_, _, array) {
  return array.join().replace(",", " ").split(" ").length;
}

/---REDUCE-----------------------------------------------/;
function reduce(array, vInicial, func) {
  let recolector = vInicial;
  for (let i = 0; i < array.length; i++) {
    recolector = func(recolector, array[i], array);
  }
  return recolector;
}

/---SUMA----------------------------------------------/;
function suma(array) {
  let resultado = reduce(array, 0, (a, b) => a + b);
  return resultado;
}
// Version Reduce JavaScript (Esta version no se puede usar en las carpetas)
// [1,2,3,4,5].reduce( (acc, next, indice, arregloOriginal)=>{logiga}, valor inicial)

/---EVERY-----------------------------------------------/;
function every(array, fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (reduce(array, array[i], fn)) {
      newArray.push(array[i]);
    }
  }
  return newArray.length === array.length;
}
// [2,4,6,8],[]canasta de datos filtrados.
//logica, chekear si son pares.
// [2,4,6,8], esta es mi canasta [2,4,6,8]
//Si las long. son iguales se cumple Every

/---ANY-----------------------------------------------/;

function any(array, fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!reduce(array, array[i], fn)) {
      newArray.push(array[i]);
    }
  }
  return newArray.length !== array.length;
}
