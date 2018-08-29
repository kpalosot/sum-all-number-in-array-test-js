function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  for(let number of array){
    if(Array.isArray(number)){
      total += sumItems(number);
    } else {
      total += number;
    }
  }

  return total;

}

module.exports = sumItems;