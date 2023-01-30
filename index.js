async function GetInfoFromNasa() {
    const data = await fetch("")
    const response = await response.json();
    document.getElementById("container")
}
const inputData = document.getElementById("userinput");
const button = document.getElementById("hämta");

button.addEventListener("click", () => {

    fetch("GET /search?q={q}")
        .then(response => response.json())
        .then((data) => {
            console.log("data", data);
            for (const key in data) {

                render(key, data[key])
            }
        });

});

function render(property, value) {
    console.log("property", property, "value", value)
    let h4 = document.createElement("h4");
    h4.textContent = "property"
    let p = document.createElement("p");
    let ul = document.createElement("ul");
    ul.innerHTML = value.map(val => `<li>${val}</li>`.join(""))
    p.appendChild(li)

}



