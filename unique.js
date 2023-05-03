
// //method1
 const nums=[1,3,4,5,5,3,6,2,3,4]
// const nums1=[
//     ...new Set(nums)]

// console.log(nums1)

// //method2

// const num3=nums.filter((item,index)=>{
//     return nums.indexOf(item)===index
// })

// console.log(num3)
//method3

// const num4=nums.reduce((prev,current)=>{
//     console.log(prev,current)
//     if(!prev.includes(current)){
//         prev.push(current)
//     }
//     return prev;
    
// },[])
// console.log(num4)











const arr = [

  [

    1,

    [99, 22, 11, 44, 99],

    [44, 33, 55],

    [

      [

        99,

        88,

        77,

        [

          88,

          77,

          44,

          [[77, [[44, 77],[[99, 66, [88, 44], [[88, 55, 44, ["Sumlatha"]]]]]]]],

        ],

      ],

    ],

    2,

    [12, 12, 33, 22],

    1,

    3,

  ],

  [33, 44, 22],

  [44, 33, 55, 66],

  [44, 33, 22, 11, 55, 66],

  [55, 33, 11, 88],

];

// console.log(arr[0][3][0][3][3][0][1][1][0][3][0][3][0]);










var a=99

var b=99

var c=b  

var c=a  

var b=2+a  
b=c+b    

c=a+b      

// console.log(b)


const Arr = [11, 1, 2, 3, 4];

const res = Arr.push("sumalatha");

console.log(res);
// let a = 100;
// let b = 50;
// a = b;
// b = a;
// var c = a % 2;
// b = c % 2;
// console.log(b);

//if we have same key in the both object it will take the what we in spread in the second time
const obj1={
    key1:"value1",
    key2:"value2",
    key3:'value3'
}

const obj2={
    key1:"valueunique",
    key2:"value3",
    key3:"value4"
}

const newObject={...obj1,...obj2} //taking second spreaded keys
console.log(newObject)

const arr4 = [1, 2, 3, 4, 5, 6, 7];
const result = arr4.fill("sumalatha", 3);
console.log(result);





