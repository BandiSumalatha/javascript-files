const key = "email";

const person = {
  name: "sumalata",
  lname: "bandi",
  mo: 111,
};
console.log(person)
person[key] = "abc@gmail.com";
console.log(person);

// const abc = [1, 2, 3];
// abc.push(9);
// const abcd = abc;
// console.log(abc === abcd);

// const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 90];
// for (let a in arr) {
//   console.log(a);
// }

const a = [1, 2, 3];
const b = a;
console.log(a !== b);
// console.log(abcd);
// var a=5
// var b=9
// a=1
// b=a
// console.log(a+b)

// const a = [1, 2, 3, 4, 5, 6];
// const b = [9, 8, 76, 6, 5];
// const c = a[1] + b[2];
// console.log(c);

// console.log(Array.isArray(a));

// console.log(typeof [] + []);
// console.log("22"+"22")

const sum = (a, b) => {
  if (typeof b === "undefined") {
    b = 90;
  }
  console.log(a + b);
};
sum(88);
//primitive data types are copied by value
nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));
numbersCopy[1].push(300);
console.log(numbersCopy)
