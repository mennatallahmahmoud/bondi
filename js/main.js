let navLis = Array.from(document.querySelectorAll("nav .navbar-nav li"));
let navLinks = Array.from(document.querySelectorAll("nav .navbar-nav li a"));
let portfolioItems = Array.from(document.querySelectorAll(".works ul li"));
let portfolioBoxes = Array.from(document.querySelectorAll(".works .row > div > div"));
let scrollBtn = document.querySelector(".scroll-top");
let copyrightYear = document.querySelector("footer .info .copyright span:nth-of-type(2)");

navLis.forEach((li) => {
    li.addEventListener("click", function (i) {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
        this.children[0].classList.add("active");
    });
});

portfolioItems.forEach((i) => {
    i.addEventListener("click", function() {
        portfolioItems.forEach((item) => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

portfolioItems.forEach((item) => {
    item.onclick = function () {
        portfolioBoxes.forEach((box) => {
            if (item.dataset.sector == "all") {
                box.parentElement.style.display = "block";
            } else if (item.dataset.sector === box.dataset.sector) {
                box.parentElement.style.display = "block";
            } else if (item.dataset.sector !== box.dataset.sector) {
                box.parentElement.style.display = "none";
            };
        });
    };
});

window.onscroll = function() {
    if (window.scrollY >= 1500) {
        scrollBtn.style.right = "50px";
    } else {
        scrollBtn.style.right = "-100px";
    }
};

scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    navLinks[0].classList.add("active");
});


copyrightYear.innerHTML = new Date().getFullYear();


