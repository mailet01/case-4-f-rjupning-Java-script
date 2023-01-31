async function GetInfoFromNasa() {
    const data = await fetch("")
    const response = await response.json();
const contentEl =  document.getElementById("container")
}
const inputData = document.getElementById("userinput");
const button = document.getElementById("hämta");

button.addEventListener("click", () => {

    fetch("https://images-api.nasa.gov/search?q=planets")
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
    document.getElementById("container").innerHTML+= value.items[0].href
    
}