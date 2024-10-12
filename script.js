const menuBtn = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")
const contentBox = document.querySelector(".content")
const container = document.querySelector(".container")
const greyFilter = document.querySelector(".grey")

menuBtn.addEventListener("click", () => {
    if (contentBox.style.display === "block") {
        contentBox.style.display = "none"
        greyFilter.style.display = "none"
    }
    else {
        contentBox.style.display = "block"
        greyFilter.style.display = "block"

    }
})
closeBtn.addEventListener("click", () => {
    contentBox.style.display = "none"
    greyFilter.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target !== closeBtn && e.target !== contentBox && e.target !== menuBtn && contentBox.style.display == 'block') {
        contentBox.style.display = 'none'
        greyFilter.style.display = "none"
    }
});
