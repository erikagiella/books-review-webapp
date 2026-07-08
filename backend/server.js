const express = require("express")
const app = express();
const PORT = process.env.API_SERVER_PORT || 3000;

// register the static assets folder
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});