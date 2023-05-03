const numbers = [2, 4, 6];
const sum = numbers.reduce((intial, current)=> {
  console.log(`${intial} ${current}`)
  const updatedSum = intial + current;
   return updatedSum;
}, 0);
// console.log(sum)

//finding the greatest num in an array using reduce methodd
const number = [2, 4, 16, 8];

const greatest = number.reduce(function (acc, num) {
  const greatvalue=(acc>num)? acc:num
  return greatvalue;
})


const smallest =number.reduce((a,b)=>(a<b)?a:b)
console.log(smallest,"smallest")

//finding min and max value in js using reduce method
const maxvalue=number.reduce((a,b)=>Math.max(a,b))
console.log(maxvalue)
const minvalue=number.reduce((a,b)=>Math.min(a,b))
console.log(minvalue)

const obj={empid:001,ename:"helen", role:"developer"}
console.log(Object.keys(obj).length);






// //finding sum
//  const euros = [29.76, 41.85, 46.5];
// // const sum=euros.reduce((intial,current)=>intial+current)
// // console.log(sum)
// // //finding avg

// const avg=euros.reduce((intial,current,index,array)=>{
//  console.log(index,"index")
//     // total=intial+current;
//     // if(index===array.length-1){
//     //     return total/array.length
//     // }else{
//     //     return total;
//     // }
// })
// // console.log(avg)

// // const average = euros.reduce((total, amount, index, array) => {
// //     total += amount
// //     return total/array.length
// //   }, 0)
// //   console.log(average)

// //   const euros = [29.76, 41.85, 46.5];

// const doubled=euros.reduce((initial,current)=>{
//      initial.push(current*1)
//      return initial;

// },[])
// console.log(doubled)

// const above30=euros.reduce((intial,current)=>{
// if(current>30){
//     intial.push(current);
// }
// return intial;
// },[])
 
// console.log(above30)

// const fruitBasket = ['banana', 'cherry', 'orfange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// const count=fruitBasket.reduce( (tally, fruit) => {
  
//   tally[fruit]=(tally[fruit]&&0)+1
//     return tally
    
//  }, {})
//  console.log(count)

//  var emp = {};
// if(Object.keys(emp).length===0){
//     Object.assign(emp,{name:"",age:""})
// }
// console.log(emp);
// // function increment(input) { return input + 1;}

// // function decrement(input) { return input -1 }

// // function double(input) { return input * 2; }

// // function halve(input) { return input / 2; }

// // let pipeline = [halve, double, decrement,increment];
// // const result=pipeline.reduce((total,fun)=>{
// //     return fun(total)
// // },1)

// // console.log(pipeline)

// const arr=fruitBasket.reduce((tally, fruit) => {
//     if (!tally[fruit]) {
//       tally[fruit] = 1;
//     } else {
//       tally[fruit] = tally[fruit] + 1;
//     }
//     return tally;
//   }, {});  
//   console.log(arr)
// //flattering an array

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const flat=data.reduce((intial,current)=>{
// return intial.concat(current)
// })
// console.log(flat)

// const data1 = [
//     {a: 'happy', b: 'robin', c: ['blue','green']}, 
//     {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
//     {a: 'sad', b: 'goldfish', c: ['green','red']}
//   ];

// const colors=data1.reduce((intial,current)=>{
//     console.log(intial,current)
//     current.c.map(item=>intial.push(item))
//     return intial;
// },[])
// // console.log(colors)

// const uniqueColors=data1.reduce((intial,current)=>{
// current.c.forEach(color=>{
// if(intial.indexOf(color)===-1){
//     intial.push(color)
// }
// })
// return intial;
// },[])
// console.log(uniqueColors)
// //finding unique oject in the array using reduce method
// const names=[{id:1,name:"suma"},{id:2,name:"suma"}]
// const unique=names.reduce((intial,current)=>{
//     if(intial.indexOf(current.name)===-1){
//         intial.push(current)
//     }
// },[])

// console.log(unique)
// //for loop
// // let arr1 = ['John', 'Paul', 'George', 'John', 'Ringo', 'George'];

// // let newarr1=[]

// // for (let i=0; i<arr1.length;i++){
// //   console.log(arr1[i])
// //   let uniquearr=[]
// //   if(uniquearr.indexOf(arr1[i])===-1){
// //     uniquearr.push(arr1[i])
// //   }
// //  }


// let Arr=[]
// const day=arr1.forEach((element)=>{
//   if(Arr.includes(element)===false){
//     Arr.push(element)
//   }
// })


// console.log(Arr)