// var nums=[1,2,3,4,4,43,4,5,"sunil"]

// // console.log(nums[nums.length-1])
// // console.log(nums[3])
// var names = ["arun", "sita", "rita", "geeta", "hari"]

// // console.log(names.indexOf("reenu"))
//  console.log(names.includes("geeta"))

// const arr = [
//   { id: 1, country: "India" },
//   { id: 2, country: "Germany" },
//   { id: 3, country: "India" }
// ];

// // const newarr = arr.filter(obj => obj.country === "India")
// // console.log(newarr)

// var newarr=names.unshift("latha","peeta")
// console.log(newarr)
// //unshift method add new element in the start of the arr


// const array = ["paper", "painter", "poet"];
// console.log(array.pop())
// array.push("pan")
// console.log(array)

// array.unshift("pocket")
// console.log(array)
// array.shift()
// console.log(array)


// //difference between find and filter
// //find method return the first value of the array.find method search the array from starting once the desired value matches wich return that value terminate the rest of the array values.
// // filter method return the all the values that matches in the array 
// var student= [{"std_name":"medora","age":21
// }, {
//   "std_name":"jastin",
//   "age":18
//   }, {
//   "std_name":"Ahmad",
//   "age":24
//   }, {
//   "std_name":"Umar",
//   "age":19
//   },
//   {"std_name":"medora","age":26
// }];
  
// const find=student.filter((user)=>{
//   return user.std_name==="medora"
// })
// console.log(find)
// //slice method not alter (not changes) the original array and has 2 values start index and end index it will take last value of index n-1
// const food = ['pizza', 'cake', 'salad', 'cookie'];
// const food1=food.slice(2,4)
// console.log(food1)

// // splice method alter the original array andd splice method 3 values first index second howmany elemen remove and 3rd add element
// //splice(start, optional delete count, optional items to add)

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// // const myFish1=myFish.splice(2,4)
// // console.log(myFish1);

// const myFish2=myFish.splice(-3,2)
// console.log(myFish2)



//  const obj1={a:1,b:3}
//  const obj2={b:4,c:4}
//  const result=Object.assign(obj1,obj2)
//  console.log(result)


//  //shallow copy and deep copy
//  // a variable copied to another variable on that time memory address of the original variable copied into another variable and not the actuall values. atlast both the variable referes to the same value.so when you make any change in the newvariable that mutates the original variable.

//  //you make copy of variable into another variable by using assignment operator on that time all the values along wutg the reference address of the original variable is copied to by into another variableat last both variables reer to the differenct reference values

//  //javascript does a deep copy for primitive data types


//  //first method JSON.stringify method gives full deepy copy but it work with functions.
//  let originalVal={"name":"john Doe","age":25,getAge:()=>{return this.age},
//  "address":{lane:"original address"}}


//  let copiedval=JSON.parse(JSON.stringify(originalVal))
// console.log(originalVal) 
// console.log(copiedval)

// copiedval.age=90;
// // console.log(originalVal)
// // console.log(copiedval)
// //second method object.Assign method

// let obj4={name:"sumalatha",age:89,address:{lane:"original lane"}}

// let obj5=Object.assign({},obj4)
// obj5.name="surya",
// obj5.address.lane="hello"
// console.log("obj4",obj4)
// console.log("obj5",obj5)

// //obj.assing provides partial deepcopy it work for nested data structure


// //third spread operator also provides partial deep copy won't work with nested data structure.
// let obj6={name:"sumalatha",age:89,address:{lane:"original lane"}}
// let obj7={... obj6}
// obj7.name="latha";
// obj7.age=78
// obj7.address.lane="lane78"
// console.log("obj6",obj6)
// console.log("obj7",obj7)

// //_.cloneDeep; it provides 100% deep copy

// let obj8={name:"sumalatha",age:89,address:{lane:"original lane"}}
// let arr1=["banana","orange","lemon","apple"]
// let arr2=[...arr1]
// arr2[0]="sapota"
// console.log(arr1)
// console.log(arr2)

// //for array use slice method 
// let arr3=["banana","orange","lemon","apple"]
// let arr4=arr3.slice()

// arr4[4]="watermelon"
// console.log(arr3)
// console.log(arr4)

// console.log(`${__dirname}`)
// console.log(`${__filename}`)



let obj9=_.cloneDeep(obj8)
obj9.address.lane="lane is updated"
console.log(obj8)
console.log(obj9)
