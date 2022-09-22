// function trySomething() {
//   console.log("Hello tomato api tomato");
// }

// try {
//   trySomething();
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("run code after anyways");
// }

// async function getUsers() {
//   try {
//     const data = await fetch("https://reqres.in/api/users");
//     const dataJSON = await data.json();
//     console.log(dataJSON);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("API call is done");
//   }
// }

// getUsers();

// doFetch('https://jsonplaceholder.typicode.com/todos/1'),
// doFetch('https://jsonplaceholder.typicode.com/todos/2'),
// doFetch('https://jsonplaceholder.typicode.com/todos/3')

async function doFetch(url) {
  try {
    const data = await fetch(url);
    const dataJSON = await data.json();
    console.log(dataJSON);
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
}

// doFetch("https://jsonplaceholder.typicode.com/todos/3");
async function main() {
  const data = await Promise.all([
    doFetch("https://jsonplaceholder.typicode.com/todos/1"),
    doFetch("https://jsonplaceholder.typicode.com/todos/2"),
    doFetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);
  console.log(data);
}
main();
