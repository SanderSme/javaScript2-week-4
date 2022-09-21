// const myPromise = new Promise((resolve, reject) => {
//   const shouldResolve = true;
//   if (shouldResolve) {
//     // If the code inside of the promise was able to do what
//     // it needed to do, then it will call this 'resolve' callback
//     resolve("Promise resolved successfully");
//   } else {
//     // If the code inside of the promise failed to do what
//     // it needed to do then it will call this 'reject' callback
//     reject("Promise has failed");
//   }
// });

// myPromise.then((result) => {
//   // Logs either the 'resolve' or 'reject' returns based on
//   // whether the promise succeeded or failed
//   console.log(result);
// });

//Example api
// We fetch the data from the URL

let statusMessage = document.getElementById("status-message");
let isLoading = true;
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    isLoading = false;
    statusMessage.innerHTML = "Loaded";
  });
