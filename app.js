let clicks = 0

const nav = document.querySelector("nav")
const navLinks = document.querySelector(".nav-links")
const navSearch = document.querySelector(".nav-search")

const hamburger = document.querySelector(".hamburger")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

const collapseMenu = () => {
    if(clicks%2 == 0)
    {
        nav.style.height = 25 + "rem"
        navLinks.style.display = "block"
        navSearch.style.display = "flex"

        hamburger.style.gridRowGap = "0px"
        line1.style.transform = "rotate(45deg)"
        line2.style.transform = "rotate(-45deg)"
        line3.style.transform = "rotate(45deg)"
    }
    else
    {
        nav.style.height = 4 + "rem"
        setTimeout(() => {
            navLinks.style.display = "none"
            navSearch.style.display = "none"
        }, 500);

        hamburger.style.gridRowGap = "5px"
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "rotate(0deg)"
        line3.style.transform = "rotate(0deg)"
    }
    clicks++;
}

document.querySelector(".hamburger-container").addEventListener("click", collapseMenu)