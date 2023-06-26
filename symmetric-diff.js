const symOfTwo = (arr1, arr2) => {
  const output = [];
  for (const el of arr1) {
    if (!output.includes(el) && !arr2.includes(el)) {
      output.push(el);
    }
  }

  for (const el of arr2) {
    if (!output.includes(el) && !arr1.includes(el)) {
      output.push(el);
    }
  }

  return output;
};

function sym(args) {
  const arrOfArrs = [...args];
  let output = arrOfArrs[0];
  
  for (let i=1; i < arrOfArrs.length; i++) {
    output = symOfTwo(output, arrOfArrs[i]);
  }

  return output.sort((a, b) => a - b);
}