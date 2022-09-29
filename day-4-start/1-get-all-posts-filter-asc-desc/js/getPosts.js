import { getToken } from "./utils/storage";
import { GET_POSTS_URL } from "./settings/api";
import moment from "moment";

const postsContainer = document.querySelector("#posts-container");
// console.log("URL: ", GET_POSTS_URL);
// console.log("postsContainer: ", postsContainer);

const accessToken = getToken();
// console.log("accessToken: ", accessToken);

(async function getAllPosts() {
  const response = await fetch(GET_POSTS_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  //   console.log("response: ", response);

  if (response.ok) {
    const posts = await response.json();
    // console.log(posts);
    let now = moment(new Date());
    const listOfHTMLPosts = posts
      .map((post) => {
        // console.log(post);
        const postTitle = post.title;
        const postBody = post.body;
        const createdDate = post.created;
        const hoursSinceCreated = now.diff(createdDate, "hours");
        // console.log("TITLE: ", postTitle);
        // console.log("BODY: ", postBody);
        return `
      <li
            class="relative px-4 py-5 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
          >
            <div class="flex justify-between space-x-3">
              <div class="flex-1 min-w-0">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">
                    ${postTitle}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Velit placeat sit ducimus non sed
                  </p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
                >${hoursSinceCreated}h ago
              </time>
            </div>
            <div class="mt-1">
              <p class="text-sm text-gray-600 line-clamp-2">
                ${postBody}
              </p>
            </div>
          </li>`;
      })
      .join("");
    // console.log("listOfHTMLPosts: ", listOfHTMLPosts);
    postsContainer.insertAdjacentHTML("beforeend", listOfHTMLPosts);
  } else {
    const err = await response.json();
    throw new Error(err);
  }
})().catch((err) => {
  console.log(err);
  console.log("get posts failed:(((");
});
