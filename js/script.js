function song(){
fetch("https://rapidapi.p.rapidapi.com/lyrics/zenith%20denzel%20curry", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
        "x-rapidapi-key": "a699de63cdmsh0ee20836b2cf69cp1d65adjsn0f8393163ea8"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}