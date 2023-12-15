let insan ={

    name: "zeeshan",
    age : "10"
}

console.log(insan.age)
console.log(insan["name"])

// we can explicitly define type of object

let student:{
    name: string;
    age:number;
}

student={
    name : "sanam marvi",
    age: 27,
}


 // it will not extra attribute
//  student={
//     name : "sanam marvi",
//     age: 27,
//     extraObject:54
// }


//Type Aliased  , by using interface or type we can use it again and again 



interface Person {
    name: string;
    age: number;
  }
   
  function greet(person: Person) {
    return "Hello " + person.name;
  }


// Type

  type Person1 = {
    name: string;
    age: number;
  };
   
  function greet1(person: Person) {
    return "Hello " + person.name;
  }  


  //it will add only already defined atttributes in person which are 2 only

  let bander : Person={
    name:"kingkond",
    age:10,
    //mango:99
  }


  //Option Properties, for this we use question mark 

  interface manager{
    name : string,
    subordinates?:number;
  }

  let bata :manager={
    name: "salman",
    subordinates:5
  }

  //without subordinate attributes

  let service:manager={
    name: "Bilal",
}

console.log(service)
console.log(bata)