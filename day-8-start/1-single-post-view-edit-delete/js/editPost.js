import { getToken } from "./utils/storage";
import { GET_POST_BY_ID_URL } from "./settings/api";

const paramString = window.location.search;
console.log(paramString);
const searchParam = new URLSearchParams(paramString);
const postID = searchParam.get("post_id");
console.log(postID);
const accessToken = getToken();
const postTitle = document.querySelector("#postTitle");
const postBody = document.querySelector("#postDescription");
const editPostForm = document.querySelector("#edit-post-form");

async function getPostById() {
  const response = await fetch(`${GET_POST_BY_ID_URL}/${postID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
  const data = await response.json();
  console.log("data: ", data);
  postTitle.value = data.title;
  postBody.value = data.body;
}

getPostById();

editPostForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const postData = {
    title: postTitle.value,
    body: postBody.value,
  };
  console.log("postData: ", postData);

  async function editPost() {
    const response = await fetch(`${GET_POST_BY_ID_URL}/${postID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      location.href = `single-post.html?post_id=${postID}`;
    }
  }
  editPost();
});
