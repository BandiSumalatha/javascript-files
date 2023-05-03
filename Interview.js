var person = {
    "name":"Ram",
    "age":27,
    "vehicles": {
       "car":"limousine",
       "bike":"ktm-duke",
       "plane":"lufthansa"
    }
 }

 const {vehicles:{bike}}=person;
 console.log(bike)


let user=["sumalatha",34,"kadapa",["female",50000]]

let [name,age,city,[gender,salary]]=user;
console.log(salary)





