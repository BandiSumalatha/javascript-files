// //call() and apply() are identical in functionality the only difference is that call() accepts list of arguments and whereas apply() accepts a single array of arguments
// //bind method binds the this value to the function and returns a new function. we still need to sparately invoke the returned function


// let userDetails={
//     name:"sumalatha",
//     age:"28",
//     designation:"software engineer",
//     printDetails:function(){
//        return `${this.name}` 
//     }
// }

// const data=userDetails.printDetails()
// console.log(data)


// let userDetails2={
//     name:"swathi",
//     age:34,
//     designation:"product manager",
    
// }

// const newData=userDetails.printDetails.call(userDetails2)
// console.log(newData)

let userDetails={
    name:"sumalatha",
    age:"28",
    designation:"software engineer",
    }

let printDetails=function(state){
    return `${this.name} and ${state}` 
 }
console.log( printDetails.call(userDetails,"delhi"))


let userDetails3={
    name:"ramulu",
    age:52,
    designation:"mason"

}


let printData=function(salary){
    return `${this.name} and ${this.age} and ${salary}`
}

console.log(printData.call(userDetails3,34999))

//apply similar to call only difference is passing arguments in an array

console.log(printData.apply(userDetails3,[45,56]))

//bind method is different it creates new function and we still needs to separetely invoke

let bindCopy=printData.bind(userDetails3,"45999","33434")
console.log(bindCopy())

//another Example
// function test (arg1,arg2){
//     console.log(this.num,arg1,arg2)
// }
// test.call({num:100},45,56)
function test (arg1,arg2){
    console.log(this.name,arg1,arg2)
}
test.apply({name:"sumalatha"},[12,34])


function test(arg){
    console.log(this.number,arg)
}
const data=test.bind({number:99},"suma","latha")
 data()

