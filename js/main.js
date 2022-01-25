var itemImg = Array.from(document.querySelectorAll('.item img'));
var boxContainer = document.getElementById("box-container");
var boxItem = document.getElementById("box-item");
var closeBtn = document.getElementById("close");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var currentIndex = 0;
for (var i = 0; i < itemImg.length; i++) {
    itemImg[i].addEventListener("click", function (e) {
        boxContainer.style.display = "flex";
        currentIndex = itemImg.indexOf(e.target);
        var clickedImg = e.target.getAttribute('src');
        boxItem.style.backgroundImage = `url(${clickedImg})`
    })
}


function closeBox() {
    boxContainer.style.display = "none"
}

closeBtn.addEventListener("click", closeBox);

boxContainer.addEventListener("click", function (e) {
    if (e.target.id == "box-container") {
        closeBox();
    }
})

function slideElement(x) {
    currentIndex += x;
    
    if (currentIndex == itemImg.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = itemImg.length - 1;

    }
    var nextImg = itemImg[currentIndex].src;
    boxItem.style.backgroundImage = `url(${nextImg})`
}
/* function prevElement() {
    currentIndex--;
    console.log(currentIndex)
    if (currentIndex < 0) {
        currentIndex = itemImg.length-1;
    }
    var prevImg = itemImg[currentIndex].src;
    boxItem.style.backgroundImage = `url(${prevImg})`
}
function nextElement() {
    currentIndex++;
        console.log(currentIndex)

    if (currentIndex == itemImg.length) {
        currentIndex = 0;
    }
    var nextImg = itemImg[currentIndex].src;
    boxItem.style.backgroundImage = `url(${nextImg})`
} */


prevBtn.addEventListener("click", function () {
    slideElement(-1);
    //prevElement()
});




nextBtn.addEventListener("click", function () {
    slideElement(1);
    //nextElement()
});



document.addEventListener("keyup", function (e) {
    if (e.code == "ArrowLeft") {
        slideElement(-1);

    }
    else if (e.code == "ArrowRight") {
        slideElement(1);

    }
    else if (e.code == "Escape") {
        closeBox()
    }

})