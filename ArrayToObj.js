
//there are 4 method to convert array to object
//1.Object.assign
const names = ['Alex', 'Bob', 'Johny', 'Atta']

const obj=Object.assign({},names)
console.log(obj)

//2.spread operator

console.log({... names})

//Array.forEach

const fewnames= ['Alex', 'Bob', 'Johny', 'Atta']
let object={}
fewnames.forEach((item,i)=>{object[i]=item})
console.log(object)

const props = [
    ['name', 'John Doe'],
    ['age', 29]
  ]

  const objectConvert=Object.fromEntries(props)
console.log("hello")
  const flating=props.flat()
  console.log(flating,"flating")
// const OjectNew=Object.fromEntries(props)
// console.log(OjectNew)

// comma operator

 //comma operator takes two values one is to update and second for printing the value
let x=9; let y=8;
x=(x++ , y)
console.log(x)