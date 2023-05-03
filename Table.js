// writing a 8 table using javascript

for(let i=1;i<=10; i++){
    let tableOf=8;
    console.log(`${tableOf} * ${i}=${tableOf*i}`)
}

// const sum=(a,b)=>{
//     return a+b;
// }
// let value=sum(4,5)
// console.log(value)

const sum=()=>`ths sum of two nums ${(a=6)+(b=7)}`
console.log(sum())

var friends=['vinod',"ramesh","chandra"]

for(let elements of friends){
    console.log(elements)
}

for (let i=0;i<friends.length; i++){
    console.log(friends[i])
}

friends.forEach((elements,index,array)=>{
    console.log(elements+" index : "+index+""+array)
})


for(let i=1; i<=10; i++){
    let num=10
    console.log(num+"*"+i+"="+num*i)
}



