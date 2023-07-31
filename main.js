// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/559d2284b5bb6799e9000047
const addLength = (str) => str.split(' ').map(el => `${el} ${el.length}`);

console.log(addLength("apple ban"));

// KATA 2 8kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
const findAverage = (arr) => {
  let sum = arr.reduce((ttl, cv) => ttl + cv, 0);
  return (arr.length != 0 ? sum / arr.length : 0);
}

console.log(findAverage([1,2,3,4]));

// KATA 3 7kyu
//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
const findMultiples = (int, limit) => {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % int === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(findMultiples(5, 25));

// KATA 4 8kyu
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
const stringToArray = (str) =>  str.split(' ');


console.log(stringToArray('"I love arrays they are my favorite"'));

// KATA 5 8kyu
// https://www.codewars.com/kata/5a34b80155519e1a00000009
const multipleOfIndex = (arr) => {
  let multiples = [];
  arr.forEach((num, i) => {
    if (num === i || num % i === 0 ) {
      multiples.push(num);
    }
  })
  return multiples;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([0,2,3,6,9]));