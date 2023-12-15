let insan = {
    name: "zeeshan",
    age: "10"
};
console.log(insan.age);
console.log(insan["name"]);
// we can explicitly define type of object
let student;
student = {
    name: "sanam marvi",
    age: 27,
};
function greet(person) {
    return "Hello " + person.name;
}
function greet1(person) {
    return "Hello " + person.name;
}
//it will add only already defined atttributes in person which are 2 only
let bander = {
    name: "kingkond",
    age: 10,
    //mango:99
};
let bata = {
    name: "salman",
    subordinates: 5
};
//without subordinate attributes
let service = {
    name: "Bilal",
};
console.log(service);
console.log(bata);
export {};
