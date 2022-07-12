const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "./public")

function getiingHttpServer() {
    app.use(express.static(staticPath));

    app.get('/', function (req, res) {
        res.write("homeFile")
        res.send();
    })

    app.get("*", (req, res) => {
        res.end("Opps! Page Not Found")
    })

    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`)
    })
}
module.exports = getiingHttpServer;