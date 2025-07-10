const images = [
    "../images/PannerShop-1.jpg",
    "../images/PannerShop-2.jpg",
    "../images/PannerShop-3.jpg",
    "../images/PannerShop-4.jpg",
    "../images/PannerShop-5.jpg",
    "../images/PannerShop-6.jpg"
]

let index = 0;

function showImage() {
    const imgElement = document.getElementById("slideImage");
    imgElement.src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}


document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(function (heart) {
        heart.addEventListener("click", function () {
            this.classList.toggle("liked");
        });
    });
});

