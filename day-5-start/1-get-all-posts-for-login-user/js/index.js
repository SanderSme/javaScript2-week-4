import "../style.css";
import createHeaderBar from "./components/createHeaderBar";
import { clearStorage } from "./utils/storage";
createHeaderBar();

const logOutBtn = document.querySelector("#logout-btn");

if (logOutBtn) {
  logOutBtn.addEventListener("click", function () {
    console.log("clicked");
    clearStorage();
    window.location.replace("./login.html");
  });
}
