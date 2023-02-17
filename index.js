const contentEl = document.getElementById("container")
// skapar en assymkrom funktion
async function GetInfoFromNasa(evt) {
    // skapar en variabel för fetch
    const data = await fetch("")
    // skapar en variabel för responsen av sökningen av data
    const response = await response.json();
    // skapar en variabel för divelementet i HTML-filen

}

// skapar en variabel för sökfältet
const inputData = document.getElementById("userinput");
// skapar en variabel för knappen hämta data
const button = document.getElementById("hämta");
const ajaxSpinner = document.querySelector("#ajaxSpinner");
// deklarerar en variabel för url:n

// lägger in själva url:n till mitt API
let baseUrl = "https://images-api.nasa.gov/search?q="
// baseUrl = "index.json"

// skapar en händelselyssnare för knappen "hämta data"
button.addEventListener("click", () => {
    ajaxSpinner.classList = ""
    contentEl.innerHTML = ""
    // dölj ajaxsspinner
    ajaxSpinner.className = "hidden";
    // skapar ett vilkor som kontrollerar om inputfältet innehåller minst 2 tecken
    if (inputData.value.length < 2) {
        alert("du måste skriva in minst 2 tecken")

    } else {
        // loggar ut det som har sökts på sidan    
        console.log(inputData.value);
        // tömmer inputfältet    //     
        let search = inputData.value;
        inputData.value = "";
    
        // koppla värdet till URL:n
        // baseUrl = baseUrl + search

        // deklarerar en variabel för att kunna filtrera på år
        let year = document.getElementById("year").value
        // start år att filtrera på
        // baseUrl = baseUrl + "&year_start=" + year
        // deklarerar en variabel för slutåret att filtrera på
        let yearEnd = document.getElementById("year-end").value;
        // slutåret att filtrera på:
        // baseUrl = baseUrl + "&year_end=" + yearEnd
        
        // tömma inputfältet
        // metoden fetch
        fetch(`${baseUrl}${search}&year_start=${year}&year_end=${yearEnd};`)
            // svaret från sökningen
            .then(response => response.json())
            .then((data) => {
                ajaxSpinner.classList = "hidden"
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
                    url = `${baseUrl}${search}&year_start=${year}&year_end=${yearEnd};`
                    container.innerHTML += `<p>${description}</p> <img src="${image}" alt="${imageDescription}">`

                });
                for (const key in data) {

                    render(key, data[key])
                }
            });

    }

})

function render(property, value) {

    document.getElementById("container").innerHTML += value.items[0].href

}