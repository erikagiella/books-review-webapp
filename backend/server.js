const express = require("express")
const app = express();
const PORT = process.env.API_SERVER_PORT || 3000;
const booksRouter = require("./routes/books");

// register the static assets folder
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// books router
app.use("/api/v1/books", booksRouter);