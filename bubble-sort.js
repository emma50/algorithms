// bubble-sort places large values into sorted positions first

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1 ; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }  
    }
    console.log('ONE PASS COMPLETE!')
  }
  return arr
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])


// es2015
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1 ; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
      }  
    }
    console.log('ONE PASS COMPLETE!')
  }
  return arr
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])


// bubble-sort optimized
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let swapped = false

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1 ; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
        swapped = true
      }
      swapped = false  
    }
    console.log('ONE PASS COMPLETE!')
    if (!swapped) break;
  }
  return arr
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])

// best time complexity -> linear(O(n)) :: usually used when a data-set is nearly sorted
// worst time complexity -> quadratic(O(n^2))
