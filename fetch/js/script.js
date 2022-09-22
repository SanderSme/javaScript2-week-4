// fetch("", {});

console.log(fetch("https://reqres.in/api/users"));

const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Kevin" }),
};

fetch("https://reqres.in/api/users", fetchOptions)
  //   .then((res) => res.json())
  .then((res) => {
    if (res.ok) {
      console.log("success");
      return res.json();
    } else {
      console.log("RIP:(");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("there is an error:(", error));
