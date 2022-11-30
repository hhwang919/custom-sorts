function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age)
  // return outPut 
}

function oddEvenSort(arr) {
  // Your code here
  let outPut = arr.sort((a,b) => {
    if(((a+b) % 2 === 0)) {
    console.log(a , b)
    return a - b;}
    else if( a % 2 === 0) return Infinity;
    return -Infinity;
  })
  return outPut
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];

oddEvenSort(arr1)
// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 25,
//     occupation: "Data Scientist",
//     friends: [1, 4],
//   },
//   {
//     id: 3,
//     firstName: "Mary",
//     lastName: "Smith",
//     age: 32,
//     occupation: "UX Designer",
//     friends: [2, 4],
//   },
//   {
//     id: 4,
//     firstName: "James",
//     lastName: "Johnson",
//     age: 55,
//     occupation: "CTO",
//     friends: [1, 2, 3],
//   },
// ];

console.log(ageSort(users))

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];