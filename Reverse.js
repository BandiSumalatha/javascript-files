//reversing a number
const reverse=(num)=>{
const result=num.toString().split("").reverse().join("");
console.log(result)
}
reverse(123)

let num=123; let value=0;
while(num!==0){
    value=value*10 + num%10;
    num=Math.floor(num/10);
    console.log(value)
}
