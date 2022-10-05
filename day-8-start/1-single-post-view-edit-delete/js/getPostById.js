import { getToken } from "./utils/storage";
import { GET_POST_BY_ID_URL } from "./settings/api";

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const postId = searchParam.get("post_id");
const accessToken = getToken();
const postDetails = document.querySelector("#post-details");
console.log("accessToken", accessToken);
console.log("GET_POST_BY_ID_URL", GET_POST_BY_ID_URL);

console.log("postId", postId);

async function getPostById() {
  const response = await fetch(`${GET_POST_BY_ID_URL}/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("response: ", response);
  const data = await response.json();
  console.log("data: ", data);
  const title = data.title;
  const body = data.body;
  const created = data.created;
  const updated = data.updated;
  const id = data.id;
  postDetails.innerHTML = `
<ul>
    <li>Title : ${title}</li>
    <li>Body : ${body}</li>
    <li>ID : ${id}</li>
    <li>Created : ${created}</li>
    <li>Updated : ${updated}</li>
</ul>`;
}

getPostById();
