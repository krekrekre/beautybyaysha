document.addEventListener("DOMContentLoaded", function () {
  // Get the blog post ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find((post) => post.id === postId);

  if (blogPost) {
    // Update the page title
    document.title = `${blogPost.title} - Beauty by Aysha`;

    // Update the blog post content
    document.getElementById("blog-title").textContent = blogPost.title;
    document.getElementById("blog-date").textContent = blogPost.date;
    document.getElementById("blog-image").src = blogPost.image;
    document.getElementById("blog-image").alt = blogPost.title;
    document.getElementById("blog-content").innerHTML = blogPost.content;
  } else {
    // If no matching blog post is found, redirect to the blog page
    window.location.href = "./blog.html";
  }
});
