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
// let dateString = "2016-01-20T00:00:00Z";
// let date = new Date(dateString);
// dateString = "2017-06-20T00:00:00Z";
// date = new Date(dateString);
// dateString = "2003-06-20T00:02:58Z";
// date = new Date(dateString);
// dateString = "2017-02-23T00:00:00Z";
// date = new Date(dateString);
// dateString = "2005-03-14T13:55:00Z";
// date = new Date(dateString);
// dateString = "2008-02-25T13:50:45Z";
// date = new Date(dateString);
// dateString = "2008-06-05T12:50:52Z";
// date = new Date(dateString);
// dateString = "2011-08-25T21:00:54Z";
// date = new Date(dateString);
// dateString = "2007-04-11T16:55:50Z";
// date = new Date(dateString);
// dateString = "2017-11-15T00:00:00Z";
// date = new Date(dateString);
// dateString = "2010-03-31T19:03:37Z";
// date = new Date(dateString);
// dateString = "2006-02-07T13:50:01Z";
// date = new Date(dateString);
// dateString = "2011-06-17T16:00:00Z";
// date = new Date(dateString);
// dateString = "2008-10-07T16:00:03Z";
// date = new Date(dateString);
// dateString = "2013-02-14T18:12:21Z";
// date = new Date(dateString);
// dateString = "2009-06-19T12:48:30Z";
// date = new Date(dateString);


const year = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
const result = year.filter(checkyear)
function checkyear(year) {

return year >= 1960;
}


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
