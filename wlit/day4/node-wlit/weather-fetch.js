import http from "http";



const server = http.createServer(async(req,res) => {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true` // Example: Tokyo coordinates        )
        )
        const data = await response.json();
        res.end(JSON.stringify(data));

});








const PORT= 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

//you see two incoming req in console because one is for loadin page and other for the fabicon


//handling req and response and implementing basic 