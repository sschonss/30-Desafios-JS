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

function flatAndSort(arr) {
  const newArray = []

  arr.forEach((numbers) => {
    newArray.push(...numbers)
  })

  return newArray.sort((a, b) => a - b)
}

console.log(flatAndSort(arr1))
console.log(flatAndSort(arr2))
console.log(flatAndSort(arr3))
