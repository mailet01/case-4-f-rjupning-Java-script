async function GetInfoFromNasa() {
const data = await fetch("")
const response = await (response.json)    
document.getElementById("container")
}
const inputData = document.getElementById("userinput");
const button = document.getElementById("hämta");
button.addEventListener("click", () => {
fetch("https://api.nasa.gov/planetary/apod?api_key=5u5zxlHOP7rkZVQUfDMRaJ9nUQYA3zJrDmaPlV95")
.then(response => response.json())
console.log(data)
})