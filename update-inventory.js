function updateInventory(arr1, arr2) {
  // return arr1;
  let items = {}

  for (let a of arr1) {
      items[a[1]] = a[0]
  }

  for (let b of arr2) {
      if (items.hasOwnProperty(b[1])) {
          items[b[1]] = items[b[1]] + b[0]
      }
      else {
          items[b[1]] = b[0]
      }
  }
  let res =  Object.entries(items)

  for (let obj of res) {
      obj = obj.reverse()
  }
  
  return res.sort((a, b) => {
      return a[1] < b[1] ? -1: 1;
  })
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);