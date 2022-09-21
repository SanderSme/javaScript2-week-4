//Example
function exampleFunction() {
  console.log("example function called");
}
function exampleFunction2() {
  console.log("example function 2 called");
}

function doSomethingWithCallback(callbackFunction) {
  //calling the function that is being passed
  callbackFunction();
}

doSomethingWithCallback(exampleFunction);
doSomethingWithCallback(exampleFunction2);

//Create a callback function which takes a function as an argument
//This callback function is whoIsEatingIceCream(callbackFuntion)

//showName(name) // console log // name is eating ice cream

function whoIsEatingIceCream(callbackFunction) {
  callbackFunction();
}

function showName() {
  console.log(`Hi, I am eating ice cream`);
}

whoIsEatingIceCream(showName);

//new example

const values = [5, 10, 15, 20];

function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}

const newValues = values.filter(isBiggerThan10);

console.log(newValues);
