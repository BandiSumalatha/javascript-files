// let counter =1;
// function demo (number){
//     if(counter>number){
//         return;
//     }
//     console.log(counter)
//     counter++
//     demo()
// }

// demo(9)

// function CountDown (number){
// console.log(number)
// const newNumber=number-1;
// if(newNumber>0){
//     CountDown(newNumber)
// }
// }

// CountDown(9)








//the best example for recursion is factorial of num

function fact(num){
    if(num==0){
        return 1;
    }
    else{

        return num *fact(num-1)
    }
}

let result=fact(6)
console.log(result)


function myName(num){
    if(num>0){
        for(let i=0; i<=num; i++){
console.log("hello world"+i)
            }
    }else{
let string="this is last stage";
console.log(string)
return myName();
}
}
let res=myName(5)


