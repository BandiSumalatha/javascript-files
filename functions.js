//finding the number is even or odd

function isEven(num){
    if(num%2===0){
        return true
    }else{
        return false
    }
}
console.log(isEven(3))



//finding the 1st charcter of the string

function firstChar(value){
return value[4]
}
console.log(firstChar("hello"))

//finding the target in the array

function finding(arr,target){

    for (let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }else{
            return -1
        }
    }
}

console.log(finding([1,2,3,4],4))




//lexical scope
//it means the function checks the variable it is there or not inside the function if it is there prints the values
//else it will check outer function the same variable found it will print the value else if won't found then it will check the global scope
// the same variable found on global scope it will print.

let name="naresh"
function outerFunction(){
    // let name="sumalatha"
    function innerFunction(){
        let name="surya"
console.log(name,"inner function")
    }
    innerFunction()
    console.log("outer function",name)
}
outerFunction()


//let and const are block scoped
//var is functional scope

function findName(){
    let isMyName="suma";
  if (isMyName){
    console.log(isMyName)
  }
}
// console.log(isMyName) getting reference error because let is block scoped and for the lexical scope the top of the function no variable has been declared;

findName()


//default parameters 
//means it checks the a and b values are given or not if not given b value it take default parameter value

function addTwo(a,b){
    if(typeof b==="undefined"){
        b=9
    }
    return a+b;
}
console.log(addTwo(3))

//or
function Multiply(a,b=0){
    return a+b;
}

console.log(Multiply(4,5))

//call back function

function myFunction(callback){
console.log('hello world')
callback("sumalatha")
}

function Function2(name){
console.log(name)
}

myFunction(Function2)
//foreach method

const numbers=[4,6,7,8]
const newnumbers=numbers.forEach((number,index)=>{
    return number;
})

console.log(newnumbers)

//difference between map and foreach is
//foreach return undefined always which return null
//map method returns values;

const myArray=["hello","cat","dog","lion"]

const result=myArray.find((item)=>{
    return item.length===3;
})

console.log(result)

//every method checks the element in array staifies the condtion return true.If one of the element not satisifies return false

const enter=[2,4,6,9,10]

const everyMethod=enter.every((item)=>item%2===0)

//fillmethod
//value,start,end
const myArray1=new Array(5).fill(8)
console.log(myArray1)

const data=[1,2,3,4,4,55,56,8,97,5,9]
const filldata=data.fill("suma",1,9)
console.log(filldata)

//splice method
//start,delete,insert
const spilcemethod=data.splice(1,2,"suma");
//splice method will modify the original array
//string and arrays are iterables 
//in this we apply forof loop







