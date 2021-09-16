const elements = document.querySelectorAll(".faq-item")

elements.forEach(function (el) {

    el.addEventListener("click", function () {
        if (el.querySelector(".text-shown")) {
            el.querySelector(".title-bold").classList.remove("title-bold")
            el.querySelector(".arrow-up").classList.remove("arrow-up")
            el.querySelector(".text-shown").classList.remove("text-shown")
        } else {
            el.querySelector(".title").classList.add("title-bold")
            el.querySelector(".arrow").classList.add("arrow-up")
            el.querySelector(".text").classList.add("text-shown")
        } 

    })

})

