const getHighAndLow = (str) => {
  const sortedArray = str.split(' ')
    .map(elem => elem = +elem)
    .sort((a, b) => a - b);
  
  return `${sortedArray[sortedArray.length - 1]} ${sortedArray[0]}`;
}

getHighAndLow("1 9 3 4 -5");  // 9 -5