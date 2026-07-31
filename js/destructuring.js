// let items = ["clothes","laptop","plate","footware","bottle","bucket"]

// console.log(items[3])
// console.log(items[5])

// let [a, laptop, b , footware, c, d] = items
// console.log(a)
// console.log(d)

// let [,,plate] = items
// console.log(plate)

// let items = [["clothes","laptop","plate"],"footware","bottle","bucket"]


// let [[,laptop,plate],b,c] = items
// console.log(a)

// let [,laptop,plate] = a
// console.log(laptop)


let obj = {
    productName: "Mobile",
    productPrice: 25000,
    productDescription: "knjhgfdxz",
    production:{
        place:"Delhi",
        area:"Nehru Place"
    }
}

// let {productName,productPrice,productDescription}=obj
// console.log(productName)

let {productDescription,production:{place,area}} = obj
console.log(productDescription)
console.log(place)



let personDetails = {
    name:"Ravi",
    age:35,
    address:{
        place:"HYD",
        area:"Kondapur"
    },
    skills:{
        frontend:["HTML","CSS","JS","REACT JS"],
        backend:["PYTHON","JAVA","C"],
        database:["SQL","PLSQL","MONGO DB"]
    }
}
