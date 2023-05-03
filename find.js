
const names=["suma","uma","jeevana","ramana"]
const find=names.find(item=>{
    return item==="suma"
})
console.log(find)



const persons=[{name:"florin",
age:24},
{name:"ivan",
age:18},
{name:"sultan",
age:45}]

const find1=persons.find(item=>{
    return item.name==="sultan"
})
console.log(find1)

var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) {
  return element > 10;
});
console.log(found)