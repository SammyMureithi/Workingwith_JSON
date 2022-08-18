const myJSON = '{"name":"John", "age":30, "car":null}';
//we can convert JSON data to object using the JSON.parse() method
const myObject = JSON.parse( myJSON )
console.log( myObject );
//we could also convert JSON Arrray
const myJsonArray = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse( myJsonArray )
console.log(myArray)