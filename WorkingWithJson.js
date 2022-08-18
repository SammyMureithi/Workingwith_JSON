// lets have aour object variable wish we can now can now covert back to Json data
const myObject = {
    name: "Mure",
    age: 21,
    wife: null,
    tall:true
}
//we could use JSON.Stringfy() method to convert from Object to Json Data
const myConvertedToJson = JSON.stringify( myObject )
//let's see the results
console.log( myConvertedToJson )
  /**
   * Observe carefuly what we get as our results
   * {"name":"Mure","age":21,"wife":null,"tall":true}
   */
//we could also stringfy array
const myArray = ["John", "Peter", "Sally", "Jane"];
const myConvertedArrayToJSON = JSON.stringify( myArray )
console.log( myConvertedArrayToJSON )

//Looks closely how date objects are treated when converted to JSON
const myDateObject = {
    name: "John",
    today: new Date(),
    city: "New York"
}
const myConvertedDateObjectTOJSON = JSON.stringify( myDateObject )
console.log( myConvertedDateObjectTOJSON )
/**
 * Here's what we get as our results
 *  {"name":"John","today":"2022-08-18T23:17:51.413Z","city":"New York"}
 */

//Let's now look at what happens when we stringify function objects
const myFuncObj = { name: "John", age: function () { return 30; }, city: "New York" };
//let's first convert the function to string then convert the object to JSON
myFuncObj.age=myFuncObj.age.toString()
const myConvertedFuncObj = JSON.stringify( myFuncObj );
console.log( myConvertedFuncObj );