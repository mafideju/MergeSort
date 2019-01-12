// DIVIDINDO UM ARRAY EM DOIS 
const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }
  let midIndex = Math.floor(array.length / 2);
  let primeiraMetade = array.slice(0, midIndex);
  let segundaMetade = array.slice(midIndex);

  return merge(mergeSort(primeiraMetade), mergeSort(segundaMetade));
}

const merge = (primeiraMetade, segundaMetade) => {
  let resultado = [];

  while (primeiraMetade.length && segundaMetade.length) {
    let minimo;
    if (primeiraMetade[0] < segundaMetade[0]) {
      minimo = primeiraMetade.shift();
    } else {
      minimo = segundaMetade.shift();
    }
    resultado.push(minimo);
  }

  if (primeiraMetade.length) {
    resultado = resultado.concat(primeiraMetade);
  } else {
    resultado = resultado.concat(segundaMetade);
  }
  return resultado;
}

console.log(mergeSort([4, 5, 6, 7, 1, 2, 3]))