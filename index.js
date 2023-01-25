
async function GetInfoFromNasa() {
const data = await fetch('https://api.nasa.gov/planetary/apod?api5u5zxlHOP7rkZVQUfDMRaJ9nUQYA3zJrDmaPlV95_=)')
.then((Response) => Response.json())
console.log(data.then)


document.getElementById("container");
}
