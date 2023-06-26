// selection-sort places small values into sorted positions first

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j   
      }  
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    if (min = 0) break;
  }
  return arr
}

selectionSort([3,1,4,2,8])

// selection-sort optimized
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j   
      }  
    }
    if (i !== min) {
      swap(arr, i, min)
    }
    if (min = 0) break;
  }
  return arr
}

selectionSort([3,1,4,2,8])

// best time complexity -> linear(O(n)) :: usually used when a data-set is nearly sorted
// worst time complexity -> quadratic(O(n^2))
// open-ai secret-key -> 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