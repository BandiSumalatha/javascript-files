const array=[0,1,2,3,4,5,6]
//splice(start index, delete, add)
//it will manipulate original array
 const res=array.splice(3,4,7)
 console.log(res)//3456
 console.log(array)//01278


//slice method takes(start index,end index)
//slice method wont manpuliate orginal array

const resp=array.slice(-3,-2)
console.log(resp)//5,6
console.log(array)