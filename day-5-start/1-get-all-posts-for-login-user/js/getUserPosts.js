import moment from "moment";
import { GET_USER_POSTS_URL } from "./settings/api";
import { getToken } from "./utils/storage";

let now = moment(new Date());
const postsContainer = document.querySelector("#posts-container");
const accessToken = getToken();

(async function getUserPosts() {
  const response = await fetch(GET_USER_POSTS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("response: ", response);
  if (response.ok) {
    const jsonResponse = await response.json();
    const { posts } = jsonResponse;
    console.log(jsonResponse);
    console.log("posts: ", posts);
    console.log("got the posts very nice");
    let postLength = posts.length;
    for (let i = 0; i < postLength; i++) {
      console.log(posts[i].body);
      const { created } = posts[i];
      const minutesSincePosted = now.diff(created, "hours");
      postsContainer.innerHTML += `
      <li class="relative px-4 py-5 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
      <div class="flex justify-between space-x-3">
          <div class="flex-1 min-w-0">
              <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Gloria Roberston</p>
                  <p class="text-sm text-gray-500 truncate">${posts[i].title}</p>
              </a>
          </div>
          <time datetime="2021-01-27T16:35" class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap">${minutesSincePosted} h
              ago
          </time>
      </div>
      <div class="mt-1">
          <p class="text-sm text-gray-600 line-clamp-2">${posts[i].body}</p>
      </div>
  </li>
  `;
    }
  } else {
    const err = await response.json();
    console.log("Rip the posts:(");
    console.log(err);
  }
})();
