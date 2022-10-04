import { getToken } from "./utils/storage";
import { GET_POST_BY_ID_URL } from "./settings/api";

console.log(GET_POST_BY_ID_URL);
console.log(window.location.search);

const paramString = window.location.search;
const searchParams = new URLSearchParams(paramString);
const postID = searchParams.get("post_id");
console.log(postID);
const accessToken = getToken();

async function getPostById() {
  const response = await fetch(`${GET_POST_BY_ID_URL}/${postID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  console.log(data);
  console.log(response);
}
getPostById();
