
const toAllPosts = async (event) => {
    event.preventDefault();
    const postTitle = document.querySelector("#new-post-title").value;
    const postBody = document.querySelector("#new-post-body").value;
}

await fetch(`/api/post/:id`), {
    method: 'POST',
      body: JSON.stringify({
      title,
      body
      }),
      headers: {
        "Content-Type": "application/json"
      }
}

document.querySelector("#new-post-title")
.addEventListener("submit", )
