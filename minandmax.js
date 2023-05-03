const arr=[4,44,5,6,7,56]
const newarr=arr.reduce((i,c)=>{
    return Math.max(i,c)
})
console.log(newarr)


//converting array into obj

var techbrands=["facebook", "apple", "amazon","netfilx","google"]
var object={...techbrands}
console.log(object)


//fill array with data

var newArray=new Array(3).fill("hello")
console.log(newArray)

//removing duplicates from an array

var array=["netflix","netflix","netflix","netflix","google"]
var uniqueArr=[...new Set(array)]
console.log(uniqueArr)

//or

var UniqueArr=Array.from(new Set(arr))
console.log(UniqueArr)


let x=4;
let y=3;

let result=x**y;
console.log(result)