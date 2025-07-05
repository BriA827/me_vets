const postBtn = document.querySelector(".post_btn")
const postSelect = document.getElementById("posts")

const searchDiv = document.querySelector(".search")
const postDiv = document.querySelector(".post_div")
const postTitle = document.querySelector(".post_h2")
const postImg1 = document.querySelector(".post_img1")
const postTxt = document.querySelector(".post_txt")

postBtn.addEventListener("click", ()=>{
    postDiv.style.display = "flex"
    if (postSelect.value == "Department of Maine"){
        postTitle.textContent = postSelect.value
    } else {
        postTitle.textContent = "Post " + postSelect.value
        postImg1.src = "../post_images/post" + postSelect.value + ".png"} 
})
