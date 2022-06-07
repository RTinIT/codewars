// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

const maps = x => x.reduce((acc, elem) => {
  acc.push(elem * 2);
  return acc;
}, []);
