import { getUserName } from "../utils/storage";

function createHeader() {
  const navBar = document.querySelector("#nav-bar");
  console.log(navBar);
  const user = getUserName();
  const { name } = user;
  console.log("userName: ", name);

  let authLink = `<a href="./login.html">LogIn</a>`;
  console.log(user);
  if (user.name) {
    authLink = `<span>Hei ${name}</span>`;
  }

  navBar.innerHTML = `
  <ul class="flex gap-x-4">
    <li class="p-8">
        <a href="./index.html">Home</a>
    </li>
    <li class="p-8">
        ${authLink}
    </li>
</ul>`;
}

export default createHeader;
