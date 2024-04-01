let pages = document.querySelector("#pages")
let image = document.querySelector("#image")
let turnLeft = document.querySelector("#turnLeft")
let turnRight = document.querySelector("#turnRight")

let increment = 0

let images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
]


for (let index = 1; index < images.length + 1; index++) {
    pages.innerHTML +=
        `
    <div class="element">`+ index + `</div>
    `
}


turnLeft.addEventListener("click", (event) => {
    if (increment != 0) {
        increment--
    } else {
        increment = images.length - 1
    }
    image.src = "img/" + images[increment]

    Array.from(pages.children).forEach(element => {
        if (increment == Array.from(pages.children).indexOf(element)) {
            element.classList.add("highlite")
        } else {
            element.classList.remove("highlite")
        }

    });
})

turnRight.addEventListener("click", (event) => {
    if (increment != images.length - 1) {
        increment++
    } else {
        increment = 0
    }
    image.src = "img/" + images[increment]

    Array.from(pages.children).forEach(element => {
        if (increment == Array.from(pages.children).indexOf(element)) {
            element.classList.add("highlite")
        } else {
            element.classList.remove("highlite")
        }

    });
})