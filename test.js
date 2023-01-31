function renderPlanet(r) {
return `<div class = "rabbitcard"><p>${r.name}</p><p>${r.climate}</p></div>`;
}

fetch("https://swapi.dev/api/planets")
.then(response => response.json())