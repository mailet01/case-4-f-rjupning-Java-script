
async function GetInfoFromNasa() {
    const inputData = document.getElementById("userinput");
}
const button = document.querySelector("#button");
button.addEventListener("click", => {
fetch("https://api.nasa.gov/planetary/apod?api_key=5u5zxlHOP7rkZVQUfDMRaJ9nUQYA3zJrDmaPlV95")
.then((response) => response.json())
})