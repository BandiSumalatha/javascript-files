let number=123;
let result=0;

while(number>0){
 result=result*10+number%10;

number=Math.floor(number/10);
}
 console.log(result)

