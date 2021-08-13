
const toAllPosts = async (event) => {
    event.preventDefault();
    const postTitle = document.querySelector("#new-post-title").value;
}

await fetch(`/api/post/`, {
    method: 'GET',
   
      headers: {
        "Content-Type": "application/json"
      }   
})

document.querySelector("#new-post-title")
.addEventListener("submit", toAllPosts)
