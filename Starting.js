//reference error will come in Undeclared or Undefined Variable

//  console.log(a)

// //wrong scope:

// function name(){
//     let a=10;

// }
// console.log(a)
// name()

//right code

function sum(a,b){
var x=a+b
console.log(x)
}
sum(4,5)

//inorder to remove space in the string we use trim method()


var name="    sumalatha  "
console.log(name.length)
name=name.trim()
console.log(name.length)

//converting string to number

var num="22"
console.log(typeof(num))
num= +num
console.log(typeof(num))
//converting num to string;

var number=45;
console.log(typeof(number));
number=number+""
console.log(typeof(number));
//or
//converting num to string using String(num)
let age=45;
age=String(age);
console.log(typeof(age))

let string="67";
string =Number(String);
console.log(typeof(string))
//template string
var names="akshita"; var ages=45;
let newString=`my name is ${names} and ages ${ages}`



//falsy values
//null, "", false, undifined ,0

let m="";
if(m){
    console.log("m is updated")
}else{
    console.log("else value is print")
}


let child=10;
let result=child>=10?"coffiee":"tea"
console.log(result)

let likes=300;
if(likes>300){
console.log("rating we can give 5 star")
}else if(likes===300){
    console.log("rating we can give 3 to 4 star")
}else{
    console.log("ratings we can give 2 star");
}


// let cricketer=100;
// //we nee to add +because the typeof will take as string because prompt value is string
// //inorder to convert string to number we need to add +
// let score=+prompt("enter your score")
// if(score<100){
//     console.log("there is chance to loose the game")
// }else if(score===100){
//     console.log("the won the match with 100 score")
// }else {
//     console.log("cont predict either win or loose")
// }


let item=3

let newItem=item++ + 0;
console.log(newItem)

//while loop

// let i=6;
// while(i<=9){
//     console.log(i)
//     i++
// }
// console.log(`after checking condition i is ${i}`)


let j=0;
let total=0;

// while(j<=10){
//     total=total+j;
//     j++;
//     // console.log(total)
// }
// console.log(total)

// let obj={name:"suma"}
// console.log(typeof obj)


let array=[12,45,5,67,8,8]

// for loop if declare var we can access i outside the function
// but if we  declare let we can access i only inside of the function.

for(let i=0; i<9; i++){
    console.log(i,"inner")
}
for(let i=0; i<5; i++){
    console.log(i,"inner")
}
//  console.log(i,"outer")

 //break and continue in for loop

 //break is used to stop execution according to given condition. continue is used to tell continue the execution checking the condition.

//  for (let k=0; k<5; k++){
//     if(k===3){
//         break
//     }
//     console.log(k)
//  }

 for (let k=0; k<5; k++){
    if(k===3){
        continue;
    }
    console.log(k)
 } 

 
//while loop and do while loop difference
//while loop checks the condition first and perform the operation later;
//coming to do while loop it excutes the body first and later checks the condition;

let x=0
while(x<8){
    x++
    console.log(x,"x")
}
x=10
do{
    console.log(x)
    x++
}while(x<8)
console.log(`printing x value ${x}`)

//ordered collection of items called array
//OBJECT LITERALS: means we get array and object types both will get object this is called object literal;
const arr=[1,2,3,4,4]
console.log(typeof arr)
console.log(Array.isArray(arr))


let str="this is very important"
str=str[0]="t";
console.log(str)