async function GetInfoFromNasa() {
    const data = await fetch("")
    const response = await response.json();
const contentEl =  document.getElementById("container")
}
const container = document.getElementById("container")
const inputData = document.getElementById("userinput");
const button = document.getElementById("hämta");
let url; 
url = "https://images-api.nasa.gov/search?q="
// url = "index.json"



button.addEventListener("click", () => {
// använd det som står i sökfältet
console.log(inputData.value);
let search = inputData.value;
// koppla värdet till urlen
url = url+search
console.log("söksträng", url)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
        
            // console.log("data", data);
            console.log(data.collection.items)
            data.collection.items.forEach(item => {
                // console.log("item", item.data[0].description)
                const description = item.data[0].description
                const media_type = item.data[0].media_type            
                const image = item.links[0].href
                const imageDescription = item.data[0].description
                 container.innerHTML += `<p>${description}</p> <img src="${image}" alt="${imageDescription}">`
            });
            for (const key in data) {

                render(key, data[key])
            }
        });

});

function render(property, value) {
    console.log("property", property, "value", value)
    document.getElementById("container").innerHTML+= value.items[0].href
    
}
