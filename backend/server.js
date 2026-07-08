const express = require("xpress")
const app = express();
const PORT = process.env.API_SERVER_PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
});