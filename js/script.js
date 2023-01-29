console.log("Hello World");

let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let nameTheme = document.querySelector(".js-buttonName")

buttonElement.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    nameTheme.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
});