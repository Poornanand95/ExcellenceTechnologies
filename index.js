// Assignment

// Question 1

// let array = [5, 9, 1, 6, 4, 10, 9, 11];

// array.forEach((c, index) => {
//   if (c % 2 === 0) {
//     console.log(c);
//   }
// });

// Question 2

// let array = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
// let count = 0;
// let max = 0;
// array.forEach((c, index) => {
//   if (c == 0) count = 0;
//   else count++;
//   max = count > max ? count : max;
// });
// console.log(max);

// Question 3

// let array = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 4];
// array.forEach((c, index) => {
//   if (array.indexOf(c) != index) {
//     console.log(c);
//   }
// });

// Question 4

// const fetchAPI = async () => {
//   const response = await fetch('http://www.example.com/api/get/1');
//   const data = await response.json();
//   console.log(data);
// };

// fetchAPI();

// Question 5

var obj = {
  id: 4,
  name: 'abc',
  id: 10,
  name: 'ab2',
  id: 5,
  name: 'abc3',
  id: 6,
  name: 'abc5',
};

const array = Object.entries(obj);

console.log(array);
