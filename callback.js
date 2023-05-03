

// const getuser=(call)=>{
//     call(555)
// }

// const sayName=(number)=>{
// console.log(`my name is sumalatha ${number}`)
// }

// getuser(sayName)


const order=(call)=>{
console.log("wait a moment")
call()
console.log("congrass your order sucess")
console.log("keep shoping")
}

const conform=()=>{
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}

order(conform)



const EmpData=(neEmp,name)=>{
neEmp(new Date())
}

const newEmployees=(date)=>{
    let emp=18;
    if(emp>18){
        console.log("senior")
    }else if(emp==18){
        console.log("teen age")
    }else{
        console.log("consider mature")
    }
console.log(`this is my ${date}`)
}

EmpData(newEmployees,"sreenavasa")



