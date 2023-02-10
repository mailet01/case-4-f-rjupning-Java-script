// skapar en assymkrom funktion
async function GetInfoFromNasa() {
    // skapar en variabel för fetch
    const data = await fetch("")
    // skapar en variabel för responsen av sökningen av data
    const response = await response.json();
    // skapar en variabel för divelementet i HTML-filen
    const contentEl = document.getElementById("container")
}

// skapar en variabel för sökfältet
const inputData = document.getElementById("userinput");
// skapar en variabel för knappen hämta data
const button = document.getElementById("hämta");
const ajaxSpinner = document.querySelector("#ajaxSpinner");
// deklarerar en variabel för url:n
let url;
// lägger in själva url:n till mitt API
url = "https://images-api.nasa.gov/search?q="
// url = "index.json"



// skapar en händelselyssnare för knappen "hämta data"
button.addEventListener("click", () => {

    ajaxSpinner.classList = "";
    setTimeout(() => {
        

// dölj ajaxsspinner
        ajaxSpinner.className = "hidden";}, 2000)
    // använd det som står i sökfältet
    // loggar ut det som har sökts på sidan
    console.log(inputData.value);
    let search = inputData.value;
    // koppla värdet till URL:n
    url = url + search
    console.log("söksträng", url)
    // deklarerar en variabel för att kunna filtrera på år
    let year = document.getElementById("year").value
    // start år att filtrera på
    url = url + "&year_start=" + year
    // deklarerar en variabel för slutåret att filtrera på
    let yearEnd = document.getElementById("year-end").value;
    // slutåret att filtrera på:
    url = url + "&year_end=" + yearEnd
    // tömmer inputfältet    // 
    inputData.value = "";

    // metoden fetch
    fetch(url)
        // svaret från sökningen
        .then(response => response.json())
        .then((data) => {

            console.log(data.collection.items)
            data.collection.items.forEach(item => {
                // variabel för texten på sidan
                const description = item.data[0].description
                // variabel för mediatypen
                const media_type = item.data[0].media_type
                // variabel för bilden på sidan
                const image = item.links[0].href
                // variabel för bildbeskrivning
                const imageDescription = item.data[0].description
                // data till domen
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
