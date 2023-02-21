const welcome = () => {
    console.log("Hello World !!!");
};

const onChangeBackgroundColor = () => {
    const body = document.querySelector(".js-body");
    const nameTheme = document.querySelector(".js-buttonName");
    body.classList.toggle("darkTheme");
    nameTheme.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
};

const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", onChangeBackgroundColor);
}

{
    init();
}