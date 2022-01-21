//Escreva uma funcao que recebe um array bidimensional de inteiros e retorna um unico array contendo todos os numeros em ordem ascedente

let arr1 = [
  [1, 5, 3],
  [6, 19, 11],
  [47, 128, 5],
  [1, 93, 57, 42, 103],
]

let arr2 = [
  [1, 3],
  [4, 8],
  [7, 5],
  [2, 6],
]

let arr3 = [[], [], []]

function toTransform(arr) {
  let singleArray = arr.flat()

  //funcao criada para que o array seja ordenado de forma numericamente, pois o metodo sort ordena de forma lexica
  function sortFunction(a, b) {
    return a - b
  }

  let res = singleArray.sort(sortFunction)

  return res
}

console.log(toTransform(arr1))
console.log(toTransform(arr2))
console.log(toTransform(arr3))
