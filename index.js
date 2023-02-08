async function GetInfoFromNasa() {
    const data = await fetch("")
    const response = await response.json();
    const contentEl = document.getElementById("container")
}
const container = document.getElementById("container")
const inputData = document.getElementById("userinput");
const button = document.getElementById("hämta");
const ajaxSpinner = document.querySelector("#ajaxSpinner");
let url;
url = "https://images-api.nasa.gov/search?q="
// url = "index.json"



button.addEventListener("click", () => {

    // ajaxSpinner.classList = "";
    // setTimeout(() => {
    //     content.textContent = "hej, så här ser responsen ut...";

    //     // dölj ajaxsspinner
    //     ajaxSpinner.className = "hidden";}, 2000)
    // använd det som står i sökfältet
    console.log(inputData.value);
    let search = inputData.value;
    // koppla värdet till urlen
    url = url + search
    console.log("söksträng", url)
let year = document.getElementById("year").value
   url = url+"&year_start="+year
   let yearEnd = document.getElementById("year-end").value;
   url = url+"&year_end="+year
   console.log("url med sökord och år", url)


    fetch(url)
        .then(response => response.json())
        .then((data) => {


            // let filteredData = data.collection.items.filter(item => new Date(item.data[0].date_created) > new Date("2002-01-01T00:00:00Z"))
            // console.log('filteredData', filteredData)
            // const yearInput = document.getElementById("year");


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
    document.getElementById("container").innerHTML += value.items[0].href

}
