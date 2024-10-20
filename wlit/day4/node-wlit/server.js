import http from "http";

// creating http server
// const server = http.createServer((req,res) => {
//     console.log(req.url); //to see the url
//     console.log(req.method) //req ko method
//     console.log("incoming req from nodemon");
//     res.end("Hello, World again \n");
// });

const server = http.createServer((req,res) => {
        console.log(req.url); //to see the url
        switch(req.url){
            case "/":
                res.end("<h1>HoME Page <h1>");
                break;
            case "/about":
                res.end("<h1>about HoME Page <h1>");
                break;
            case "/contact":
                res.end("<h1>contact HoME Page <h1>");
                break;
            default:
                res.end("<h1>Page not found <h1>");
                break;


        }

});








const PORT= 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

//you see two incoming req in console because one is for loadin page and other for the fabicon


//handling req and response and implementing basic 