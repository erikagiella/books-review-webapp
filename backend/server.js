const express = require("express")
const app = express();
const PORT = process.env.API_SERVER_PORT || 3000;
const connection = require("./database/connection");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});